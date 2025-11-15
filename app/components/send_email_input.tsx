import React from 'react';
import Send_button from '@/app/components/send_button';

export interface Send_email_inputProps {
  name: string;
  type: string;
  placeholder: string;
  buttonTitle: string;
  className?: string;
  classInput?: string;
  classNameButton?: string;
}

const Send_email_input = ({
  buttonTitle,
  placeholder,
  name,
  type,
  className,
  classInput,
  classNameButton,
}: Send_email_inputProps) => {
  return (
    <div className={`flex items-center min-[1440px]:pl-4 p-1 bg-[#201a4f] w-full rounded-[4px] ${className}`}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`font-medium text-[14px] min-[1440px]:text-[16px] text-white leading-[1.42] min-[1440px]:leading-[1.25]
        tracking-[-0.01em] opacity-34 uppercase w-full outline-none ${classInput}`}
      />
      <Send_button title={buttonTitle} className={classNameButton} />
    </div>
  );
};

export default Send_email_input;
