const nextConfig = {
	reactStrictMode: false,
	output:'standalone',	
	images: {
		domains: ['heavenworlds.com'],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true, // ✅ Correct placement inside images
	  },
};

module.exports = nextConfig;
