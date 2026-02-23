import {NextSeo} from 'next-seo';

const SiteMeta = ({children, meta}) => {
	const DEFAULT_SEO = {
		title: meta?.title || 'from Heaven World',
		description:
			meta?.description || 'An another shopping solution from Heaven World',
		keywords: 'marketplace',
	};

	return (
		<>
			<NextSeo {...DEFAULT_SEO} />
			<>{children}</>
		</>
	);
};

export default SiteMeta;
