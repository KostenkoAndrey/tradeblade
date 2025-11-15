'use client';

import React, { useState } from 'react';
import SvgIcon from '@/app/components/svgIcon';

const faqData = [
  {
    question: 'Что такое TradeBlade',
    answer: `Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.

Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.`,
  },
  {
    question: 'Что TradeBlade предлагает инвесторам',
    answer: 'Ответ на второй вопрос...',
  },
  {
    question: 'Должен ли я перевести свои средства на TradeBlade',
    answer: 'Ответ на третий вопрос...',
  },
];

const Faq_section = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id='faq' className='bg-white py-[56px] min-[1440px]:py-[96px]'>
      <div className='max-w-[375px] min-[1440px]:max-w-[1440px] mx-auto px-4 min-[1440px]:px-[297px]'>
        <h2
          className='font-bold text-[28px] min-[1440px]:text-[44px] leading-[1.29] min-[1440px]:leading-[1.27]
          tracking-[-0.04em] uppercase mb-[40px] min-[1440px]:mb-[64px]'
        >
          часто задаваемые вопросы
        </h2>

        <div className='flex flex-col gap-[14px]'>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-[4px] overflow-hidden transition-all ${
                openIndex === index ? 'bg-[#6a54ff]' : 'bg-gray-100'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full flex items-center justify-between p-4 pb-3 pr-5 text-left'
              >
                <h3
                  className={`font-medium text-[20px] min-[1440px]:text-[24px] leading-[1.4] min-[1440px]:leading-[1.33] tracking-[-0.04em] ${
                    openIndex === index ? 'text-white' : 'text-[#030718]'
                  }`}
                >
                  {item.question}
                </h3>
                <SvgIcon
                  name='down-arrow'
                  className={`w-4 h-3 text-[#030718] fill-current transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-white' : 'text-[#030718]'
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-4 pb-4 text-white text-[16px] leading-[1.25] whitespace-pre-line'>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq_section;
