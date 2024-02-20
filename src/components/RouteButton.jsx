import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RouteButton = ({ to, onClick, children, backgroundColor, textColor }) => {
  return (
    <Link to={to} className={`bg-${backgroundColor} text-${textColor} px-10 py-2 rounded-md cursor-pointer font-bold`} onClick={onClick}>
      {children}
    </Link>
  );
};

RouteButton.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

RouteButton.defaultProps = {
  backgroundColor: 'blue-500',
  textColor: 'white',
};

export default RouteButton;
