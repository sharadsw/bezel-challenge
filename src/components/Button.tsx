import { FunctionComponent } from "react";

type ButtonProps = {
  className?: string;
  title: string;
  onClick: () => void;
};

const DEFAULT_CLASSES = ` 
p-4 
font-semibold 
leading-normal 
border-none 
text-center 
no-underline 
align-middle 
cursor-pointer 
select-none 
text-base 
rounded-3xl 
transition-colors 
ease-in-out 
delay-15`;

export const ButtonPrimary: FunctionComponent<ButtonProps> = ({
  className,
  title,
  onClick,
}) => {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 text-white ${DEFAULT_CLASSES} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export const ButtonClear: FunctionComponent<ButtonProps> = ({
  className,
  title,
  onClick,
}) => {
  return (
    <button
      className={`bg-transparent hover:bg-beige-200 text-green-500 ${DEFAULT_CLASSES} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
