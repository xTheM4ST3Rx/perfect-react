import Button from "@/components/ui/buttons/Button";
import InputText from "@/components/ui/inputs/InputText";
import { useState } from "react";
import { z } from "zod";

//----------------------------------------------------
const loginSchema = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .refine((value) => /[A-Z]/.test(value), "Pelo menos uma letra maiúscula"),
});
//----------------------------------------------------
type LoginForm = z.infer<typeof loginSchema>;
//----------------------------------------------------
export function LoginPage() {
  const [output, setOutput] = useState<string>();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  //----------------------------------------------------
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);

    if (result.success) {
      setOutput(JSON.stringify(result, null, 2));
      setErrors({}); // Limpar erros
    } else {
      setOutput(JSON.stringify(result.error, null, 2));
      const errorMap: { [key: string]: string } = {};
      for (const issue of result.error.issues) {
        errorMap[issue.path[0]] = issue.message;
      }
      setErrors(errorMap);
    }
  }
  //----------------------------------------------------
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  //----------------------------------------------------

  return (
    <div className="flex h-screen items-center justify-evenly ">
      <form
        onSubmit={(e) => submitForm(e)}
        className="flex w-full max-w-xs flex-col gap-2 p-2"
      >
        <div className="text-3xl font-bold">Sign In</div>

        <InputText
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <div className="animate-pulse text-sm text-red-500">{errors.email}</div>

        <InputText
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <div className="animate-pulse text-sm text-yellow-500">
          {errors.password}
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Manter conectado</label>
        </div>

        <Button type="submit">Conectar</Button>
      </form>
      <pre className="">{output}</pre>
    </div>
  );
}
