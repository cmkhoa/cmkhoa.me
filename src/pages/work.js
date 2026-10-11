import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { experienceList } from '../data/experienceList'

export default function Work() {
  const title = 'Work'
  const description = 'Experience in software engineering, research, and teaching.'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customTitle={title} customDescription={description} />
      <PageLayout>
        <Hero title={title} description={description} />
        <div className="cards">
          {experienceList.map((experience) => (
            <article className="card" key={experience.slug}>
              <time>{experience.date}</time>
              <h2 className="card-header">{experience.organization}</h2>
              <p><strong>{experience.role}</strong></p>
              <p>{experience.summary}</p>
            </article>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

Work.Layout = Layout
