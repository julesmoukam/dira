import type { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function PrimaryButton({
  variant = "primary",
  className,
  children,
  ...rest
}: PrimaryButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button className={[base, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </button>
  );
}
