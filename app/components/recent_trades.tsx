import React from 'react';
import Trades_element from '@/app/components/trades_element';

const pastDealsData = [
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    timeAgo: '1 мин. назад',
    profit: '58.6206%',
    isPositive: true,
    target: 'Цель 4',
    entryDate: '06.10.2022',
  },
  {
    pair: 'BTC/USDT',
    type: 'SPOT',
    timeAgo: '1 мин. назад',
    profit: '6.02%',
    isPositive: true,
    target: 'Цель 3',
    entryDate: '06.10.2022',
  },
  {
    pair: 'ETH/USDT',
    type: 'SPOT',
    timeAgo: '1 мин. назад',
    profit: '16.3%',
    isPositive: true,
    target: 'Цель 4',
    entryDate: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    timeAgo: '1 мин. назад',
    profit: '0.963%',
    isPositive: true,
    target: 'Цель 4',
    entryDate: '06.10.2022',
  },
  {
    pair: 'NEAR/USDT',
    type: 'SPOT',
    timeAgo: '1 мин. назад',
    profit: '58.6206%',
    isPositive: true,
    target: 'Цель 4',
    entryDate: '06.10.2022',
  },
];

const Recent_trades = () => {
  return (
    <section id='deals' className='pt-[48px] pb-[78px] min-[1440px]:pt-[96px] min-[1440px]:pb-[178px]'>
      <div className='max-w-[375px] min-[1440px]:max-w-[1440px] px-4 min-[1440px]:px-[80px] mx-auto'>
        <div className='mb-6 min-[1440px]:mb-[72px]'>
          <h2 className='font-bold text-white text-[28px] min-[1440px]:text-[44px] leading-[1.27] tracking-[-0.04em] uppercase mb-0.5 min-[1440px]:mb-1'>
            прошедшие сделки
          </h2>
          <div className='flex items-center gap-1'>
            <span className='rounded-full bg-[#35ff9e] w-[7px] h-[7px]' />
            <span className='font-normal text-[#35ff9e] text-[14px] leading-[1.42] tracking-[-0.04em] opacity-90'>
              Онлайн
            </span>
          </div>
        </div>
        <Trades_element pastDealsData={pastDealsData} />
      </div>
    </section>
  );
};

export default Recent_trades;
