import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function Shoes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

 	return (
	 	<>
			<ul className={isActive ? 'dropdown-menu dropdown-close' : 'dropdown-menu dropdown-open'}>
				<li className='dropdown-header'>
					<p className='dropdown-title'>Обувь</p>
					<img src={arrow} alt="open arrow" className='dropdown-icon' onClick={handleToggle}/>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/shoes/men_shoes" className='dropdown-link'>Мужская обувь</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/shoes/women_shoes" className='dropdown-link'>Женская обувь</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/shoes/baby_shoes" className='dropdown-link'>Детская обувь</NavLink>
				</li>
			</ul>
		</>
  	)
}

export default Shoes;