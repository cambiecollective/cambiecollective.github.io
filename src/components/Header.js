import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo-rocket.svg';

const Header = (props) => (
    <header id="header" className="alt">
        {/* <span className="logo"><img src={logo} alt="" /></span> */}
        <h1>Gastown Gang 🏭</h1>
        <p>a Vancouver-focused community and events team for the tech and maker community</p>
    </header>
)

export default Header
