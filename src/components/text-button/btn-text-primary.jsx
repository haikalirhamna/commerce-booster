import PropTypes from 'prop-types'

export default function PrimaryTextButton({ iconPosition, icon, text, isDisabled }) {
  let style

  switch (iconPosition) {
    case 'left':
      style = "flex-row gap-x-1";
      break;

    case 'right':
      style = "flex-row-reverse gap-x-1";
      break;

    default:
      break;
  }

  return (
    <button 
    className={
      `text-dark-200 disabled:text-light-500 hover:text-dark-300 active:text-dark-100 flex items-center justify-center rounded-[30px] ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4 active:border-b-2 active:border-dark-100">{text}</p>
      {icon}
    </button>
  );
}

PrimaryTextButton.propTypes = {
  iconPosition: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};