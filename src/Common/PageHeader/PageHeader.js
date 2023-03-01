import React from 'react';

import './PageHeader.css';

export const PageHeader = ({
  heading,
  description
}) => {
	return (
    <div className="header-container">
      <div className="subheader">
				<h1 className="heading-large">{heading}</h1>
        <p className="description">{description}</p>
			</div>
    </div>
	)
}