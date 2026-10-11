import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
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
          <div className="hero-wrapper">
            <div>
              <h1>Hi, I’m cmkhoa.</h1>
              <p className="hero-description hero-tagline">
                A personal site for engineering work, photography, and things in progress.
              </p>
              <p className="hero-description">
                I build reliable systems for LLM workloads—from concurrent storage
                and local model orchestration to reproducible evaluation pipelines.
              </p>
            </div>
          </div>
        </Hero>

        <section>
          <Heading title="Projects" slug="/projects" buttonText="All Projects" />
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
