import { RiCloseFill } from "@remixicon/react";
import InputDefault from "../components/input/input-default";
import PrimaryButton from "../components/button/btn-primary";

export default function ForgotPassword() {
  return (
    <section className="bg-[#a3a3a3] xl:relative w-full xl:w-screen xl:h-screen">
      <div className="modal xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 bg-light-200 w-full xl:w-[600px] h-full xl:h-[390px] xl:rounded-lg px-4 xl:px-6 pt-12 xl:pt-6 pb-16">
        <div className="w-full flex justify-end mb-[140px] xl:mb-4">
          <RiCloseFill
          size={24}/>
        </div>
        <h2 className="font-basier-circle text-center text-xl text-dark-300 leading-[26px] font-bold mb-4">Did you forget the password ?</h2>
        <p className="text-dark-300 text-base text-center leading-6 font-normal mb-8 xl:mb-6">Enter the e-mail address in the field below.
          <br/>
          We will send a link to change your password to your e-mail.</p>
        <form action="#" method="post" className="flex flex-col items-center gap-[267px] xl:gap-6">
          <InputDefault
          label='E-mail'
          typeInput='email'
          width='w-[300px] md:w-[343px] xl:w-[373px]'/>
          <button type="submit">
            <PrimaryButton
            width='w-[198px]'
            text='Reset Password'/>
          </button>
        </form>
      </div>
    </section>
  )
}