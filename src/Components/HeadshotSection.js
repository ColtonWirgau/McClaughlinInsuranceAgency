import React from 'react';
import ContactForm from './ContactForm';

function HeadshotSection() {
	return (
		<div className="headshotSectionContainer">
			<a href="tel:6155963349" className="headshotCard card">
				<div className="cardBadge"></div>
				<div className="headshotCircle"></div>
				<div className="bioTextContainer">
					<div className="headshotCardMainText">Wendell McLaughlin</div>
					<div className="headshotCardSubText cardSubText">McLaughlin Insurance Group</div>
					<p id="headshotCardBlurb" className="headshotCardBlurb">
						Ea eu esse tempor velit nulla amet officia laboris culpa voluptate adipisicing minim mollit laborum. Duis dolor fugiat esse eiusmod. Esse
						irure ex dolor deserunt qui culpa laboris minim magna Lorem proident. Ut aliqua sunt eu ad.
					</p>
				</div>
				<div className="btn cardBtn margin-top">Call me!</div>
			</a>
			<div className="contactFormContainer">
				<div className="sectionTitle">
					<h1>Preparing for the Expected and Unexpected</h1>
					<p>How can we serve you today?</p>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}

export default HeadshotSection;
