import React from 'react'
import { Link } from 'gatsby'

export const AuthorCard = () => {
  return (
    <aside className="author-card">
      <p>
        Thanks for reading. Learn <Link to="/me">more about cmkhoa</Link> or get
        in touch by{' '}
        <a
          href="mailto:cmkhoa2006@gmail.com"
        >
          email
        </a>
        .
      </p>
    </aside>
  )
}
