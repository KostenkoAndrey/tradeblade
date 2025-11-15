'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export interface ButtonProps {
  title: string;
  className?: string;
  href: string;
}

const Auth_button = ({ title, className, href }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className={`py-[9px] px-[22px] font-medium text-[14px] leading-[1.42] uppercase bg-[#57e1ff] rounded-[3px]
      border-2 border-[#57e1ff] cursor-pointer  transition-all duration-500 w-full ${className}`}
    >
      {title}
    </button>
  );
};

export default Auth_button;
