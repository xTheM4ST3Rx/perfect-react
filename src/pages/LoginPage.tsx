import { AuthProps, AuthSchema } from "@/common/types/userTypes";
import Button from "@/components/ui/buttons/Button";
import InputText from "@/components/ui/inputs/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function LoginPage() {
  const [output, setOutput] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthProps>({
    resolver: zodResolver(AuthSchema),
  });

  function submitForm(data: AuthProps) {
    console.log(data);
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <div className="flex h-screen items-center justify-evenly ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex w-full max-w-xs flex-col gap-2 p-2"
      >
        <div className="text-3xl font-bold">Sign In</div>

        <InputText placeholder="Email" {...register("email")} />
        <InputText placeholder="Password" {...register("password")} />

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Manter conectado</label>
        </div>

        <Button type="submit">Conectar</Button>

        {errors.email?.message && (
          <div className="text-red-500">
            <p>{errors.email?.message}</p>
          </div>
        )}
        {errors.password?.message && (
          <div className="text-red-500">
            <p>{errors.password?.message}</p>
          </div>
        )}
      </form>
      <pre className="">{output}</pre>
    </div>
  );
}
