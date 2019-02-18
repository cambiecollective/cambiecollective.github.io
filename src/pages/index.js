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
                  <h2>what we're doing 💁🏽</h2>
                </header>
                <p>Supporting resilient, inclusive tech and maker 
                  communities that empower positive change.</p>
                <ul className="actions">
                  <li><Link to="/sponsors" className="button special">Sponsors</Link></li>
                </ul>
              </div>
              <span className="image"><img src={logo} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>our events</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3><a href='https://nodeschool.io/vancouver/'>NodeSchoolYVR</a></h3>
                <p>free self-directed in-person hosted workshops in which command-line workshoppers are used as curriculum and mentors help attendees work through the challenges.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3><a href='https://www.meetup.com/codecoffeeyvr/'>Code & Coffee YVR</a></h3>
                <p>sit down and code to your heart's content on whatever project you bring! Also a community stage for mostly new, sometimes experienced speakers.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3><a href='https://www.meetup.com/PyLadies-Vancouver/'>PyLadies Vancouver</a></h3>
                <p>a Python programming group for women in the Vancouver area. We welcome people who have never programmed before, experienced programmers, and everyone in between.</p>
              </li>
              <li>
                <span className="icon major style2 fa-arrow-right"></span>
                <h3><a href='https://www.meetup.com/Vancouver-Functional-Programmers/'>VanFP</a></h3>
                <p>a broad functional programming gathering space for people of all levels and functional langauges.</p>
              </li>
              <li>
                <span className="icon major style4 fa-python"></span>
                <h3><a href='https://www.meetup.com/vanpyz/'>VanPy</a></h3>
                <p>we bring together Pythonistas from academic, web, science, data, visual effects and other backgrounds under one roof.</p>
              </li>
              <li>
                <span className="icon major style3 fa-js-square"></span>
                <h3><a href='https://www.meetup.com/vancouver-javascript-developers/'>VanJS</a></h3>
                <p>a meetup for web developers in downtown Vancouver, focused on JavaScript, front-end technology, and the open web.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/sponsors" className="button">also check out our sponsors</Link></li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>our audience</h2>
              <p>come for the talks,<br />
              stay for the people.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>6</strong> meetups
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>12,000+</strong> members
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1</strong> community
              </li>
            </ul>
            <p className="content">Our audience is a diverse mix of interests. 
              With 12000 members and counting, our responsibility to create healthy 
              communities continues to grow. You're welcome to join us as an audience member, a sponsor, a venue partner, or even as a contributor. 🎉 What does that mean? <a href='https://twitter.com/gastowngang/following'>Tweet at or DM any of us</a> to find out.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>The Unified Charter</h2>
              <p>We work to support meetups in their day to day operations and get new ones off the ground! 🚀</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/" className="button special">Code of Conduct</Link></li>
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
