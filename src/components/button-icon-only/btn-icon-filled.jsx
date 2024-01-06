import PropTypes from 'prop-types';

export default function IconOnlyButtonFilled({ width, height, icon, type, isDisabled }) {
  
  let borderRadius

  switch (type) {
    case 'filled':
      borderRadius = "rounded-lg";
      break;

    case 'filled rounded':
      borderRadius = "rounded-full";
      break;

    default:
      break;
  }

  return (
    <button 
    className={ 
      `${width} ${height} flex justify-center items-center bg-light-100 text-dark-300 disabled:bg-light-500 disabled:text-light-200 hover:bg-primary-500 hover:text-light-200 active:bg-primary-400 active:text-light-200 ${borderRadius}`} 
    disabled={isDisabled}>
      {icon}
    </button>
  );
}

IconOnlyButtonFilled.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.object,
  isDisabled: PropTypes.bool,
};