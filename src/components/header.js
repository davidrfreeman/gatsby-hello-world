import React from "react"
import { Link } from "gatsby"

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>David Freeman</h1>
      <nav>
        <ul>
          <li>
            <Link className={headerStyles.link} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/contact">Contact</Link>
          </li>
          <li>
            <Link className={headerStyles.link} to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
