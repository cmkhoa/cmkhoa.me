import React from 'react'
import { withPrefix } from 'gatsby'

export const Portrait = () => (
  <img
    className="profile-portrait"
    src={withPrefix('/michael-cao.jpg')}
    alt="Michael Cao smiling in front of a mountain glacier"
    width="240"
    height="240"
    decoding="async"
  />
)
