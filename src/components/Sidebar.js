import React, { useState } from 'react'
import { Link } from 'gatsby'

import { ColorDropdown } from './ColorDropdown'
import floppyLogo from '../assets/nav-floppy.png'
import { mainNavLinks, subNavLinks } from '../data/navLinks'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Mail } from '../assets/Mail'
import { GitHub } from '../assets/GitHub'
import { Linkedin2Solid } from 'pixelarticons/react'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const email = 'cmkhoa2006@gmail.com'
  const [emailStatus, setEmailStatus] = useState('')
  const links = mainNavLinks
  const subLinks = subNavLinks
  const socialLinks = [
    { url: 'https://github.com/cmkhoa', label: 'GitHub', Icon: GitHub },
    {
      url: 'https://linkedin.com/in/cmkhoa',
      label: 'LinkedIn',
      Icon: Linkedin2Solid,
    },
  ]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailStatus('Copied!')
    } catch {
      setEmailStatus('Copy failed')
    }

    window.setTimeout(() => setEmailStatus(''), 2000)
  }

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
            I'm <Link to="/me">cmkhoa</Link>. This is a home for engineering
            work, photography, and experiments.
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              activeClassName="active"
              className={link.url === '/work' ? 'work-nav-link' : undefined}
            >
              <img src={link.image} alt="" />
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="sidebar-bottom">
        <section className="sidebar-section">
          <nav className="sidebar-links">
            <div className="tooltip-container tooltip-above">
              <button
                type="button"
                className="sidebar-icon-button"
                onClick={handleCopyEmail}
                aria-label={`Copy ${email} to clipboard`}
              >
                <Mail size={20} />
              </button>
              <div className="tooltip">{emailStatus || 'Copy email'}</div>
            </div>
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
                      <Icon size={20} width={20} height={20} />
                    ) : (
                      <img src={image} alt="" width="20" height="20" />
                    )}
                  </a>
                ) : (
                  <a href={url} aria-label={label}>
                    {Icon ? (
                      <Icon size={20} width={20} height={20} />
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
