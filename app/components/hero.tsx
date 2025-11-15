import React from 'react';
import Image from 'next/image';
import Send_email_input from '@/app/components/send_email_input';

const Hero = () => {
  return (
    <section className='w-full pt-10 pb-[60px] min-[1440px]:pt-[160px] min-[1440px]:pb-[194px]'>
      <div className='max-w-[375px] min-[1440px]:max-w-[1440px] mx-auto text-white px-4 min-[1440px]:pl-[80px] min-[1440px]:pr-[132px]'>
        <div className='flex flex-col-reverse min-[1440px]:flex-row justify-between items-start mb-5'>
          <div>
            <h1 className='max-w-[630px] font-bold text-white text-[35px] min-[1440px]:text-[60px] leading-[1.25] min-[1440px]:leading-[1.2] tracking-[-0.04em] uppercase mb-3'>
              моментально копируй сделки профи трейдеров
            </h1>
            <span className='inline-block max-w-[565px] font-normal text-[#e7f7f8] text-[16px] leading-[1.25] opacity-80'>
              Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
            </span>
          </div>

          <div className='w-[300px] h-[134px] min-[1440px]:w-[469px] min-[1440px]:h-[209px] mb-8 min-[1440px]:mb-0'>
            <Image src='/pictures/promo.png' alt='Promo' width={469} height={209} priority />
          </div>
        </div>
        <div className='max-w-[500px] w-full'>
          <Send_email_input
            name={'email'}
            type={'email'}
            buttonTitle={'начать'}
            placeholder={'Ваш e–mail'}
            className={'pl-4'}
            classNameButton={'max-w-[102px] !py-3'}
          />
          <span className='inline-block font-normal text-white text-[14px] leading-[1.42] mt-3 opacity-30'>
            5 дней бесплатного пользования
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
