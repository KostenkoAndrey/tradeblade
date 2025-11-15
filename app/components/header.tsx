'use client';

import React from 'react';
import Image from 'next/image';
import Navigation from '@/app/components/navigation';
import Auth_button from '@/app/components/auth_button';
import Link from 'next/link';
import Mobile_menu from '@/app/components/mobile_menu';
import SvgIcon from '@/app/components/svgIcon';

const HeaderItems = [
  { id: 1, label: 'ЦИФРЫ', href: '#digits' },
  { id: 2, label: 'СДЕЛКИ ОНЛАЙН', href: '#deals' },
  { id: 3, label: 'О КОМПАНИИ', href: '#about' },
  { id: 4, label: 'КАК НАЧАТЬ', href: '#start' },
  { id: 5, label: 'ТАРИФЫ', href: '#pricing' },
  { id: 6, label: 'ОТЗЫВЫ', href: '#reviews' },
  { id: 7, label: 'FAQ', href: '#faq' },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='w-full'>
      <div className='mx-auto max-w-[375px] min-[1440px]:max-w-[1440px] px-2 min-[1440px]:px-[80px] py-0.5 flex items-center justify-between'>
        <Link
          href='/'
          className='cursor-pointer mr-auto w-[107px] h-[52px]  min-[1440px]:w-[132px]  min-[1440px]:h-[64px]'
        >
          <Image src='/pictures/logo.png' alt='TradeBlade Logo' width={132} height={64} priority />
        </Link>

        <Navigation items={HeaderItems} classNameCont={'hidden min-[1440px]:flex'} />

        <div className='hidden min-[1440px]:flex items-center gap-3 ml-[82px] text-[1rem]'>
          <Auth_button
            title={'вход'}
            href='/login'
            className={
              'shadow-[0_0_4px_0_#57e1ff] bg-[rgba(87,225,255,0.2)] text-[#57e1ff]  hover:bg-[rgba(87,225,255,0.1)] hover:shadow-[0_0_8px_0_#57e1ff] ' +
              'focus:outline-none   focus:bg-[rgba(87,225,255,0.15)] focus:shadow-[0_0_12px_0_#57e1ff] ease-in-out'
            }
          />
          <Auth_button
            title={'регистрация'}
            href='/signup'
            className={
              'text-[#030718]  hover:bg-[#3dd9ff] hover:border-[#3dd9ff] hover:shadow-[0_0_12px_0_#57e1ff] hover:scale-105 focus:outline-none' +
              'focus:bg-[#2dd4ff] focus:shadow-[0_0_16px_0_#57e1ff] focus:scale-105'
            }
          />
        </div>
        <button onClick={() => setIsOpen(true)} className='min-[1440px]:hidden'>
          <SvgIcon name={'burger'} className={'text-white w-8 h-8 fill-current'} />
        </button>
      </div>
      <Mobile_menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
