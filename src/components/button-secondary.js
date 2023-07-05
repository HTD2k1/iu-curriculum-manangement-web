export const ButtonSecondary = ({
  text,
  className,
  fontSize = "text-lg",
  bgColor = "bg-transparent",
  textColor = "text-primary-500",
  icon,
  ...rest
}) => {
  return (
    <button
      className={` 
        ${className} 
        ${bgColor} 
        ${fontSize} 
        ${textColor} p-2 rounded flex items-center justify-center border border-primary-500
        `}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
