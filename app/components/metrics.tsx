import React from 'react';

export interface MetricsProps {
  title: string;
  date: string;
}

const statsData = [
  {
    label: 'торговой прибыли',
    value: '2756%',
  },
  {
    label: 'фьючерсных и спотовых сделок',
    value: '67',
  },
  {
    label: 'прибыль подписчиков',
    value: '375000',
  },
];

const Metrics = ({ title, date }: MetricsProps) => {
  return (
    <section id='digits' className='w-full bg-white pt-6 pb-12 min-[1440px]:pb-[60px] min-[1440px]:pt-[65px]'>
      <div
        className='max-w-[375px] min-[1440px]:max-w-[1440px] px-4 min-[1440px]:px-[80px] mx-auto flex flex-col min-[1440px]:flex-row
        min-[1440px]:items-start gap-[38px] min-[1440px]:gap-[160px] relative'
      >
        <div
          className='absolute -top-[47px] right-[100px] min-[1440px]:-top-[124px] min-[1440px]:right-[801] w-full h-6 min-[1440px]:h-[60px] bg-white min-[1440px]:[clip-path:polygon(0_0,calc(100%-60px)_0,100%_100%,0_100%)]
        [clip-path:polygon(0_0,calc(100%-60px)_0,100%_60px,100%_100%,0_100%)]'
        />

        <div>
          <h2 className='font-bold text-black text-[28px] min-[1440px]:text-[44px] leading-[1.29] min-[1440px]:leading-[1.27] tracking-[-0.04em] uppercase min-[1440px]:mb-1'>
            {title}
          </h2>
          <span className='font-normal text-black text-[14px] leading-[1.42] tracking-[-0.04em] opacity-50'>
            {date}
          </span>
        </div>

        <ul className='flex flex-wrap min-[1440px]:justify-start min-[1440px]:flex-row min-[1440px]:items-end gap-x-10 gap-y-[34px]'>
          {statsData.map((metric, index) => (
            <li
              key={index}
              className={`flex flex-col gap-1 min-[1440px]:gap-2 max-w-[140px] min-[1440px]:max-w-[260px] ${index === 0 ? 'min-[1440px]:mr-[130px]' : ''} ${index === 1 ? 'min-[1440px]:mr-[75px]' : ''} `}
            >
              <span className='text-left font-normal text-black text-[14px] leading-[1.42] uppercase opacity-80'>
                {metric.label}
              </span>
              <span className='font-medium text-[#6a54ff] text-[35px] min-[1440px]:text-[60px] leading-[1.1] tracking-[-0.02em]'>
                {metric.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Metrics;
