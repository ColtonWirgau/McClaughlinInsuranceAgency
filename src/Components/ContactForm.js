import React from 'react';

const ContactForm = () => {
	return (
		<form name="contactFormV1" data-netlify="true" onSubmit="submit" method="post" className="Contact Form">
			<input type="hidden" name="form-name" value="contactFormV1" />
			<label for="fname">First name</label>
			<input type="text" id="fname" name="fname" required></input>
			<label for="lname">Last name</label>
			<input type="text" id="lname" name="lname" required></input>
			<label for="phone">Phone</label>
			<input type="text" id="phone" name="phone" required></input>
			<label for="email">Email</label>
			<input type="text" id="email" name="email" required></input>
			<label for="userType">I am looking for</label>
			<select name="userType" id="userType" required>
				<option value="personal">Personal Life Insurance</option>
				<option value="business">Business Life Insurance</option>
				<option value="business">Both</option>
				<option value="other">Other</option>
			</select>
			<label for="insuranceType">I am interested in</label>
			<select name="insuranceType" id="insuranceType" required>
				<option value="personal">Whole Life Insurance</option>
				<option value="business">Term Life Insurance</option>
				<option value="business">Supplemental Life Insurance</option>
				<option value="other">Other</option>
			</select>
			<label for="details">Tell us more about what you need</label>
			<textarea className="textbox" type="text" id="details" name="details"></textarea>
			<input type="submit" className="btn margin-top" value="Submit"></input>
		</form>
	);
};

export default ContactForm;
