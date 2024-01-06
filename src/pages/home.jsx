import Layout from "../layouts/main-layout"
import CarouselBrand from "../components/carousel/carousel-brand"
import CarouselProduct from "../components/carousel/carousel-product"
import PrimaryButton from "../components/button/btn-primary"
import SecondaryButton from "../components/button/btn-secondary"
import { RiArrowRightLine } from "@remixicon/react"
import OutlineBlueButton from "../components/button/btn-outline-blue"

export default function Home() {
  return (
    <Layout>
      <CarouselBrand/>
      <CarouselProduct/>
      <section className="container bg-primary-100 flex flex-col 2xl:flex-row justify-center  2xl:justify-between items-center py-6 2xl:py-4 mb-16 2xl:mb-20">
        <div className="flex flex flex-col 2xl:flex-row items-center mb-6 2xl:mb-0">
          <img className="w-16 2xl:w-[113px] h-20 2xl:h-[140px] mr-0 2xl:mr-10 mb-2 2xl:mb-0" src='/image/image.png' alt="tools image"/>
          <div className="flex flex-col 2xl:flex-row justify-center items-center text-5xl text-light-200 font-basier-circle font-bold leading-[60px] gap-4">
            <p className="text-5xl 2xl:text-[80px]">-20%</p>
            <h1 className="text-center">on power tools</h1>
          </div>
        </div>
        <SecondaryButton
        width='153px'
        text='Check offer'/>
      </section>
      <section className="recommended-categories container xl:mb-20">
        <div className="flex justify-center 2xl:justify-between items-center mb-6 2xl:mb-8">
          <h1 className='title font-basier-circle text-center 2xl:text-start'>Recommended Categories</h1>
          <a href="#" className="hidden 2xl:flex items-center text-base text-primary-100 font-medium leading-4">Show all recommended categories
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center 2xl:justify-start items-center gap-[15px] 2xl:gap-5">
          <div className="w-[164px] 2xl:w-[301px] h-[222px] 2xl:h-[375px]">
            <img className="w-[164px] 2xl:w-[301px] h-[164px] 2xl:h-[301px]" src='/image/category title.png' alt="category image" />
            <div className="bg-primary-100 rounded-b-lg overflow-hidden text-base 2xl:text-xl text-light-200 text-center font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] py-4 2xl:py-6 px-6">
              <h2 className="max-h-[20.80px] truncate">Photovoltaics</h2>
            </div>
          </div>
          <div className="w-[164px] 2xl:w-[301px] h-[222px] 2xl:h-[375px]">
            <img className="w-[164px] 2xl:w-[301px] h-[164px] 2xl:h-[301px]" src='/image/category title-2.png' alt="category image" />
            <div className="bg-primary-100 rounded-b-lg overflow-hidden text-base 2xl:text-xl text-light-200 text-center font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] py-4 2xl:py-6 px-6">
              <h2 className="max-h-[20.80px] truncate">Electronics</h2>
            </div>
          </div>
          <div className="w-[164px] 2xl:w-[301px] h-[222px] 2xl:h-[375px]">
            <img className="w-[164px] 2xl:w-[301px] h-[164px] 2xl:h-[301px]" src='/image/category title-3.png' alt="category image" />
            <div className="bg-primary-100 rounded-b-lg overflow-hidden text-base 2xl:text-xl text-light-200 text-center font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] py-4 2xl:py-6 px-6">
              <h2 className="max-h-[20.80px] truncate">Light Sources</h2>
            </div>
          </div>
          <div className="w-[164px] 2xl:w-[301px] h-[222px] 2xl:h-[375px]">
            <img className="w-[164px] 2xl:w-[301px] h-[164px] 2xl:h-[301px]" src='/image/category-title-4.png' alt="category image" />
            <div className="bg-primary-100 rounded-b-lg overflow-hidden text-base 2xl:text-xl text-light-200 text-center font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] py-4 2xl:py-6 px-6">
              <h2 className="max-h-[20.80px] truncate">Ventilation and Heating</h2>
            </div>
          </div>
        </div>
        <a href="#" className="xl:hidden flex items-center justify-center text-base text-primary-100 font-medium leading-4 mt-6 mb-16">Show all recommended categories
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
        </a>
      </section>
      <section className="show-hints container xl:mb-20">
        <div className="flex justify-center xl:justify-between items-center mb-6 2xl:mb-8">
          <h1 className='title font-basier-circle text-center xl:text-start'>Hints for you</h1>
          <a href="#" className="hidden xl:flex items-center text-base text-primary-100 font-medium leading-4">Show all hints
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
          </a>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-start flex-wrap items-center gap-4 2xl:gap-5">
          <div className="w-full max-w-[343px] 2xl:w-[301px] h-[396px] 2xl:h-[382px]">
            <img className="w-full max-w-[343px] 2xl:w-[301px] h-[194px] 2xl:h-[170px]" src='/image/article.png' alt="article image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] text-base 2xl:text-xl font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] mb-4">How much does it cost to finish an apartment?</h2>
              <p className="text-base font-normal mb-4">Are you standing on the threshold of your own &quot;M&quot;, to which you have just picked up the keys, and with the eye..</p>
              <a href="#" className="flex items-center text-base text-primary-100 font-medium leading-4">Read more
              <span className="ml-1"><RiArrowRightLine size={24}/></span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-[343px] 2xl:w-[301px] h-[396px] 2xl:h-[382px]">
            <img className="w-full max-w-[343px] 2xl:w-[301px] h-[194px] 2xl:h-[170px]" src='/image/article-2.png' alt="article image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] text-base 2xl:text-xl font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] mb-4">Demolition of the load-bearing wall</h2>
              <p className="text-base font-normal mb-4">Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you...</p>
              <a href="#" className="flex items-center text-base text-primary-100 font-medium leading-4">Read more
              <span className="ml-1"><RiArrowRightLine size={24}/></span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-[343px] 2xl:w-[301px] h-[396px] 2xl:h-[382px]">
            <img className="w-full max-w-[343px] 2xl:w-[301px] h-[194px] 2xl:h-[170px]" src='/image/article-3.png' alt="article image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] text-base 2xl:text-xl font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] mb-4">What color to paint a hall in a block of flats?</h2>
              <p className="text-base font-normal mb-4">Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can...</p>
              <a href="#" className="flex items-center text-base text-primary-100 font-medium leading-4">Read more
              <span className="ml-1"><RiArrowRightLine size={24}/></span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-[343px] 2xl:w-[301px] h-[396px] 2xl:h-[382px]">
            <img className="w-full max-w-[343px] 2xl:w-[301px] h-[194px] 2xl:h-[170px]" src='/image/article-4.png' alt="article image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] text-base 2xl:text-xl font-basier-circle font-bold leading-[20.80px] 2xl:leading-[26px] mb-4">How does a concrete pump work?</h2>
              <p className="text-base font-normal mb-4">A concrete pump is currently one of the most common equipment used on construction sites. Its operation...</p>
              <a href="#" className="flex items-center text-base text-primary-100 font-medium leading-4">Read more
              <span className="ml-1"><RiArrowRightLine size={24}/></span>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="xl:hidden flex items-center justify-center text-base text-primary-100 font-medium leading-4 mt-6 mb-16">Show all hints
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
        </a>
      </section>
      <section className="tools container flex flex-col 3xl:flex-row justify-center items-center gap-y-2 gap-x-5 mb-16 xl:mb-20">
        <img className="w-full md:w-[343px] xl:w-[622px] h-[300px] xl:h-[350px]" src='/image/tool kits.png' alt="tool image" />
        <div className="bg-primary-100 w-full md:w-[343px] xl:w-[622px] h-[300px] xl:h-[350px] flex flex-col items-center xl:items-start text-light-200 rounded-lg py-10 xl:py-[75px] pl-4 xl:pl-16 pr-4 xl:pr-[107px]">
          <h1 className="text-2xl xl:text-[28px] font-bold leading-[31.20px] xl:leading-[36.40px] font-basier-circle mb-4">Buy this bundle and save $100!</h1>
          <h2 className="max-w-[344px] text-lg xl:text-xl font-normal leading-[30.60px] xl:leading-[34px] mb-8">Longer sentence, for just two lines and it could be very very long</h2>
          <SecondaryButton
          text='Buy this bundle'
          width='181px'/>
        </div>
      </section>
      <section className="adversiting-box-with-image container flex flex-col 2xl:flex-row items-center gap-y-2  gap-x-5 mb-16 3xl:mb-20">
        <div className="w-full md:w-[343px] 3xl:w-[408px] h-[193px] 3xl:h-[230px] flex items-center rounded-lg overflow-hidden">
          <div className="w-full h-full bg-secondary-300 flex items-center text-light-200 px-6 py-[84px]">
            <h2 className="text-base 3xl:text-xl font-basier-circle font-bold leading-[20.80px] 3xl:leading-[26px]">New tool kits!</h2>
          </div>
          <img className="w-[171px] 3xl:w-[204px] h-[193px] 3xl:h-[230px]" src='/image/card-image.png' alt="card image" />
        </div>
        <div className="w-full md:w-[343px] 3xl:w-[408px] h-[193px] 3xl:h-[230px] flex items-center rounded-lg overflow-hidden">
          <div className="w-full h-full bg-secondary-300 flex items-center text-light-200 px-6 py-[84px]">
            <h2 className="text-base 3xl:text-xl font-basier-circle font-bold leading-[20.80px] 3xl:leading-[26px]">New rules for wind farms!</h2>
          </div>
          <img className="w-[171px] 3xl:w-[204px] h-[193px] 3xl:h-[230px]" src='/image/card-image-2.png' alt="card image" />
        </div>
        <div className="w-full md:w-[343px] 3xl:w-[408px] h-[193px] 3xl:h-[230px] flex items-center rounded-lg overflow-hidden">
          <div className="w-full h-full bg-secondary-300 flex items-center text-light-200 px-6 py-[84px]">
            <h2 className="text-base 3xl:text-xl font-basier-circle font-bold leading-[20.80px] 3xl:leading-[26px]">New iPhone now available!</h2>
          </div>
          <img className="w-[171px] 3xl:w-[204px] h-[193px] 3xl:h-[230px]" src='/image/card-image-3.png' alt="card image" />
        </div>
      </section>
      <section className="container w-full bg-light-300 px-4 py-8 xl:px-10 xl:py-10 mb-16 2xl:mb-20">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-y-8 text-dark-300">
          <div className="w-full md:w-[343px] 2xl:w-[408px] flex flex-col justify-center">
            <h1 className="font-basier-circle text-[28px] xl:text-4xl leading-[36.40px] xl:leading-[46.80px] text-center xl:text-start font-bold mb-6">DPD delivery already available!</h1>
            <p className="w-full text-base font-normal text-center xl:text-start mb-10">Choose DPD for speed, ease and convenience.
            <br/>Track your parcel in real time. This will help you plan your work while waiting for the parcel.</p>
            <PrimaryButton
            width='w-[138px] xl:w-[149px] mx-auto xl:mx-0'
            text='Show more'/>
          </div>
          <img className="w-[311px] 2xl:w-[622px] h-[165px] 2xl:h-[329px]" src='/image/car.png' alt="car image" />
        </div>
      </section>
      <section className="events container xl:mb-20">
        <div className="flex justify-center xl:justify-between items-center mb-6 2xl:mb-8">
          <h1 className='title font-basier-circle text-center xl:text-start'>Events for you</h1>
          <a href="#" className="hidden xl:flex items-center text-base text-primary-100 font-medium leading-4">Show all events
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
          </a>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-start flex-wrap items-center gap-4 2xl:gap-5">
          <div className="w-full md:w-[343px] xl:w-[301px] h-[470px] xl:h-[446px]">
            <img className="w-full md:w-[343px] xl:w-[301px] h-[194px] xl:h-[170px]" src='/image/article-event.png' alt="article event image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] xl:min-h-[52px] text-base xl:text-xl font-basier-circle font-bold leading-[20.80px] xl:leading-[26px] mb-4">Electrician course for electricians with SEP licence</h2>
              <p className="text-sm xl:text-base text-primary-100 font-normal mb-4">23.05.2021 | London, UK</p>
              <p className="text-base font-normal mb-4">This course is conducted in the form of lectures via the Internet and ends with an examination, also online...</p>
              <a href="#">
                <OutlineBlueButton
                text='Read more'
                width='149px'/>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[343px] xl:w-[301px] h-[470px] xl:h-[446px]">
            <img className="w-full md:w-[343px] xl:w-[301px] h-[194px] xl:h-[170px]" src='/image/article-event-2.png' alt="article event image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] xl:min-h-[52px] text-base xl:text-xl font-basier-circle font-bold leading-[20.80px] xl:leading-[26px] mb-4">Interior design and decoration</h2>
              <p className="text-sm xl:text-base text-primary-100 font-normal mb-4">04-06.11.2021 | London, UK</p>
              <p className="text-base font-normal mb-4">This course is conducted in the form of lectures via the Internet and ends with an examination, also online...</p>
              <a href="#">
                <OutlineBlueButton
                text='Read more'
                width='149px'/>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[343px] xl:w-[301px] h-[470px] xl:h-[446px]">
            <img className="w-full md:w-[343px] xl:w-[301px] h-[194px] xl:h-[170px]" src='/image/article-event-3.png' alt="article event image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] xl:min-h-[52px] text-base xl:text-xl font-basier-circle font-bold leading-[20.80px] xl:leading-[26px] mb-4">AutoCAD 2d basic level</h2>
              <p className="text-sm xl:text-base text-primary-100 font-normal mb-4">15.06.2021 | London, UK</p>
              <p className="text-base font-normal mb-4">This course is conducted in the form of lectures via the Internet and ends with an examination, also online...</p>
              <a href="#">
                <OutlineBlueButton
                text='Read more'
                width='149px'/>
              </a>
            </div>
          </div>
          <div className="w-full md:w-[343px] xl:w-[301px] h-[470px] xl:h-[446px]">
            <img className="w-full md:w-[343px] xl:w-[301px] h-[194px] xl:h-[170px]" src='/image/article-event.png' alt="article event image" />
            <div className="border-[1px] rounded-b-lg border-light-300 text-dark-300 px-2 py-4">
              <h2 className="min-h-[42px] xl:min-h-[52px] text-base xl:text-xl font-basier-circle font-bold leading-[20.80px] xl:leading-[26px] mb-4">Paving engineer with a road construction machine licence</h2>
              <p className="text-sm xl:text-base text-primary-100 font-normal mb-4">31.03.2021 | London, UK</p>
              <p className="text-base font-normal mb-4">This course is conducted in the form of lectures via the Internet and ends with an examination, also online...</p>
              <a href="#">
                <OutlineBlueButton
                text='Read more'
                width='149px'/>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="xl:hidden flex items-center justify-center text-base text-primary-100 font-medium leading-4 mt-6 mb-16">Show all events
          <span className="ml-1"><RiArrowRightLine size={24}/></span>
        </a>
      </section>
    </Layout>
  )
}