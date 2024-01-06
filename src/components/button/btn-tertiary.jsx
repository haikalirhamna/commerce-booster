import PropTypes from 'prop-types';

export default function TertiaryButton({ width, iconPosition, icon, text, isDisabled }) {
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
      `bg-secondary-400 ${width} h-12 disabled:bg-light-500 disabled:text-light-400 hover:bg-secondary-300 active:bg-secondary-200 flex items-center justify-center rounded-[30px] text-light-200 ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4">{text}</p>
      {icon}
    </button>
  );
}

TertiaryButton.propTypes = {
  width: PropTypes.string,
  iconPosition: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};