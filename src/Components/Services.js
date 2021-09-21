import Service from './Service';
import image1 from '../Assets/Images/family3.jpg';
import image2 from '../Assets/Images/family4.jpg';
import image3 from '../Assets/Images/family2.jpg';

const services = [
	{
		id: 1,
		link: 'WholeLifeInsurance',
		name: 'Whole Life',
		description: `Permanent insurance where you choose how long you want to pay a fixed price premium. You can rest in knowing that there is no expiration date and you are locked in to your rate. Some of the products we offer are a 10 pay, 20 pay, 30 pay, and paid up at 65. With these products, the quicker you pay them off, the higher the premium, but each product can be tailor made to your budget.`,
		image: image1,
	},
	{
		id: 2,
		link: 'TermLifeInsurance',
		name: 'Term Life',
		description: `Select a time frame that you would like to have life insurance. In the event that the insured does pass in that timeframe, you will be covered. We offer term in 10, 20 and 30 year. This can be used as a mortgage payoff or to fund your child's college education in the event that you are no longer here.`,
		image: image2,
	},
	{
		id: 3,
		link: 'SupplementalLifeInsurance',
		name: 'Supplemental Insurance',
		description: `We are here to help you expect the unexpected. Consider whether you need coverage for yourself or your entire family. With these types of products, we offer dental, medical, and accidental insurance. These policies can be used to offset what you have with your employer and will follow you when you leave that place of employment.`,
		image: image3,
	},
];

const Services = () => {
	return (
		<section className="services">
			{services.map((service) => (
				<Service service={service} />
			))}
		</section>
	);
};

export default Services;
