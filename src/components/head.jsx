import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title, keywords, image }) => {
	return (
		<Helmet key={image}>
			<title>{`${title} | Dibash Blogs`}</title>
			<meta name="description" content="A personal blog website" />
			<meta name="author" content="Dibash Thapa" />
			<meta name="keywords" content={`${keywords}`} />
			<meta
				property="og:image"
				content={'https://redux.js.org/img/redux-logo-landscape.png'}
			/>
			<meta property="og:site_name" content="Dibash Blogs" />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="article" />
		</Helmet>
	)
}

export default Head
