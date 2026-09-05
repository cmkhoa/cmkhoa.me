import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Search } from '../components/Search'
import { SEO } from '../components/SEO'
import { PageLayout } from '../components/PageLayout'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Blog({ data }) {
  const posts = data.posts.edges
  const simplifiedPosts = useMemo(
    () => getSimplifiedPosts(posts, { thumbnails: true }),
    [posts]
  )
  const title = 'Notes'
  const description = 'Short writing, references, and ideas in progress.'

  const heroDescription = (
    <div>
      {`${description} `}
      <Link to="/topics">Browse by topic</Link>.
    </div>
  )

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customTitle={title} customDescription={description} />
      <PageLayout>
        <Hero
          title={title}
          description={heroDescription}
          hasSearch
        />

        <Search data={simplifiedPosts} section="blog" detailed />
      </PageLayout>
    </>
  )
}

Blog.Layout = Layout

export const articlesQuery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
