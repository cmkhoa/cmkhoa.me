import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { Portrait } from '../components/Portrait'
import { SEO } from '../components/SEO'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function PageTemplate({ data }) {
  const post = data.markdownRemark
  const { title, htmlTitle, description, thumbnail } = post.frontmatter
  const isAbout = post.frontmatter.slug === 'me'

  return (
    <>
      <Helmet title={htmlTitle || `${title} | ${config.siteTitle}`} />
      <SEO customTitle={title} customDescription={description} />

      <PageLayout>
        <Hero title={title} thumbnail={thumbnail} />
        <div
          id={`article-${post.frontmatter.slug}`}
          className={`page-article${isAbout ? ' about-article' : ''}`}
        >
          {isAbout && <Portrait />}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </PageLayout>
    </>
  )
}

PageTemplate.Layout = Layout

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        htmlTitle
        slug
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 40, height: 40, layout: FIXED)
          }
        }
      }
    }
  }
`
