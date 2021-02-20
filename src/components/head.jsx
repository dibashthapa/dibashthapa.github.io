import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title, keywords, image }) => {
	return (
		<Helmet key={image}>
			<title>{`${title} | Dibash Blogs`}</title>
			<meta name="description" content="A personal blog website" />
			<meta name="author" content="Dibash Thapa" />
			<meta name="keywords" content={`${keywords}`} />
			<meta property="twitter:image" content={image} />
		</Helmet>
	)
}

export default Head
