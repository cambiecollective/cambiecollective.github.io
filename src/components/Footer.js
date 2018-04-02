import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>We Are Open Source</h2>
            <p>Gastown Gang operates transparently. We welcome all contributions!</p>
            <ul className="actions">
                <li><a href="https://github.com/gastowngang/gastowngang.github.io" className="button">Join us!</a></li>
            </ul>
        </section>
        <section>
            <h2>Find us on the internet</h2>
            <ul className="icons">
                <li><a href="https://twitter.com/gastowngang" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/gastowngang/gastowngang.github.io" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Manil Chowdhury. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
