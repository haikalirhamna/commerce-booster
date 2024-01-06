import PropTypes from 'prop-types';

export default function IconOnlyButtonOutline({ icon, type, isDisabled }) {

  let borderRadius

  switch (type) {
    case 'outline':
      borderRadius = "rounded-lg";
      break;

    case 'outline rounded':
      borderRadius = "rounded-full";
      break;

    default:
      break;
  }

  return (
    <button 
    className={
      `w-11 h-11 flex justify-center items-center bg-light-200 text-primary-100 disabled:text-light-500 border-solid border-2 border-primary-100 disabled:border-light-500 hover:text-primary-500 hover:border-primary-500 active:text-primary-400 active:border-primary-400 ${borderRadius}`} 
    disabled={isDisabled}>
      {icon}
    </button>
  );
}

IconOnlyButtonOutline.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
  isDisabled: PropTypes.bool,
};