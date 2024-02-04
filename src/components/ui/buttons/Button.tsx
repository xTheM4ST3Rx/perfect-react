import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "text-white",
  variants: {
    color: {
      primary: "border-blue-500 bg-blue-500 hover:bg-blue-500/40",
      secundary: "border-green-500 bg-green-500 hover:bg-green-500/40",
      destroyer: "border-red-500 bg-red-500 hover:bg-red-500/40",
    },
    size: {
      sm: "p-2 text-sm",
      md: "p-3 text-md",
      lg: "p-4 text-lg",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
});

type BtnProps = ComponentProps<"button"> & VariantProps<typeof button>;

const Button = ({ color, size, ...props }: BtnProps) => {
  return <button {...props} className={button({ color, size })} />;
};

export default Button;
