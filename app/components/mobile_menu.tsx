import React from 'react';
import SvgIcon from '@/app/components/svgIcon';
import Navigation from '@/app/components/navigation';
import Auth_button from '@/app/components/auth_button';

export interface Mobile_menuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FooterItems = [
  { id: 1, label: 'ЦИФРЫ', href: '#digits' },
  { id: 2, label: 'СДЕЛКИ ОНЛАЙН', href: '#deals' },
  { id: 3, label: 'О КОМПАНИИ', href: '#about' },
  { id: 4, label: 'КАК НАЧАТЬ', href: '#start' },
  { id: 5, label: 'ТАРИФЫ', href: '#pricing' },
  { id: 6, label: 'ОТЗЫВЫ', href: '#reviews' },
  { id: 7, label: 'FAQ', href: '#faq' },
];

const Mobile_menu = ({ isOpen, setIsOpen }: Mobile_menuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#6a54ff] pt-4 pb-4 transition-transform duration-500 ease-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className='flex flex-col justify-between max-w-[375px] mx-auto pl-4 pr-4 h-full'>
        <div>
          <button onClick={() => setIsOpen(false)} className='mb-[52px] ml-auto cursor-pointer block'>
            <SvgIcon name={'exit'} className={'w-4 h-4 fill-white'} />
          </button>
          <Navigation
            setIsOpen={setIsOpen}
            items={FooterItems}
            classNameCont={'flex-col'}
            classNameElement={'text-[24px] leading-[1.25]'}
          />
        </div>
        <div className='flex gap-4'>
          <Auth_button
            title={'регистрация'}
            href={'/signup'}
            className={'shadow-[0_0_4px_0_#57e1ff] text-[16px] leading-[1.25] !py-[13px]'}
          />
          <Auth_button
            title={'войти'}
            href={'/login'}
            className={'shadow-[0_0_4px_0_#57e1ff] !bg-[#6a54ff] text-[#57e1ff] text-[16px] leading-[1.25 !py-[13px]'}
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile_menu;
