import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Product = ({ product }) => {
	return (
		<Link to={`/services/#${product.link}`} className="product card">
			<div className="cardBadge"></div>
			<div>
				<h1 className="cardSubText">{product.name}</h1>
				<p>{product.description}</p>
			</div>
			<div className="btn cardBtn margin-top">Learn More</div>
		</Link>
	);
};

export default Product;
