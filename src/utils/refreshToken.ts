import mem from "mem";

import { axiosPublic } from "./axiosPublic";
import ApiRequestMap from './apiRequestMap';

const refreshTokenFn = async () => {
  const { refreshToken } = JSON.parse(localStorage.getItem("session"));

  try {
    const userApi = ApiRequestMap.user as Record<string, string>
    const response = await axiosPublic.post(`${userApi.postRefreshToken}`, {
      refreshToken: refreshToken,
    });

    const { session } = response.data;

    if (!session?.accessToken) {
      localStorage.removeItem("session");
      localStorage.removeItem("user");
    }

    localStorage.setItem("session", JSON.stringify(session));

    return session;
  } catch (error) {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
