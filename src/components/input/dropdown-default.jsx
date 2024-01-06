import PropTypes from 'prop-types'
import { RiArrowDownSLine } from "@remixicon/react"

export default function DropdownDefault({arrayOption, width, name, label, information, isDisabled}) {
  
  return (
    <div className="font-basier-square flex flex-col justify-start">
      {label && (
        <label htmlFor={name} className="text-sm leading-6 text-dark-200 mb-1">{label}</label>
      )}
      <div className={`${width} h-12 bg-white flex items-center gap-x-2 text-sm leading-6 text-dark-300 border-2 border-solid border-light-400 outline-primary-100 focus:text-dark-100 disabled:bg-light-400 disabled:text-dark-100 rounded-lg py-3 px-4 mb-1`}>
        <select 
        name={name} 
        id={name}
        className='appearance-none w-full'
        disabled={isDisabled}
        >
          {arrayOption.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <RiArrowDownSLine
        size={24}
        color="#1071ff"/>
      </div>
      {/* information */}
      {information && (
        <p className="text-sm leading-6 text-primary-100" >{information}</p>
      )}
    </div>
  )
}

DropdownDefault.propTypes = {
  arrayOption: PropTypes.object,
  width: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  information: PropTypes.string,
  isDisabled: PropTypes.bool,
};