import { RiCloseFill } from "@remixicon/react";
import InputDefault from "../components/input/input-default";
import PrimaryButton from "../components/button/btn-primary";

export default function Login() {
  return (
    <section className="bg-[#a3a3a3] xl:relative w-full xl:w-screen h-screen">
      <div className="modal xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 bg-light-200 w-full xl:w-[546px] h-full xl:h-[490px] xl:rounded-lg px-4 xl:px-6 pt-12 xl:pt-6 pb-16">
        <div className="w-full flex justify-end mb-20 xl:mb-4">
          <RiCloseFill
          size={24}/>
        </div>
        <h2 className="font-basier-circle text-center text-xl text-dark-300 leading-[26px] font-bold mb-[151px] xl:mb-6">Welcome back! Log in</h2>
        <form action="#" method="post" className="flex flex-col items-center">
          <InputDefault
          label='Login/e-mail'
          width='w-[300px] md:w-[343px] xl:w-[373px] mb-4'/>
          <InputDefault
          label='Password'
          width='w-[300px] md:w-[343px] xl:w-[373px]'/>
          <div className="w-full text-end text-base text-primary-100 text-end leading-4 font-normal mb-[136px] xl:mb-6">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit">
            <PrimaryButton
            width='w-[198px]'
            text='Login'/>
          </button>
        </form>
          <p className="text-center text-sm text-dark-300 leading-6 mt-6">You do not have an account? <span className="text-base text-primary-100"><a href="#">Register</a></span></p>
      </div>
    </section>
  )
}