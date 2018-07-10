import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'

class Generic extends React.Component {
  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={pic04} alt="" /></span>
            <h2>Magna feugiat lorem</h2>
            <p>Lorem ipsum dolor amet cardigan venmo gluten-free listicle bitters asymmetrical irony taiyaki skateboard gochujang swag next level pickled disrupt. Tumeric marfa hexagon, literally tacos photo booth sartorial af. Pok pok lomo vice, man bun chia lyft leggings. Pop-up ramps pitchfork taxidermy jianbing biodiesel, literally synth farm-to-table air plant. Tattooed franzen quinoa master cleanse jianbing post-ironic.</p>
            <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables.</p>
            <h2>Tempus veroeros</h2>
            <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but.</p>
          </section>
        </div>

      </div>
    )
  }
}

export default Generic

export const pageQuery = graphql`
  query GenericQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
