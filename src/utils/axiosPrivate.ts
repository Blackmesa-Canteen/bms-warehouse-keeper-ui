import axios from "axios";

import { memoizedRefreshToken } from "./refreshToken";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem("session"));

    if (session?.token) {
      // @ts-ignore
      config.headers = {
        "Content-Type": "application/json",
        ...config.headers,
        authorization: `Bearer ${session?.token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.data) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.token}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const axiosPrivate = axios;
