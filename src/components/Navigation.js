import React, { useState } from 'react'
import { Link } from 'gatsby'

import floppyLogo from '../assets/nav-floppy.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Menu } from '../assets/Menu'
import { Close } from '../assets/Close'
import { ColorDropdown } from './ColorDropdown'
import { mainNavLinks as links } from '../data/navLinks'

export const Navigation = ({
  handleUpdateTheme,
  theme,
  currentColor,
  setCurrentColor,
}) => {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleMobileNav = () => {
    setNavOpen((prev) => !prev)
  }

  const handleCloseMobileNav = () => {
    setNavOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-content">
          <Link to="/" className="navbar-title-link">
            <img
              src={floppyLogo}
              className="navbar-logo"
              alt="cmkhoa.me"
              height="16"
              width="16"
            />
            <span className="site-name">cmkhoa.me</span>
          </Link>
        </div>
      </div>
      <div className="navbar-container">
        <section className="navbar-section">
          <button
            className={`navbar-button nav-menu-button ${
              navOpen ? 'active' : ''
            }`}
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={navOpen}
            aria-controls="mobile-navigation"
            onClick={handleToggleMobileNav}
          >
            {navOpen ? <Close /> : <Menu />}
          </button>
          <nav id="mobile-navigation" className={`navbar-menu nav-items ${navOpen ? 'active' : ''}`}>
            <section className="mobile-sidebar-intro">
              <p>
                I'm <Link className="mobile-sidebar-inline-link" to="/me" onClick={handleCloseMobileNav}>cmkhoa</Link>. This is a home for engineering
                work, photography, and experiments.
              </p>
            </section>
            {links.map((link) => (
              <Link
                key={link.url}
                to={link.url}
                activeClassName="active"
                onClick={handleCloseMobileNav}
                className={link.url === '/work' ? 'work-nav-link' : undefined}
              >
                <img src={link.image} alt="" />
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="navbar-menu social">
            <button
              className="navbar-button"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              onClick={() => {
                const newTheme = theme === 'dark' ? 'light' : 'dark'

                handleUpdateTheme(newTheme)
              }}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
          </nav>
        </section>
      </div>
    </header>
  )
}
