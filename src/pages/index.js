import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function Index({ data }) {
  const recent = useMemo(
    () => getSimplifiedPosts(data.latestPosts.edges, { thumbnails: true }),
    [data.latestPosts.edges]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PageLayout>
        <Hero type="index">
          <div className="hero-wrapper">
            <div>
              <h1>Hi, I’m cmkhoa.</h1>
              <p className="hero-description hero-tagline">
                A personal site for notes, work, and things in progress.
              </p>
              <p className="hero-description">
                This is a starting point. Update the copy, links, and content in
                the <code>content</code> directory to make it your own.
              </p>
            </div>
          </div>
        </Hero>

        <section className="section-index">
          <Heading title="Latest notes" slug="/blog" buttonText="All Notes" />
          <Posts data={recent} detailed />
        </section>

        <section>
          <Heading title="Work" slug="/projects" buttonText="All Work" />
          <div className="cards">
            {projectsList.filter((project) => project.highlight).map((project) => (
              <div className="card" key={project.slug}>
                <time>{project.date}</time>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
                <p>{project.tagline}</p>
              </div>
            ))}
          </div>
          <p>
            Learn more <Link to="/me">about cmkhoa</Link> or view the{' '}
            <Link to="/resume">resume</Link>.
          </p>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latestPosts: allMarkdownRemark(
      limit: 4
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
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
