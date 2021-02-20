import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Head from '../components/head'

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
				edges {
					node {
						frontmatter {
							title
							subtitle
							date(formatString: "Do MMMM, YYYY")
							image
						}
						timeToRead
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			{data.allMarkdownRemark.edges.map((edge) => {
				let postIndex = data.allMarkdownRemark.edges.indexOf(edge)

				return (
					<div key={postIndex}>
						<Head
							title="Home"
							keywords={['tech', 'redux'].join(',')}
							image={edge.node.frontmatter.image}
						/>
						<article className={`list-blogs`}>
							<p>
								<i className="far fa-calendar-alt"></i>&nbsp;
								{edge.node.frontmatter.date} | &nbsp;
								<i className="fas fa-stopwatch"></i>&nbsp;
								{edge.node.timeToRead}min read
							</p>
							<Link to={`/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>
							</Link>
							<p className="subtitle">{edge.node.frontmatter.subtitle}</p>
						</article>
					</div>
				)
			})}
		</Layout>
	)
}

export default IndexPage
