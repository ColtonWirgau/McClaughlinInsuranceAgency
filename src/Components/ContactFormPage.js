import React from 'react';
import ContactForm from './ContactForm';

function ContactFormPage() {
	return (
		<section>
			<div className="contactFormContainer">
				<div className="sectionTitle">
					<h1>Preparing for the Expected and Unexpected</h1>
					<p>How can we serve you today?</p>
				</div>
				<ContactForm />
			</div>
		</section>
	);
}

export default ContactFormPage;
