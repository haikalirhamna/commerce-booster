import PropTypes from 'prop-types'

export default function SecondaryTextButton({ iconPosition, icon, text, isDisabled }) {
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
      `text-primary-100 disabled:text-light-500 hover:text-primary-500 active:text-primary-400 flex items-center justify-center rounded-[30px] ${style}`} 
    disabled={isDisabled}>
      <p className="font-basier-square text-base font-normal leading-4 active:border-b-2 active:border-primary-400">{text}</p>
      {icon}
    </button>
  );
}

SecondaryTextButton.propTypes = {
  iconPosition: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
};