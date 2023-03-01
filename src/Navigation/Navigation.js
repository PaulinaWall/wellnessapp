import React from 'react';

import logo from './Logo.svg';
import currentUserLogo from './currentUserLogo.svg'; 

import './Navigation.css';

export const Navigation = ({
	activeItem,
	items,
	onItemChange,
}) => {
	return (
		<header className='header'>
			<div className='header-left-section'>
				<img src={logo} className="eletive-logo" alt="logo" onClick={() => onItemChange(1)} />
				<ul className='navigation-list'>
					{
						items.map(({ name, id }) => {
							const isActive = id === activeItem;
							// console.log(id, activeItem)
							return	(
								<li
									className={
											isActive ? 'list-item active' : 'list-item not-active'
									}
									onClick={() => onItemChange(id)}
								>
									{name}
								</li>
							)
						})
					}
				</ul>
			</div>
			<img src={currentUserLogo} className="current-user-logo" alt="logo" onClick={() => onItemChange(5)} />
		</header>
	)
}