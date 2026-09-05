import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'

export default function Projects() {
  const title = 'Work'
  const description = 'Selected projects and experiments by cmkhoa.'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customTitle={title} customDescription={description} />
      <PageLayout>
        <Hero title={title} description={description} />
        <div className="cards">
          {projectsList.map((project) => (
            <div className="card" key={project.slug}>
              <time>{project.date}</time>
              <a className="card-header" href={project.url} target="_blank" rel="noreferrer">
                {project.name}
              </a>
              <p>{project.tagline}</p>
              <div className="card-links">
                <a href={project.url} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

Projects.Layout = Layout
