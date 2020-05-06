import React from 'react'
import '../Styles/nav.scss'
import GitHubLarge from '../images/GitHubLarge.png'

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <img className="headerImage" src={GitHubLarge} alt="Github Logo" />
          <li>
            <a className="octodexName navLink" href="/">
              Octocatz
            </a>
          </li>
          <li>
            <a className="navLink" href="/">
              Home
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="navLink" href="/">
              Faq
            </a>
          </li>
          <li>
            <a className="navLink" href="/">
              Follow Us on Twitter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
