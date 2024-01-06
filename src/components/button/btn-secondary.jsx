import PropTypes from 'prop-types';

export default function SecondaryButton({ width, iconPosition, icon, text, isDisabled }) {
  let style

  switch (iconPosition) {
    case 'left':
      style = "flex-row-reverse gap-x-1";
      break;

    case 'right':
      style = "flex-row gap-x-1";
      break;

    default:
      break;
  }

  return (
    <button 
    className={ 
      `bg-light-200 ${width} h-12 py-4 px-8 flex items-center justify-center rounded-[30px] text-primary-100 disabled:text-light-500 hover:text-primary-500 active:text-primary-400 ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4">{text}</p>
      {icon}
    </button>
  );
}

SecondaryButton.propTypes = {
  width: PropTypes.string,
  iconPosition: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};