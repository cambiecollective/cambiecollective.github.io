import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import logo from '../assets/images/logo.png'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>what we do 💁🏽</h2>
                </header>
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
                Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul>
              </div>
              <span className="image"><img src={logo} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>founding events</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3><Link>NodeSchoolYVR</Link></h3>
                <p>free self-directed in-person hosted workshops in which command-line workshoppers are used as curriculum and mentors help attendees work through the challenges.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3><Link>Code & Coffee YVR</Link></h3>
                <p>sit down and code to your heart's content on whatever project you bring! also a community stage</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Your next meetup</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">more partners</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Audience</h2>
              <p>Gastown Gang partner events have a broad, diverse, and growing<br />
              audience of programmers, designers, and technologists in all stages<br />
              of their career.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>3</strong> Meetups
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>5000+</strong> Attendees
              </li>
              <li className="style5">
                <span className="icon fa-laptop"></span>
                <strong>100+</strong> Speakers
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/sponsor-and-support" className="button">Sponsor and Support</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>The Unified Charter</h2>
              <p>We work to get meetups off the ground and support them through their day to day operations. Need a Code of Conduct? Need sponsorship support? Use our Unified Charter.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Code of Conduct</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
