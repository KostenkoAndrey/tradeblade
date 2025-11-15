import React from 'react';
import Navigation from '@/app/components/navigation';
import Link from 'next/link';
import Image from 'next/image';

const FooterItems = [
  { id: 1, label: 'ЦИФРЫ', href: '#digits' },
  { id: 2, label: 'СДЕЛКИ ОНЛАЙН', href: '#deals' },
  { id: 3, label: 'О КОМПАНИИ', href: '#about' },
  { id: 4, label: 'tradeblad это', href: '' },
  { id: 5, label: 'ТАРИФЫ', href: '#pricing' },
  { id: 6, label: 'FAQ', href: '#faq' },
];

const Footer = () => {
  return (
    <footer>
      <div
        className='max-w-[375px] flex flex-col min-[1440px]:flex-row min-[1440px]:max-w-[1440px] mx-auto
        min-[1440px]:px-[80px] min-[1440px]:h-[353px] '
      >
        <div className='flex min-[1440px]:flex-col min-[1440px]:justify-between gap-[100px] pt-10 pb-[56px] px-4 min-[1440px]:py-11 min-[1440px]:pr-[180px] h-full'>
          <span className='font-normal text-white text-[14px] leading-[1.43] opacity-40 uppercase w-[82px] min-[1440px]:w-[150px]'>
            Быстрая навигация
          </span>
          <Navigation
            items={FooterItems}
            classNameCont={'!gap-3 min-[1440px]:!gap-6 flex-col'}
            classNameElement={'text-[16px]  leading-[1.25] font-bold'}
          />
        </div>

        <div
          className='grow flex flex-col gap-20 justify-between items-start min-[1440px]:items-end border-t border-white/30
          min-[1440px]:border-l min-[1440px]:border-white/30 py-5 min-[1440px]:pt-7  min-[1440px]:pb-11'
        >
          <Link href='/' className='cursor-pointer px-4 min-[1440px]:p-0'>
            <Image src='/pictures/logo.png' alt='TradeBlade Logo' width={165} height={80} priority />
          </Link>
          <span className='min-[1440px]:ml-auto font-normal text-white text-[14px] leading-[1.43] opacity-40 px-4 min-[1440px]:p-0'>
            &#xa9; 2022 TradeBlade. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
