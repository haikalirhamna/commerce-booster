import { useRef } from 'react'
import IconOnlyButtonFilled from '../../components/button-icon-only/btn-icon-filled'

// import favicon
import { RiArrowLeftSLine, RiArrowRightLine, RiArrowRightSLine } from '@remixicon/react'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Pagination } from 'swiper/modules';

export default function CarouselBrand() {

  const swiperRef = useRef(null);

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='container'>
      <div className="flex justify-center xl:justify-between items-center mb-6 xl:mb-8">
          <h1 className='title font-basier-circle text-center xl:text-start'>Our brands</h1>
          <a href="#" className="hidden xl:flex items-center text-base text-primary-100 font-medium leading-4">Show all brands
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
          </a>
      </div>
      <Swiper
        className='mb-6 xl:mb-20'
        ref={swiperRef}
        modules={[Keyboard, Pagination]}
        spaceBetween={16}
        loop={true}
        slidesPerView={1}
        pagination={{ 
          clickable:true,
          dynamicBullets: true
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        keyboard={{
          enabled: true,
        }}
      >
        <SwiperSlide className='w-[144xp] h-[64px] 3xl:w-[301px] 3xl:h-[88px] flex items-center justify-center px-6 3xl:px-12 py-4 3xl:py-2.5 border-solid border-[1px] border-light-300 rounded-lg'>
          <img className='w-[96.5px] 2xl:w-[205px] h-8 2xl:h-[68px]' src="/image/brand sharp.png" alt="brand sharp" />
        </SwiperSlide>
        <SwiperSlide className='w-[144xp] h-[64px] 3xl:w-[301px] 3xl:h-[88px] flex items-center justify-center px-6 3xl:px-12 py-4 3xl:py-2.5 border-solid border-[1px] border-light-300 rounded-lg'>
          <img className='w-[96.5px] 2xl:w-[205px] h-8 2xl:h-[68px]' src="/image/brand sharp.png" alt="brand sharp" />
        </SwiperSlide>
        <SwiperSlide className='w-[144xp] h-[64px] 3xl:w-[301px] 3xl:h-[88px] flex items-center justify-center px-6 3xl:px-12 py-4 3xl:py-2.5 border-solid border-[1px] border-light-300 rounded-lg'>
          <img className='w-[96.5px] 2xl:w-[205px] h-8 2xl:h-[68px]' src="/image/brand panasonic.png" alt="brand panasonic" />
        </SwiperSlide>
        <SwiperSlide className='w-[144xp] h-[64px] 3xl:w-[301px] 3xl:h-[88px] flex items-center justify-center px-6 3xl:px-12 py-4 3xl:py-2.5 border-solid border-[1px] border-light-300 rounded-lg'>
          <img className='w-[96.5px] 2xl:w-[205px] h-8 2xl:h-[68px]' src="/image/brand huawei.png" alt="brand huawei" />
        </SwiperSlide>
        <SwiperSlide className='w-[144xp] h-[64px] 3xl:w-[301px] 3xl:h-[88px] flex items-center justify-center px-6 3xl:px-12 py-4 3xl:py-2.5 border-solid border-[1px] border-light-300 rounded-lg'>
          <img className='w-[96.5px] 2xl:w-[205px] h-8 2xl:h-[68px]' src="/image/brand legrand.png" alt="brand legrand" />
        </SwiperSlide>
        <div className="btn-slide-prev h-full absolute z-50 inset-y-0 left-0 flex items-center"
          onClick={slidePrev}>
          <IconOnlyButtonFilled
            width='w-[40px] 2xl:w-[56px]'
            height='h-[40px] 2xl:h-[56px]'
            type='filled'
            icon={<RiArrowLeftSLine className="text-[21.8px] 2xl:text-[30px]"/>
          }/>
        </div>
        <div className="btn-slide-next h-full absolute z-50 inset-y-0 right-0 flex items-center"
          onClick={slideNext}>
          <IconOnlyButtonFilled
            width='w-[40px] 2xl:w-[56px]'
            height='h-[40px] 2xl:h-[56px]'
            type='filled'
            icon={<RiArrowRightSLine className="text-[21.8px] 2xl:text-[30px]"/>
          }/>
        </div>
      </Swiper>
      <a href="#" className="xl:hidden flex items-center justify-center text-base text-primary-100 font-medium leading-4 pt-6 pb-14">Show all brands
        <span className="ml-1"><RiArrowRightLine size={24}/></span>
      </a>
    </div>
  )
}