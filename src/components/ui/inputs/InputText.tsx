import React from "react";
import { ComponentProps } from "react";

type InputTextProps = ComponentProps<"input">;

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className="flex gap-1 rounded-sm border p-2"
      />
    );
  },
);

export default InputText;
