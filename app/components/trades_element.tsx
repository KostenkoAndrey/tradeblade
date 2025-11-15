'use client';
import '../globals.css';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import SvgIcon from '@/app/components/svgIcon';

export interface pastDealsElement {
  pair: string;
  type: string;
  timeAgo: string;
  profit: string;
  isPositive: boolean;
  target: string;
  entryDate: string;
}

export interface Trades_elementProps {
  pastDealsData: pastDealsElement[];
}

const Trades_element = ({ pastDealsData }: Trades_elementProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView='auto'
      pagination={{
        clickable: true,
        type: 'progressbar',
      }}
      className='past-deals-slider !pb-[48px]'
    >
      {pastDealsData.map((deal, index) => (
        <SwiperSlide key={index} className='max-w-[300px]'>
          <div className='relative p-4 bg-[#6a54ff] rounded-[4px] [clip-path:polygon(0_0,calc(100%-42px)_0,100%_42px,100%_100%,0_100%)]'>
            <div className='text-white mb-11'>
              <h3 className='font-medium text-[20px] leading-[1.4] tracking-[-0.04em] uppercase mb-0.5'>{deal.pair}</h3>
              <div className='flex items-center gap-1 opacity-40'>
                <span className='font-medium text-[14px] leading-[1.29] tracking-[-0.02em]'>{deal.type}</span>
                <span className='bg-white w-1 h-1 rounded-full' />
                <span className='font-medium text-[14px] leading-[1.29] tracking-[-0.02em]'>{deal.timeAgo}</span>
              </div>
            </div>

            <div>
              <div className='mb-2'>
                <span className='mb-[2px] font-medium text-white text-[14px] leading-[1.29] tracking-[-0.02em] opacity-70 mb-0.5 uppercase'>
                  Прибыль
                </span>
                <span className='flex items-center gap-2 font-medium text-[#35ff9e] text-[28px] leading-[1.29] tracking-[-0.02em]'>
                  {deal.profit}
                  <Image src='/pictures/uparrow.png' alt='uparrow' width={9} height={16} priority />
                  <SvgIcon name={'up-arrow'} className='text-[#35ff9e] w-[9px] h-4' />
                </span>
              </div>

              <div className='flex justify-between text-white'>
                <span className='font-medium text-[14px] leading-[1.29] tracking-[-0.02em] opacity-70'>
                  {deal.target}
                </span>
                <span className='font-medium text-[14px] leading-[1.29] tracking-[-0.02em] opacity-40'>{`Дата входа ${deal.entryDate}`}</span>
              </div>
            </div>
            <div className='absolute top-[10px] -right-[52px]'>
              <Image src='/pictures/blade.png' alt='blade' width={162} height={160} priority />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Trades_element;
