import { ComponentProps } from "react";

type BtnProps = ComponentProps<"button">;

const Button = (props: BtnProps) => {
  return (
    <button
      {...props}
      className="flex gap-1 p-2 rounded-[3px] bg-neutral-900 text-white hover:bg-neutral-600 transition-colors duration-200 ease-in-out justify-center"
    />
  );
};

export default Button;
