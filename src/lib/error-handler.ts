import { ApiError } from "./api-error";

const errorMessages: Record<string, string> = {
  USER_NOT_FOUND: "ไม่พบผู้ใช้",
  INVALID_TOKEN: "Session หมดอายุ",
};

export function handleError(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 401) {
      return "กรุณา login ใหม่";
    }

    if (error.statusCode && errorMessages[error.statusCode]) {
      return errorMessages[error.statusCode];
    }

    return error.message;
  }

  return "Something went wrong";
}
