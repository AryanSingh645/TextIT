import {z} from "zod";

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 characters")
.max(20, "Username must atmost 20 characters")
.regex(/^[a-zA-Z0-9_@]+$/, "Username can only contain letters, numbers, underscores, and @");