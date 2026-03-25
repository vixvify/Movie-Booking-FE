export class ApiError extends Error {
  statusCode?: string;
  status?: number;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.status = status;
    this.statusCode = code;
  }
}
