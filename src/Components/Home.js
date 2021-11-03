import React from 'react';
import HeadshotSection from './HeadshotSection';
import Products from './Products';

function Home() {
	return (
		<>
			<section>
				<HeadshotSection />
			</section>
			<section>
				<Products />
			</section>
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="contact" />
				<label for="insuranceType">I am interested in</label>
				<select name="insuranceType" id="insuranceType" required>
					<option value="personal">Whole Life Insurance</option>
					<option value="business">Term Life Insurance</option>
					<option value="business">Supplemental Life Insurance</option>
					<option value="other">Other</option>
				</select>
				<input type="submit" className="btn margin-top" value="submit"></input>
			</form>
		</>
	);
}

export default Home;
