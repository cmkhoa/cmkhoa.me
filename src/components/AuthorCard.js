import React from 'react'
import { Link } from 'gatsby'

export const AuthorCard = () => {
  return (
    <aside className="author-card">
      <p>
        Thanks for reading. Learn <Link to="/me">more about cmkhoa</Link> or get
        in touch by{' '}
        <a
          href="mailto:hello@cmkhoa.me"
        >
          email
        </a>
        .
      </p>
    </aside>
  )
}
