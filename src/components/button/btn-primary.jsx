import PropTypes from 'prop-types';

export default function PrimaryButton({ width, iconPosition, icon, text, isDisabled }) {
  let style

  switch (iconPosition) {
    case 'right':
      style = "flex-row gap-x-1";
      break;

    case 'left':
      style = "flex-row-reverse gap-x-1";
      break;

    default:
      break;
  }

  return (
    <button 
    className={
      `bg-primary-100 ${width} h-12 py-4 px-4 2xl:px-8 disabled:bg-light-500 disabled:text-light-400 hover:bg-primary-500 active:bg-primary-400 flex items-center justify-center rounded-[30px] text-light-200 ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-sm 2xl:text-base font-normal 2xl:font-medium leading-4">{text}</p>
      {icon}
    </button>
  );
}

PrimaryButton.propTypes = {
  width: PropTypes.string,
  iconPosition: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};