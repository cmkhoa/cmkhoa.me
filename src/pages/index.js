import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { Portrait } from '../components/Portrait'
import { PageLayout } from '../components/PageLayout'
import { projectsList } from '../data/projectsList'
import config from '../utils/config'

export default function Index() {
  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />
      <PageLayout>
        <Hero type="index">
          <div className="hero-wrapper has-portrait">
            <div>
              <h1>Hi, I’m Michael Cao.</h1>
              <p className="hero-description hero-tagline">
                Computer Science at UIC. Backend systems, AI infrastructure, and applied ML.
              </p>
              <p className="hero-description">
                I build the systems around AI—from concurrent storage and local
                model orchestration to tools for students and reproducible
                model evaluation. This is a home for that work, photography,
                and things in progress.
              </p>
            </div>
            <Portrait />
          </div>
        </Hero>

        <section>
          <Heading title="Featured work" slug="/projects" buttonText="All Projects" />
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
            View my <Link to="/work">experience</Link>, learn more{' '}
            <Link to="/me">about cmkhoa</Link>, or read the{' '}
            <Link to="/resume">resume</Link>.
          </p>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout
