import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'

class SponsorAndSupport extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric pageTitle='Sponsor and Support' pageSummary='✨ Build your community ✨' />
        <div id="main">
          <section id="content" className="main">
            <h2>Sponsorship Package</h2>
            <p>Sponsorships made to Gastown Gang will grow all the events under its umbrella.</p>

            <h2>Types of sponsorship</h2>
            <p>You or your organization can be either a <em>venue</em> or a <em>cash</em> sponsor.</p>

            <h3>Venue</h3>
            <p>Venue sponsors may chose to host one or several of Gastown Gang-supported events.</p>

            <h4>What you get:</h4>
            <ul>
              <li>A personalized mention by our emcee at each event.</li>
              <li>(optional) Two minutes to speak at the start of the event. One of your employees or developer relations person should speak — no recruiters! You may prepare something for us to read. You may include job opportunities during your two minutes, but please don’t recruit audience members during socialization time.</li>
              <li>A space at the event to give out knickknacks and info.</li>
            </ul>

            <h3>Cash sponsors</h3>
            <p>Gastown Gang offers one benefits tier to any and all cash sponsors. Sponsorship funds will be used for food, drinks, and operational costs of the partner meetups and Gastown Gang initiatives. You can sponsor either 1 month at full rate or multiple months at increasingly discounted rates.</p>

            <table>
              <thead>
                <tr>
                  <th>Packages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 month</td>
                  <td>3 months</td>
                  <td>6 months</td>
                  <td>12 months</td>
                </tr>
                <tr>
                  <td>$500</td>
                  <td>$1350</td>
                  <td>$2550</td>
                  <td>$4800</td>
                </tr>
                <tr>
                  <td>(full rate)</td>
                  <td>save 10% </td>
                  <td>save 15%</td>
                  <td>save 20%</td>
                </tr>
              </tbody>
            </table>

            <h4>What you get for the duration of your support:</h4>
            <p><strong>All benefits given to Venue sponsors</strong><em> plus</em></p>
            <ul>
              <li>Invitations for your employees to attend.</li>
              <li>If you're a recurring sponsor, we can share your knickknacks and info materials if your employees cannot attend an event.</li>
              <li>Your logo on our website <strong>and</strong> the websites of all our partner events.</li>
            </ul>

            <h2>Future considerations in the pipeline</h2>
            <ul>
              <li>Logo placement (via video editing) on recorded workshops from each event</li>
            </ul>

            <h2>The Audience</h2>
            <p>The audience for Gastown Gang events is broad and diverse thanks to various partner meetups. You can find specific information in the profiles of each one!</p>

            <h2>Contact</h2>
            <p>For more information contact <Link to='/roles'>our sponsorship rep</Link>.</p>

            <h2>Currency</h2>
            <p>All cash sponsorships are represented in Canadian Dollars (CAD). Right now, 100 CAD can be had for about <a href="https://www.google.ca/search?q=100+usd+in+cad&oq=100+usd+in+cad">this much</a> US Dollars (USD) or <a href="https://www.google.ca/search?q=100+cad+in+eur">this much</a> Euros (EUR).</p>
          </section>
        </div>
      </div>
    )
  }
}

export default SponsorAndSupport

export const pageQuery = graphql`
  query SponsorAndSupportQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
