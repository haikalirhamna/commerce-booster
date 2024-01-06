import PropTypes from 'prop-types';

export default function InputDefault({width, typeInput, value, name, className, label, information, message, isDisabled}) {
  
  return (
    <div className="font-basier-square flex flex-col justify-start">
      {label && (
        <label htmlFor={name} className="text-sm leading-6 text-dark-200 mb-1">
          {label}
        </label>
      )}
      <input type={typeInput} placeholder={message}
      name={name}
      id={name}
      value={value}
      className={`${className} ${width} h-12 bg-white text-sm leading-6 text-dark-300 border-2 border-solid border-light-400 caret-primary-100 focus:text-dark-100 disabled:bg-light-400 disabled:text-dark-100 rounded-lg py-3 px-4 mb-1`}
      disabled={isDisabled}/>
      {/* information */}
      {information && (
        <p className="text-sm leading-6 text-primary-100">{information}</p>
      )}
    </div>
  )
}

InputDefault.propTypes = {
  width: PropTypes.string,
  typeInput: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  information: PropTypes.string,
  message: PropTypes.string,
  isDisabled: PropTypes.bool,
};