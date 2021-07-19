import React from 'react';
import logo from '../Assets/Images/McLaughlinLogo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
	return (
		<header>
			<section>
				<Link className="headerLogo" to="/" exact>
					<img src={logo} alt="McLaughlin Insurance Group" />
					<div className="headerLogoText">
						<h2>McLaughlin</h2>
						<h4>Insurance Group</h4>
					</div>
				</Link>
				<ul>
					<li>
						<Link to="/Services">Services</Link>
					</li>
					<li>
						<Link className="btn" to="/Contact">
							Contact
						</Link>
					</li>
				</ul>
			</section>
		</header>
	);
}

export default Header;
