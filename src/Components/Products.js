import Product from './Product';

const products = [
	{
		id: 1,
		link: 'WholeLifeInsurance',
		name: 'Whole Life',
		description: `Permanent insurance where you choose how long you want to pay a fixed price premium. You can rest in knowing that there is no expiration date and you are locked in to your rate.`,
	},
	{
		id: 2,
		link: 'TermLifeInsurance',
		name: 'Term Life',
		description: `Select a time frame that you would like to have life insurance. In the event that the insured does pass in that timeframe, you will be covered.`,
	},
	{
		id: 3,
		link: 'SupplementalLifeInsurance',
		name: 'Supplemental',
		description: `We are here to help you expect the unexpected. Consider whether you need coverage for yourself or your entire family. Click here to check out some other types of coverage we can offer.`,
	},
];

const Products = () => {
	return (
		<div className="products">
			{products.map((product) => (
				<Product product={product} />
			))}
		</div>
	);
};

export default Products;
