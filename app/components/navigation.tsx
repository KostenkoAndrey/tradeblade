'use client';

import React from 'react';

export interface ElementsProps {
  id: number;
  label: string;
  href: string;
}

export interface NavigationProps {
  classNameCont?: string;
  classNameElement?: string;
  items?: ElementsProps[];
  setIsOpen?: (isOpen: boolean) => void;
}

const Navigation = ({ items = [], classNameCont, classNameElement, setIsOpen }: NavigationProps) => {
  return (
    <nav>
      <ul className={`flex gap-8 ${classNameCont}`}>
        {items.map((el) => (
          <li key={el.id} onClick={() => setIsOpen?.(false)}>
            <a
              href={el.href}
              className={`font-medium text-[14px] leading-[1.21] uppercase text-[#C5D0E6] transition-colors duration-500 ease-in-out
                hover:text-[#57e1ff] focus:outline-none focus:text-[#57e1ff] cursor-pointer ${classNameElement}`}
            >
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
