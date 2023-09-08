import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rodrigomoreirasantos01@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 xl:justify-center md:justify-center mx-auto items-center md:items-start xm:justify-start">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 xl:text-2xl xs:text-base xm:text-lg">
        Contact
      </h3>

      <div className="flex flex-col space-y-14 xm:relative xm:top-40">
        <h4 className="xl:text-4xl xs:text-lg xm:text-lg font-semibold text-center xs:mt-44">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets talk</span>
        </h4>

        <div className="space-y-10 xm:space-y-12">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="xl:text-2xl xs:text-lg xm:text-xl">
              rodrigomoreirasantos01@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="xl:text-2xl xs:text-lg xm:text-xl">
              +1 (438) 379-0525
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="xl:text-2xl xs:text-lg xm:text-xl">Montréal, QC</p>
          </div>
        </div>

        {/* <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input 
                        {...register('name')}
                        placeholder='Name' 
                        className='contactInput' 
                        type="text" 
                    />

                    <input
                        {...register('email')}
                        placeholder='Email' 
                        className='contactInput' 
                        type="email" 
                    />
                </div>

                <input
                    {...register('subject')}
                    placeholder='Subject' 
                    className='contactInput' 
                    type="text" 
                />

                <textarea 
                    {...register('message')}
                    placeholder='Message' 
                    className='contactInput' 
                />

                <button
                    onSubmit={handleSubmit(onSubmit)} 
                    type='submit'
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                >
                    Submit
                </button>
            </form> */}
      </div>
    </div>
  );
}
