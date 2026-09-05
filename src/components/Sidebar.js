import React from 'react'
import { Link } from 'gatsby'

import { ColorDropdown } from './ColorDropdown'
import floppyLogo from '../assets/nav-floppy.png'
import { mainNavLinks, subNavLinks } from '../data/navLinks'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Mail } from '../assets/Mail'
import { Rss } from '../assets/Rss'
import { GitHub } from '../assets/GitHub'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const links = mainNavLinks
  const subLinks = subNavLinks
  const socialLinks = [
    {
      url: 'mailto:hello@cmkhoa.me',
      label: 'Email',
      Icon: Mail,
    },
    { url: 'https://github.com/REPLACE_WITH_YOUR_USERNAME', label: 'GitHub', Icon: GitHub },
    { url: '/rss.xml', label: 'RSS feed', Icon: Rss },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <img
              src={floppyLogo}
              className="navbar-logo"
              alt="cmkhoa.me"
              height="16"
              width="16"
            />
            <span className="site-name">cmkhoa.me</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            <div className="tooltip-container">
              <button
                className="navbar-button"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'

                  handleUpdateTheme(newTheme)
                }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <div className="tooltip">Theme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <div className="sidebar-content">
          <p>
            I'm <Link to="/me">cmkhoa</Link>. This is a home for notes, work,
            and experiments.
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <Link key={link.url} to={link.url} activeClassName="active">
              <img src={link.image} alt="" />
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="sidebar-bottom">
        <section className="sidebar-section">
          <nav className="sidebar-links">
            {socialLinks.map(({ url, label, Icon, image }) => (
              <div className="tooltip-container tooltip-above" key={url}>
                {url.startsWith('http') ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {Icon ? (
                      <Icon size={20} />
                    ) : (
                      <img src={image} alt="" width="20" height="20" />
                    )}
                  </a>
                ) : (
                  <a href={url} aria-label={label}>
                    {Icon ? (
                      <Icon size={20} />
                    ) : (
                      <img src={image} alt="" width="20" height="20" />
                    )}
                  </a>
                )}
                <div className="tooltip">{label}</div>
              </div>
            ))}
          </nav>
        </section>

        <nav className="sidebar-sub-links">
          {subLinks.map((link, index) => (
            <React.Fragment key={link.url}>
              {index > 0 && <div className="divider" />}
              {link.url.startsWith('http') ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link to={link.url} activeClassName="active">
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </aside>
  )
}
