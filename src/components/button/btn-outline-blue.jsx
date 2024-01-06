import PropTypes from 'prop-types';

export default function OutlineBlueButton({ width, iconPosition, icon, text, isDisabled }) {
  let style = "py-4 px-8";

  switch (iconPosition) {
    case 'left':
      style = "py-4 px-[86px] flex-row-reverse gap-x-1";
      break;

    case 'right':
      style = "py-4 px-8 flex-row gap-x-1";
      break;

    default:
      break;
  }

  return (
    <button 
    className={ 
      `bg-light-200 ${width} h-12 border-solid border-2 border-primary-100 disabled:border-light-500 disabled:text-light-500 hover:bg-primary-500 hover:border-0 hover:text-light-200 active:bg-primary-400 active:border-0 active:text-light-200 flex items-center justify-center rounded-[30px] text-primary-100 ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4">{text}</p>
      {icon}
    </button>
  );
}

OutlineBlueButton.propTypes = {
  width: PropTypes.string,
  iconPosition: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};