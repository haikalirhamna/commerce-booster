import PropTypes from 'prop-types';
import { RiArrowDownSLine, RiCheckboxCircleLine, RiExchange2Fill, RiInformationLine, RiShareLine, RiStarLine } from "@remixicon/react";
import PrimaryButton from "../button/btn-primary";
import InputDefault from "../input/input-default";
import DropdownDefault from "../input/dropdown-default";
import OutlineBlueButton from "../button/btn-outline-blue";

export default function CardProduct({disc, sourceImage, stock, brandName, partNumber, productName, description, price, oldPrice}) {

  const arrayOption = [
    { value: '1', label: 'Item 1' },
    { value: '2', label: 'Item 2' },
    { value: '3', label: 'Item 3' },
  ];
  
  return (
    <div className="w-[164px] 3xl:w-[301px] h-[474px] 3xl:h-[619px] border-solid border-[1px] border-light-300 rounded-lg">
      <div className="product-image relative">
        {sourceImage}
        <div className="disc-value absolute left-0 top-4 w-[34px] 3xl:w-[52px] h-[22px] 3xl:h-8 bg-secondary-300 text-light-200 text-[10px] 3xl:text-sm font-normal 3xl:font-semibold leading-[14px] 3xl: leading-6 text-center px-1 3xl:px-2 py-1">-{disc}%</div>
        <div className="favorite-icon absolute top-2 right-2 w-[18px] 3xl:w-8 h-[18px] h-8 bg-light-100 flex justify-center items-center rounded-full">
          <RiStarLine
          className='w-[12px] h-[12px] 3xl:w-[21.33px] 3xl:h-[21.33px]'
          size={12}
          color="#1071FF"/>
        </div>
        <div className="in-stock absolute left-2 bottom-2">
          {stock === true ? (
            <div className="flex items-center gap-1 text-bright-green text-[10px] 3xl:text-sm font-normal 3xl:font-semibold leading-[14px] 3xl: leading-6 border-solid border-2 border-light-300 py-px 3xl:py-0.5 px-1 3xl:px-2">
              <RiCheckboxCircleLine
              className='w-2 h-2 3xl:w-4 3xl:h-4'
              size={8}
              color="#00893A"/>
              <p>In stock</p>
            </div>
          ) : (
            <div className="flex items-center gap-1 extremely-red text-[10px] 3xl:text-sm font-normal 3xl:font-semibold leading-[14px] 3xl: leading-6 border-solid border-2 border-light-300 py-px 3xl:py-0.5 px-1 3xl:px-2">
              <RiInformationLine
              className='w-2 h-2 3xl:w-4 3xl:h-4'
              size={8}
              color="#f52f2f"/>
              <p className="text-extremely-red">Exp. delivery on Jun 14, 2022</p>
            </div>
          )}
        </div>
        <div className="absolute right-3 bottom-2.5 flex flex-col gap-2.5">
          <RiExchange2Fill
          className='w-[18px] h-[18px] 3xl:w-[24px] 3xl:h-[24px]'
          size={18}
          color="#1071FF"/>
          <RiShareLine
          className='w-[18px] h-[18px] 3xl:w-[24px] 3xl:h-[24px]'
          size={18}
          color="#1071FF"/>
        </div>
      </div>
      <div className="px-2 pt-2 3xl:pt-3.5 pb-3">
        <p className="brand-name text-sm text-dark-100 font-normal leading-6 mb-2 3xl:mb-2.5">{brandName} | Part No. {partNumber}</p>
        <h2 className="product-name text-base 3xl:text-xl text-dark-300 leading-[20.80px] 3xl:leading-[26px] font-bold font-basier-circle mb-2 3xl:mb-3">{productName}</h2>
        <div className="hidden 3xl:flex flex-col text-sm text-dark-300 leading-6 font-normal gap-1 mb-3">
          {description}
        </div>
        <div className='price flex flex-col 3xl:flex-row items-baseline gap-1 text-sm text-primary-100 leading-6 font-semibold mb-2 3xl:mb-2.5'>
          <p>Your price <span className="text-3xl leading-[33.60px]">${price}</span> net</p>
          <p className="text-secondary-300 line-through">${oldPrice} net</p>
        </div>
        <div className="flex items-center gap-x-1 3xl:gap-x-2 text-center mb-2 3xl:mb-2.5">
          <InputDefault
          className="text-center"
          width='w-[47px] 3xl:w-[106px]'
          value='1'/>
          <DropdownDefault
          width='w-[97px] 3xl:w-[171px]'
          arrayOption={arrayOption}
          />
        </div>
        {stock === true ? (
          <PrimaryButton
          width='285px'
          icon={<RiArrowDownSLine
          size={24}/>}
          text='Add to cart'
          iconPosition='right'
          />
        ) : (
          <OutlineBlueButton
          width='285px'
          icon={<RiArrowDownSLine
          size={24}/>}
          text='Add to cart'
          iconPosition='right'
          />
        )}
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  disc: PropTypes.string,
  sourceImage: PropTypes.object,
  stock: PropTypes.bool,
  brandName: PropTypes.string,
  partNumber: PropTypes.string,
  productName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  oldPrice: PropTypes.string,
};