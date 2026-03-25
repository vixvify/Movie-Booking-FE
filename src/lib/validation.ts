import { ZodSchema } from "zod";

export function parseSchema<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  return result.data;
}
