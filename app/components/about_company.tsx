import React from 'react';
import Send_email_input from '@/app/components/send_email_input';

const About_company = () => {
  return (
    <section id='about' className='py-6 min-[1440px]:pt-[56px] min-[1440px]:pb-[96px] bg-white'>
      <div
        className='relative flex flex-col min-[1440px]:flex-row min-[1440px]:items-end min-[1440px]:justify-between max-w-[375px]
        min-[1440px]:max-w-[1440px] min-[1440px]:px-[80px] mx-auto text-black'
      >
        <div
          className='absolute -top-[47px] right-[100px] min-[1440px]:-top-[115px] min-[1440px]:right-[801] w-full h-6 min-[1440px]:h-[60px]
        bg-white min-[1440px]:[clip-path:polygon(0_0,calc(100%-60px)_0,100%_100%,0_100%)] [clip-path:polygon(0_0,calc(100%-60px)_0,100%_60px,100%_100%,0_100%)]'
        />

        <div className='max-w-[413px] mb-10 min-[1440px]:mb-0 px-4 min-[1440px]:p-0'>
          <h2 className='mb-5 min-[1440px]:mb-[40px] font-bold text-[28px] min-[1440px]:text-[44px] leading-[1.27] tracking-[-0.04em] uppercase'>
            О компании
          </h2>
          <p className='font-normal text-[#030718] text-[16px] leading-[1.25] opacity-80'>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным
            брокером биржи Binance.
            <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и
            возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>

        <div className='px-[10px] min-[1440px]:p-0'>
          <div
            className='bg-[#6a54ff] rounded-[4px] p-4 min-[1440px]:pt-8  min-[1440px]:pb-10  min-[1440px]:px-[64px]
          max-w-[630px] w-full'
          >
            <h3
              className='font-medium text-white text-[20px] min-[1440px]:text-[28px] leading-[1.4] min-[1440px]:leading-[1.29]
            tracking-[-0.04em] mb-[18px] min-[1440px]:mb-8 text-center'
            >
              Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования
            </h3>
            <Send_email_input
              name={'email'}
              type={'email'}
              buttonTitle={'попробовать'}
              placeholder={'Ваш e–mail'}
              className={
                ' !bg-[#6a54ff] min-[1440px]:!bg-[#4a3bb3] flex-col min-[1440px]:flex-row gap-[6px] min-[1440px]:gap-0'
              }
              classInput={'rounded-[4px] p-4 !bg-[#4a3bb3]'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_company;
