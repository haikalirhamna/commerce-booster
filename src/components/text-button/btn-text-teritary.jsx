import PropTypes from 'prop-types'

export default function TeritaryTextButton({ iconPosition, icon, text, isDisabled }) {
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
      `text-light-200 disabled:text-light-500 hover:text-light-400 active:text-light-100 flex items-center justify-center rounded-[30px] ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4 active:border-b-2 active:border-light-100">{text}</p>
      {icon}
    </button>
  );
}

TeritaryTextButton.propTypes = {
  iconPosition: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};