import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  email: z.string().email("Formato de email inválido"),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .refine((value) => /[A-Z]/.test(value), "Pelo menos uma letra maiúscula"),
});

export type UserProps = z.infer<typeof UserSchema>;

export const AuthSchema = UserSchema.pick({ email: true, password: true });

export type AuthProps = z.infer<typeof AuthSchema>;
