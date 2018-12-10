import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import logoElysian from '../assets/images/elysian-logo.png'

class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <header id="header">
            <h1>Sponsors</h1>
            <p>the teams who help us support the community</p>
        </header>

        <div id="main">
          <section id="content" className="main">
            <ul className="features">
              <li>
                <h3><a href='https://elysiancoffee.com/'>Elysian Coffee Roasters</a></h3>
                <p>
                  Elysian Coffee Roasters have hosted our smaller community meetups at their
                  café since mid-2018.
                  Their crew is welcoming and their coffee is delicious ☕️
                </p>
              </li>
            </ul>
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query SponsorsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
