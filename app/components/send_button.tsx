import React from 'react';

export interface Send_buttonProps {
  title?: string;
  className?: string;
}

const Send_button = ({ title, className }: Send_buttonProps) => {
  return (
    <button
      className={`w-full min-[1440px]:max-w-[165px] py-[14px] px-6 min-[1440px]:py-4 font-medium text-[#030718] text-[14px] min-[1440px]:text-[16px] leading-[1.43] min-[1440px]:leading-[1.25] uppercase bg-[#57e1ff] rounded-[4px] shadow-[0_0_4px_0_#57e1ff]
      border-1 border-[#57e1ff] cursor-pointer transition-all duration-500 ease-in-out  hover:bg-[#3dd9ff] hover:shadow-[0_0_12px_0_#57e1ff]
      hover:scale-105 focus:outline-none focus:bg-[#2dd4ff] focus:shadow-[0_0_16px_0_#57e1ff] focus:scale-105 active:scale-100  ${className}`}
    >
      {title}
    </button>
  );
};

export default Send_button;
