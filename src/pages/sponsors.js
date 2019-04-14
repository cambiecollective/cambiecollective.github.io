import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const SponsorsPage = (props) => {
  return (
    <div>
      <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

      <header id="header">
          <h1>Sponsors</h1>
          <p>the people and teams who help us support the community</p>
      </header>

      <div id="main">
        <section id="content" className="main">
          <ul className="features">
            <li>
              <h3><a href='https://saucelabs.com/'>🔥 Sauce Labs</a></h3>
              <p>
                Sauce Labs have hosted our NodeSchool meetups at their
                offices in Downtown Vancouver.
                The folks are welcoming, 
                they know a lot about testing,
                and they're so helpful about learning!
              </p>
            </li> 
            <li>
              <h3><a href='https://www.clio.com/'>️🍍 Clio</a></h3>
              <p>
                Clio have hosted our NodeSchool meetups at their
                offices in Burnaby.
                Their crew is rad, 
                their office is massive,
                and they're totally happy to share their brilliant engineering culture!
              </p>
            </li>
            <li>
              <h3><a href='https://elysiancoffee.com/'>☕️ Elysian Coffee Roasters</a></h3>
              <p>
                Elysian Coffee Roasters have hosted our smaller community meetups at their
                café.
                Their team is supportive, 
                their space is perfect for learning, 
                and their coffee is delicious.
              </p>
            </li>
            <li>
              <h3><a href='https://7gate.vc'>💻 7 Gate Ventures</a></h3>
              <p>
                7 Gate Ventures have shared their spaces with several of our meetups.
                Their team is hospitable, 
                they focus on technology, 
                and the community driving it forward.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SponsorsPage

export const pageQuery = graphql`
  query SponsorsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
