import Service from './Service';
import image1 from '../Assets/Images/family3.jpg';
import image2 from '../Assets/Images/family4.jpg';
import image3 from '../Assets/Images/family2.jpg';

const services = [
	{
		id: 1,
		link: 'WholeLifeInsurance',
		name: 'Whole Life',
		description: `Permanent insurance where you choose how long you want to pay a fixed price premium. You can rest in knowing that there is no expiration date and you are locked in to your rate.`,
		image: image1,
	},
	{
		id: 2,
		link: 'TermLifeInsurance',
		name: 'Term Life',
		description: `Select a time frame that you would like to have life insurance. In the event that the insured does pass in that timeframe, you will be covered.`,
		image: image2,
	},
	{
		id: 3,
		link: 'SupplementalLifeInsurance',
		name: 'Supplemental Insurance',
		description: `We are here to help you expect the unexpected. Consider whether you need coverage for yourself or your entire family.`,
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
