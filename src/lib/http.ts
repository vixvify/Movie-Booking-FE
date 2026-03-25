import axios from "axios";
import { ApiError } from "./api-error";
import { ApiResponse } from "@/infra/interface/response";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const data = error.response.data as ApiResponse<unknown>;

      return Promise.reject(
        new ApiError(
          data?.error || "Request failed",
          data?.status,
          data.statusCode,
        ),
      );
    }

    if (error.request) {
      return Promise.reject(
        new ApiError("Network error", 500, "NETWORK_ERROR"),
      );
    }

    return Promise.reject(new ApiError(error.message));
  },
);

export default http;
