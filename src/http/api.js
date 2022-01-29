import axios from "axios";
import router from "../router";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use(
  function (config) {
    let accessToken = localStorage.getItem("jwtAccessToken");
    config.headers.Authorization = "Bearer " + accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.data.code === "not-valid-token" &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        let refresh = await api.get("/v1/user/refresh");
        localStorage.setItem(
          "jwtAccessToken",
          refresh.data.data.tokens.accessToken
        );
        api.defaults.headers.common["Authorization"] =
          "Bearer " + refresh.data.data.tokens.accessToken;
        return api.request(originalRequest);
      } catch (e) {
        localStorage.setItem("jwtAccessToken", "");
        router.push("login");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
