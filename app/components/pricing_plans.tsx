'use client';

import React, { useState } from 'react';
import SvgIcon from '@/app/components/svgIcon';

const typebutton = [
  { label: 'spot', name: 'спот' },
  { label: 'futures', name: 'фьючерс' },
];

const PricingPlan = [
  {
    name: 'STANDART',
    features: [
      'Ручной трейдинг',
      'Автоматическое или полуавтоматическое копирование сделок',
      'Личный кабинет со статистикой',
      'Среднесрочные сделки с уровнями набора портфеля',
    ],
    price: 234,
    discount: '-35%',
    duration: '12 месяцев',
    isVip: false,
  },
  {
    name: 'VIP',
    features: [
      'Ручной трейдинг',
      'Автоматическое или полуавтоматическое копирование сделок',
      'Личный кабинет со статистикой',
      'Краткосрочные, среднесрочные и инвест сделки',
      'Доступ в Vip чат с командой',
      'Наш авторский курс по трейдингу',
    ],
    price: 585,
    discount: '-35%',
    duration: '12 месяцев',
    isVip: true,
  },
];

const Pricing_plans = () => {
  const [activeTab, setActiveTab] = useState('spot');

  return (
    <section id='pricing' className='pt-[56px] pb-[44px] min-[1440px]:py-[96px]'>
      <div className='max-w-[375px] min-[1440px]:max-w-[1440px] mx-auto px-4 min-[1440px]:px-[297px]'>
        <h2
          className='font-bold text-white text-[28px] min-[1440px]:text-[44px] leading-[1.29] min-[1440px]:leading-[1.27]
          tracking-[-0.04em] uppercase mb-6 min-[1440px]:mb-10 text-left'
        >
          тарифы
        </h2>

        <div className='flex justify-start mb-6 min-[1440px]:mb-11 w-full'>
          <div className='flex rounded-[4px] bg-[#6A54FF] p-1'>
            {typebutton.map((el, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(el.label)}
                className={`grow py-[10px] min-[1440px]:py-2 w-[167px] min-[1440px]:w-[201px] text-[18px] min-[1440px]:text-[24px]
                leading-[1.3] min-[1440px]:leading-[1.17] tracking-[-0.04em] rounded-[4px] cursor-pointer transition-all 
                duration-500 ease-out uppercase ${
                  activeTab === el.label ? 'font-bold text-black bg-[#57e1ff]' : 'font-medium text-[#57e1ff]'
                }`}
              >
                {el.name}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 min-[1440px]:grid-cols-2 gap-6 min-[1440px]:gap-5'>
          {PricingPlan.map((element, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between gap-12 py-4 min-[1440px]:py-6 rounded-[8px] text-white ${
                element.name === 'STANDART' ? 'border border-[#6a54ff]' : 'bg-[#6a54ff]'
              }`}
            >
              <div>
                <h3
                  className='font-medium text-[20px] min-[1440px]:text-[32px] leading-[1.4] min-[1440px]:leading-[1.5] tracking-[-0.04em]
                  pl-4 min-[1440px]:pl-6 mb-6 min-[1440px]:mb-[56px]'
                >
                  {element.name}
                </h3>
                <ul className='flex flex-col'>
                  {element.features.map((el, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-start gap-[10px] pl-4 min-[1440px]:pl-6 pr-6 pb-1 mb-[11px] border-b border-dashed border-white/30 last:border-b-0 last:mb-0 last:pb-0'
                    >
                      <SvgIcon name={'tick'} className='w-3 h-3 min-w-[12px] text-white flex-shrink-0 mt-1' />
                      <span className='font-normal text-[16px] leading-[1.25]'>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-col gap-6 px-4 min-[1440px]:px-6'>
                <div className='flex justify-between items-center'>
                  <div className='relative inline-block'>
                    <span className='text-white font-medium text-[35px] leading-[1.14] tracking-[-0.04em]'>
                      ${element.price}
                    </span>
                    <span className='absolute -top-[2px] left-[calc(100%+5px)] text-[#35ff9e] font-medium text-[18px] leading-[1.11] tracking-[-0.04em] uppercase whitespace-nowrap'>
                      {element.discount}
                    </span>
                  </div>

                  <div className='relative'>
                    <select
                      className='max-w-[126px] appearance-none bg-[#505070] text-[16px] text-white pl-2 pr-8 py-[6px] rounded-[4px] cursor-pointer
                      font-normal border-none outline-none hover:bg-[#5a5a80] transition-colors'
                    >
                      <option value='12'>{element.duration}</option>
                      <option value='6'>6 месяцев</option>
                      <option value='3'>3 месяца</option>
                      <option value='1'>1 месяц</option>
                    </select>
                    <SvgIcon
                      name={'down-arrow'}
                      className='absolute right-2 top-1/2 -translate-y-1/2 w-4 h-2 text-white pointer-events-none'
                    />
                  </div>
                </div>

                <button
                  className='w-full bg-[#57e1ff] active:scale-[0.98] text-[#030718] py-[8px] rounded-[4px]
                    cursor-pointer transition-all duration-500 ease-in-out  hover:bg-[#3dd9ff]
                    hover:shadow-[0_0_12px_0_#57e1ff] hover:scale-105 focus:outline-none focus:bg-[#2dd4ff] focus:shadow-[0_0_16px_0_#57e1ff] focus:scale-105 active:scale-100'
                >
                  <div className='font-medium text-[16px] leading-[1.25]'>ПОПРОБОВАТЬ</div>
                  <div className='font-normal text-[12px] leading-[1.33] opacity-56'>5 дней бесплатно</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing_plans;
