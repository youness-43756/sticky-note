import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "*Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "*Password must be at least 6 characters long.",
  }),
});

export const registerSchema = z.object({
  username: z.string().min(4, {
    message: "*Username must be at least 4 characters long.",
  }),
  email: z.string().email({
    message: "*Invalid email address!",
  }),
  password: z.string().min(6, {
    message: "*Password must be at least 6 characters long.",
  }),
  confirmPassword: z.string().min(6, {
    message: "*Password must be at least 6 characters long.",
  }),
});
