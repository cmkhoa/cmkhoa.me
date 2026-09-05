import React, { useState } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import queryString from 'query-string'
import { useLocation } from '@reach/router'

import { Searchbar } from './Searchbar'

import { Posts } from './Posts'

export const Search = ({ data, section, detailed }) => {
  const location = useLocation()

  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || '')
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `)

  const quickFilters = [
    { tag: 'site', label: 'Site' },
    { tag: 'notes', label: 'Notes' },
    { tag: 'writing', label: 'Writing' },
  ]

  const handleQuickFilter = (tag) => {
    const next = query === tag ? '' : tag

    navigate(next ? `/${section}/?search=${next}` : `/${section}/`)

    setQuery(next)
  }

  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  )

  return (
    <>
      <div className="quick-filters">
        {quickFilters.map(({ tag, label }) => (
          <div className="tooltip-container tooltip-above" key={tag}>
            <button
              type="button"
              aria-label={`Filter posts by ${label}`}
              className={`quick-filter ${query === tag ? 'active' : ''}`}
              onClick={() => handleQuickFilter(tag)}
            >
              {label}
            </button>
            <div className="tooltip">{label}</div>
          </div>
        ))}
      </div>
      <Searchbar
        count={data.length}
        query={query}
        handleSearch={(event) => {
          const updatedValue = event.target.value
            ? `/${section}/?search=${event.target.value}`
            : ''

          navigate(updatedValue)

          setQuery(event.target.value)
        }}
        style={{ marginBottom: '2.5rem' }}
      />
      <section>
        {query ? (
          results.length > 0 ? (
            <Posts data={results} showYears query={query} detailed={detailed} />
          ) : (
            <p style={{ marginTop: '2rem' }}>
              Sorry, nothing matched that search.
            </p>
          )
        ) : (
          <Posts data={data} showYears detailed={detailed} />
        )}
      </section>
    </>
  )
}
