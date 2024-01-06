import { Fragment, useRef, useState } from 'react'
import IconOnlyButtonFilled from '../../components/button-icon-only/btn-icon-filled'

// import favicon
import { RiArrowLeftSLine, RiArrowRightLine, RiArrowRightSLine } from '@remixicon/react'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import required modules
import { Keyboard } from 'swiper/modules';
import CardProduct from '../card/card-product'

export default function CarouselProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
      setActiveIndex(swiperRef.current.swiper.activeIndex)
    }
  };

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
      setActiveIndex(swiperRef.current.swiper.activeIndex)
    }
  };

  return (
    <div className='container'>
      <div className="flex justify-center xl:justify-between items-center mb-6 xl:mb-8">
        <h1 className='title font-basier-circle text-center xl:text-start'>Recommended products</h1>
        <a href="#" className="hidden xl:flex items-center text-base text-primary-100 font-medium leading-4">Show all recommended products
        <span className="ml-1"><RiArrowRightLine size={24}/></span>
        </a>
      </div>
      <div className='relative mb-0 xl:mb-20'>
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={4}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Keyboard]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 16,
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
        >
          <SwiperSlide>
            <CardProduct
            sourceImage={
              <img className='w-[164px] 3xl:w-[301px] h-[134px] 3xl:h-[246px]' src='/image/product image.png' alt="product image"/>
            }
            disc='30'
            stock={true}
            brandName='Omnires'
            partNumber='2123532'
            productName='Connection with a handle Omnires round'
            description={
              <Fragment>
                <p>Material of execution: brass</p>
                <p>Manufacturer’s color: chrome</p>
                <p>Guarantee: 5 years</p>
              </Fragment>
            }
            price='45.00'
            oldPrice='55.00'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
            sourceImage={
              <img className='w-[164px] 3xl:w-[301px] h-[134px] 3xl:h-[246px]' src='/image/product image-2.png' alt="product image"/>
            }
            disc='15'
            stock={true}
            brandName='GoodHome'
            partNumber='234565'
            productName='Countertop washbasin GoodHome Tekapo'
            description={
              <Fragment>
                <p>Basin width : 45 cm</p>
                <p>Basin height: 12 cm</p>
                <p>Basin depth: 35 cm</p>
              </Fragment>
            }
            price='51.00'
            oldPrice='64.00'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
            sourceImage={
              <img className='w-[164px] 3xl:w-[301px] h-[134px] 3xl:h-[246px]' src='/image/product image-3.png' alt="product image"/>
            }
            disc='15'
            stock={true}
            brandName='GoodHome'
            partNumber='234565'
            productName='Perforated Simpson tape 25 x 2500 x 2 mm'
            description={
              <Fragment>
                <p>Basin width : 45 cm</p>
                <p>Basin height: 12 cm</p>
                <p>Basin depth: 35 cm</p>
              </Fragment>
            }
            price='51.00'
            oldPrice='64.00'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
            sourceImage={
              <img className='w-[164px] 3xl:w-[301px] h-[134px] 3xl:h-[246px]' src='/image/product image-4.png' alt="product image"/>
            }
            disc='15'
            stock={false}
            brandName='GoodHome'
            partNumber='234565'
            productName='AMBER DECOR Bulb 60W, E27 590'
            description={
              <Fragment>
                <p>Basin width : 45 cm</p>
                <p>Basin height: 12 cm</p>
                <p>Basin depth: 35 cm</p>
              </Fragment>
            }
            price='51.00'
            oldPrice='64.00'/>
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct
            sourceImage={
              <img className='w-[164px] 3xl:w-[301px] h-[134px] 3xl:h-[246px]' src='/image/product image-4.png' alt="product image"/>
            }
            disc='15'
            stock={false}
            brandName='GoodHome'
            partNumber='234565'
            productName='AMBER DECOR Bulb 60W, E27 590'
            description={
              <Fragment>
                <p>Basin width : 45 cm</p>
                <p>Basin height: 12 cm</p>
                <p>Basin depth: 35 cm</p>
              </Fragment>
            }
            price='51.00'
            oldPrice='64.00'/>
          </SwiperSlide>
        </Swiper>
        <div className="btn-slide-prev w-[44px] h-full absolute z-50 inset-y-0 left-0 flex items-center -translate-x-2/4"
          style={{ visibility: activeIndex === 0 ? 'hidden' : 'visible' }}
          onClick={slidePrev}>
          <IconOnlyButtonFilled
            width='w-[44px]'
            height='h-[44px]'
            type='filled'
            icon={<RiArrowLeftSLine size={30}/>
          }/>
        </div>
        <div className="btn-slide-next w-[44px] h-full absolute z-50 inset-y-0 right-0 flex items-center translate-x-2/4"
          onClick={slideNext}>
          <IconOnlyButtonFilled
            width='w-[44px]'
            height='h-[44px]'
            type='filled'
            icon={<RiArrowRightSLine size={30}/>
          }/>
        </div>
      </div>
      <a href="#" className="xl:hidden flex items-center justify-center text-base text-primary-100 font-medium leading-4 pt-6 pb-16">Show all recommended products
        <span className="ml-1"><RiArrowRightLine size={24}/></span>
      </a>
    </div>
  )
}