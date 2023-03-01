import React from 'react';

import './Button.css';

export const Button = ({
  isSecondary,
  title,
}) => {
	return (
    <button
      type="button"
      className={
        isSecondary ? 'button-base secondary' : 'button-base primary'
      }>
      {title}
    </button>
	)
}