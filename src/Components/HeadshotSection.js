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
						I'm passionate about helping families and small businesses, not only understand the importance of knowing the insurance market through and
						through, but also making sure they have the right products in place for themselves when they need them most.
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
