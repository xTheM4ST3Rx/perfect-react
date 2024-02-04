import { ComponentProps } from "react";

type InputTextProps = ComponentProps<"input">;

const InputText = (props: InputTextProps) => {
  return <input {...props} className="border flex gap-1 p-2 rounded-sm" />;
};

export default InputText;
