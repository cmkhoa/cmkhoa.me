import floppy from '../assets/floppylogo.png'
import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'

export const mainNavLinks = [
  { url: '/blog', label: 'Notes', image: blog },
  { url: '/projects', label: 'Work', image: projects },
  { url: '/me', label: 'About', image: floppy },
]

export const subNavLinks = [
  { url: '/resume', label: 'Resume' },
  { url: '/topics', label: 'Topics' },
  { url: 'https://github.com/cmkhoa/cmkhoa.me', label: 'Source' },
]
