import { type ComponentProps } from "react";

type variants =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "success";

type Button = ComponentProps<"button"> & {
  variant?: variants;
};

function Button({ children, className, variant, ...rest }: Button) {
  return (
    <button {...rest} className={`${checkVariant(variant)} ${className ?? ""} rounded-2xl p-2 mt-2`}>
      {children}
    </button>
  );
}

function checkVariant(variant?: variants) {
  switch (variant) {
    case "primary":
      return "bg-blue-500 text-white hover:bg-blue-600";
    case "secondary":
      return "bg-gray-500 text-white hover:bg-gray-600";
    case "danger":
      return "bg-red-500 text-white hover:bg-red-600";
    case "warning":
      return "bg-yellow-500 text-white hover:bg-yellow-600";
    case "info":
      return "bg-teal-500 text-white hover:bg-teal-600";
    case "light":
      return "bg-white text-black hover:bg-gray-100 border border-gray-300";
    case "dark":
      return "bg-black text-white hover:bg-gray-800";
    case "success":
      return "bg-green-500 text-white hover:bg-green-600";
    default:
      return "bg-blue-500 text-white hover:bg-blue-600";
  }
}

export default Button;
