export const Button = ({
  text,
  className,
  fontSize = "text-lg",
  bgColor = "bg-primary-500",
  textColor = "text-white",
  icon,
  ...rest
}) => {
  return (
    <button
      className={` 
        ${className} 
        ${bgColor} 
        ${fontSize} 
        ${textColor} p-2 rounded flex items-center justify-center
        `}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
