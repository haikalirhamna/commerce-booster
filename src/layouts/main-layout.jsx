import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { RiAccountCircleLine, RiArrowDownSLine, RiExchange2Fill, RiMailLine, RiMenuFill, RiPhoneLine, RiSearchLine, RiShoppingCart2Line, RiStarLine } from '@remixicon/react'
import PrimaryButton from '../components/button/btn-primary'
import InputDefault from '../components/input/input-default'
import Accordion from '../components/accordion/accordion'

export default function Layout({children}) {

  return (
    <Fragment>
      <header>
        <div className='hidden 2xl:flex top-navbar container bg-light-300 justify-between items-center text-sm font-normal leading-6 py-2'>
          <nav className='top-navbar-left'>
            <ul className='flex items-center gap-x-4'>
              <li className='flex items-center gap-x-2'>
                Country: Sweden
                <RiArrowDownSLine
                  size={24}
                />
              </li>
              <li className='flex items-center gap-x-2'>
                Language: Svenska
                <RiArrowDownSLine
                  size={24}
                />
              </li>
              <li className='flex items-center gap-x-2'>
                Currency: $
                <RiArrowDownSLine
                  size={24}
                />
              </li>
            </ul>
          </nav>
          <div className='top-navbar-right flex items-center gap-x-4'>
            <div className='phone-number flex items-center text-primary-100 font-semibold gap-x-2'>
              <RiPhoneLine
                size={24}
                className='rotate-[270deg]'
              />
              <p>+32 (0) 15 28 76 67</p>
            </div>
            <span className='w-[1px] h-6 bg-dark-200'></span>
            <div className='message flex items-center gap-x-2'>
              <div className='relative'>
                <RiMailLine
                  size={24}
                />
                <span className='absolute -top-1 -right-1 w-[18px] h-[18px] bg-secondary-300 rounded-full text-center text-[10px] leading-5 text-light-200'>12</span>
              </div>
              <p>Messages</p>
            </div>
            <span className='w-[1px] h-6 bg-dark-200'></span>
            <div className='account flex items-center gap-x-2'>
              <RiAccountCircleLine
                size={24}
              />
              <p>Username Surname</p>
              <RiArrowDownSLine
                size={24}
              />
            </div>
          </div>
        </div>
        <div className='middle-navbar container flex justify-between items-center py-4'>
          <div className='burger-button 2xl:hidden'>
            <RiMenuFill
            size={24}/>
          </div>
          <div className='brand-name w-[194px] h-[24px] 2xl:w-[228px] 2xl:h-[28px]'>
            <img src="/image/logotype-dekstop.svg" alt="Commerce Booster Logo" />
          </div>
          <div className='hidden 2xl:flex w-96 3xl:w-[543px] h-12 border-solid border-2 border-light-400 rounded-lg py-3 px-4 gap-x-4'>
            <RiSearchLine
              size={24}
              color="#1071FF"
            />
            <input type="search" className='w-full h-full outline-none' name="search" placeholder='Search by product or SKU' />
          </div>
          <div className='hidden 2xl:flex'>
            <PrimaryButton
              width='198px'
              text='Quick Order Form'
              isDisabled={false}
            />
          </div>
          <div className='cart-icon 2xl:hidden'>
            <div className="relative text-primary-100">
              <RiShoppingCart2Line
              width={24}
              height={24}
              className='cart'/>
              <span className='absolute -top-1 -right-1 w-[18px] h-[18px] bg-secondary-400 rounded-full text-center text-[10px] leading-5 text-light-200'>45</span>
            </div>
          </div>
        </div>
        <div className='bottom-navbar container bg-light-300 h-[72px] 2xl:h-[82px] flex justify-between items-center text-sm font-normal leading-6 py-2'>
          <nav className='hidden 2xl:flex bottom-navbar-left'>
            <ul className='flex items-center font-semibold leading-6 gap-x-16'>
              <li className='flex items-center gap-x-2'>
                HOME & GARDEN
                <RiArrowDownSLine
                  size={24}
                />
              </li>
              <li className='flex items-center gap-x-2'>
                MOTORS
                <RiArrowDownSLine
                  size={24}
                />
              </li>
              <li>ELECTRONICS</li>
              <li>OFFICE EQUIPMENT</li>
            </ul>
          </nav>
          <div className='hidden 2xl:block bottom-navbar-right text-end pt-2'>
            <div className='flex justify-between items-center text-sm font-semibold leading-6 text-primary-100'>
              <div className='flex flex-col items-center mr-8'>
                <div className='relative'>
                  <RiExchange2Fill
                  width={24}
                  height={24}
                  className='compare'/>
                  <span className='absolute -top-1 -right-1 w-[18px] h-[18px] bg-secondary-400 rounded-full text-center text-[10px] leading-5 text-light-200'>3</span>
                </div>
                <p>COMPARE</p>
              </div>
              <div className='flex flex-col items-center mr-[59px]'>
                <div className="relative">
                  <RiStarLine
                  width={24}
                  height={24}
                  className='star'/>
                  <span className='absolute -top-1 -right-1 w-[18px] h-[18px] bg-secondary-400 rounded-full text-center text-[10px] leading-5 text-light-200'>7</span>
                </div>
                <p>FAVORITES</p>
              </div>
              <div className='flex flex-col items-center mr-[27px]'>
                <div className="relative">
                  <RiShoppingCart2Line
                  width={24}
                  height={24}
                  className='cart'/>
                  <span className='absolute -top-1 -right-1 w-[18px] h-[18px] bg-secondary-400 rounded-full text-center text-[10px] leading-5 text-light-200'>45</span>
                </div>
                <p>CART</p>
              </div>
            </div>
            <p className='translate-x-4 text-sm leading-6 font-normal text-primary-100'>Active Cart Name</p>
          </div>
          <div className='2xl:hidden w-full h-12 bg-light-200 flex border-solid border-2 border-light-400 rounded-lg py-3 px-4 gap-x-2'>
            <RiSearchLine
              size={24}
              color="#1071FF"
            />
            <input type="search" className='w-full h-full outline-none' name="search" placeholder='Search by product or SKU' />
          </div>
        </div>
      </header>
      <main className="mx-auto overflow-x-hidden mt-6 2xl:mb-[100px]">{children}</main>
      <footer className="container bg-light-300 pt-6 2xl:pt-10">
        <div className='flex flex-col 2xl:flex-row 2xl:justify-between items-start gap-6 mb-10'>
          <div className="sign-up-for-news w-full 2xl:max-w-[301px] text-sm text-dark-300 leading-6 font-normal">
            <h2 className='font-basier-circle text-base 2xl:text-xl leading-[20.80px] 2xl:leading-[26px] font-bold mb-4 2xl:mb-6'>Sign up for news</h2>
            <p className='mb-4 2xl:mb-6'>message/keep up to date with the latest product launches and news. Find out more about our brands and get special promo codes.</p>
            <InputDefault
              message='Your e-mail address'
              className='email mb-4 2xl:mb-6'
            />
            <PrimaryButton
              text='Sign up for newsletter'
              width='w-full'
            />
            <div className='flex items-center gap-x-2 mt-4'>
              <input className='w-4 h-4 ' type="checkbox" name="checkbox" id="checkbox" />
              <p>I accept <span className='text-primary-100'>the personal data management.</span></p>
            </div>
          </div>
          <div className='w-full 2xl:hidden'>
            <Accordion
            title='How to buy'
            content={
              <ul className={`accordion-body flex flex-col text-sm font-normal leading-6 gap-2`}>
                <li><a href="#">Payment methods</a></li>
                <li><a href="#">Order and pick up</a></li>
                <li><a href="#">Order with delivery</a></li>
                <li><a href="#">Shopping over the phone</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            }/>
            <Accordion
            title='Help'
            content={
              <ul className={`accordion-body flex flex-col text-sm font-normal leading-6 gap-2`}>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Online Help</a></li>
                <li><a href="#">Our Commitments</a></li>
                <li><a href="#">Give feedback</a></li>
              </ul>
            }/>
            <Accordion
            title='Services'
            content={
              <ul className={`accordion-body flex flex-col text-sm font-normal leading-6 gap-2`}>
                <li><a href="#">Transport</a></li>
                <li><a href="#">Design service</a></li>
                <li><a href="#">Paint an plaster mixing service</a></li>
                <li><a href="#">Dimensioning and assemly service</a></li>
                <li><a href="#">Return of used equipment</a></li>
                <li><a href="#">Additional services</a></li>
              </ul>
            }/>
            <Accordion
            title='About'
            content={
              <ul className={`accordion-body flex flex-col text-sm font-normal leading-6 gap-2`}>
                <li><a href="#">About us</a></li>
                <li><a href="#">Press Office</a></li>
                <li><a href="#">For suppliers</a></li>
                <li><a href="#">Regulations</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Personal Data Request</a></li>
              </ul>
            }/>
          </div>
          <div className='hidden 2xl:flex flex-col 2xl:flex-row items-start text-dark-300 gap-5'>
            <div className='max-w-[194px]'>
              <h2 className='font-basier-circle flex justify-between text-base 2xl:text-xl leading-[20.80px] 2xl:leading-[26px] font-bold mb-4 2xl:mb-6'>How to buy</h2>
              <ul className='flex flex-col text-sm font-normal leading-6 gap-2'>
                <li><a href="#">Payment methods</a></li>
                <li><a href="#">Order and pick up</a></li>
                <li><a href="#">Order with delivery</a></li>
                <li><a href="#">Shopping over the phone</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>
            <div className='max-w-[194px]'>
              <h2 className='font-basier-circle flex justify-between text-base 2xl:text-xl leading-[20.80px] 2xl:leading-[26px] font-bold mb-4 2xl:mb-6'>Help</h2>
              <ul className='flex flex-col text-sm font-normal leading-6 gap-2'>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Online Help</a></li>
                <li><a href="#">Our Commitments</a></li>
                <li><a href="#">Give feedback</a></li>
              </ul>
            </div>
            <div className='max-w-[194px]'>
              <h2 className='font-basier-circle flex justify-between text-base 2xl:text-xl leading-[20.80px] 2xl:leading-[26px] font-bold mb-4 2xl:mb-6'>Services</h2>
              <ul className='flex flex-col text-sm font-normal leading-6 gap-2'>
                <li><a href="#">Transport</a></li>
                <li><a href="#">Design service</a></li>
                <li><a href="#">Paint an plaster mixing service</a></li>
                <li><a href="#">Dimensioning and assemly service</a></li>
                <li><a href="#">Return of used equipment</a></li>
                <li><a href="#">Additional services</a></li>
              </ul>
            </div>
            <div className='max-w-[194px]'>
              <h2 className='font-basier-circle flex justify-between text-base 2xl:text-xl leading-[20.80px] 2xl:leading-[26px] font-bold mb-4 2xl:mb-6'>About</h2>
              <ul className='flex flex-col text-sm font-normal leading-6 gap-2'>
                <li><a href="#">About us</a></li>
                <li><a href="#">Press Office</a></li>
                <li><a href="#">For suppliers</a></li>
                <li><a href="#">Regulations</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Personal Data Request</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright flex flex-col-reverse xl:flex-row justify-between items-center border-solid border-t-2 border-light-100 py-4'>
          <div className='flex items-center gap-2'>
            <img className='w-6 h-6' src='/icons/action/copyright.svg' alt="Copyright" />
            <p>2021 Divante S.A.</p>
          </div>
          <div className='flex flex-col xl:flex-row items-center gap-4 xl:gap-10'>
            <ul className='flex items-center gap-4'>
              <li>
                <img className='w-6 h-6' src='/icons/action/facebook.svg' alt="Facebook" />
              </li>
              <li>
                <img className='w-6 h-6' src='/icons/action/instagram.svg' alt="Instagram" />
              </li>
              <li>
                <img className='w-6 h-6' src='/icons/action/youtube.svg' alt="Youtube" />
              </li>
            </ul>
            <div className='brand w-[229px] h-14 mb-10 xl:mb-0'>
              <img src="/image/logotype-footer.svg" alt="Commerce Booster Logo" />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
};