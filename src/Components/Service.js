import React from 'react';
//import image1 from '../Assets/Images/family1.jpg';

const Service = ({ service }) => {
	return (
		<div className="service">
			<span class="anchor" id={service.link}></span>
			<div className="serviceInfo">
				<h1>{service.name}</h1>
				<p>{service.description}</p>
				<form className="shortForm">
					<label for="email">Email</label>
					<input type="text" id="email" name="email" placeholder="example@email.com" required></input>
					<input type="text" id="type" name="type" value={`${service.name}`} style={{ display: 'none' }}></input>
					<input type="submit" className="btn margin-top" value="I'm interested!"></input>
				</form>
			</div>
			<div className="serviceImage" style={{ backgroundImage: `url(${service.image})` }}></div>
		</div>
	);
};

export default Service;
