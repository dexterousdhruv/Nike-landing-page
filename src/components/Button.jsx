import React from "react";

const Button = ({ label, iconURL, bgColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border leading-none rounded-full ${bgColor ?? 'bg-coral-red' }  ${textColor ?? "text-white"} ${borderColor ?? 'border-coral-red' } ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && <img
        src={iconURL}
        alt="arrow-right-icon"
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  );
};

export default Button;
