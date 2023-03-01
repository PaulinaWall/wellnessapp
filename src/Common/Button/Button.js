import React from 'react';

import readMoreIcon from './readMore.svg';

import './Button.css';

export const Button = ({
  buttonStyle, /* primary, secondary, inline */
  title,
}) => {
	return (
    <button
      type="button"
      className={`button-base ${buttonStyle}`}
    >
      {title}
      {buttonStyle === 'inline' &&
        <img src={readMoreIcon} alt="read-more-icon" />
      }
    </button>
	)
}