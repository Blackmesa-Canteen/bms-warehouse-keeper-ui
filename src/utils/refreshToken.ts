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

    // TODO check data structure
    const { session } = response.data;

    if (!session?.data?.token) {
      localStorage.removeItem("session");
      localStorage.removeItem("user");
    }

    localStorage.setItem("session", JSON.stringify(session.data));

    return session;
  } catch (error) {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
  }
};

const maxAge = 30 * 60 * 1000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
