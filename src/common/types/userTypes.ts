import { z } from "zod";
//-------------------------------------------------------------------------
const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  email: z.string().email("Formato de email inválido"),
});
type UserProps = z.infer<typeof UserSchema>;

export { UserSchema, type UserProps };
//-------------------------------------------------------------------------
const password = z
  .string()
  .min(6, "Senha deve ter no mínimo 6 caracteres")
  .refine((value) => /[A-Z]/.test(value), "Pelo menos uma letra maiúscula");

const AuthSchema = UserSchema.pick({ email: true }).extend({ password });
type AuthProps = z.infer<typeof AuthSchema>;

export { AuthSchema, type AuthProps };
//-------------------------------------------------------------------------
