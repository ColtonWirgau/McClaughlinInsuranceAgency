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
		</>
	);
}

export default Home;
