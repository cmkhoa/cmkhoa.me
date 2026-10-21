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
        <div className="experience-list">
          {experienceList.map((experience) => (
            <article className="experience-card" key={experience.slug}>
              <time className="experience-date">{experience.date}</time>
              <div className="experience-content">
                <h2>{experience.organization}</h2>
                <p className="experience-role">{experience.role}</p>
                <p>{experience.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

Work.Layout = Layout
