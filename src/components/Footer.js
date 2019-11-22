import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-footer.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

// const channelRegionNameIdx = 0
// const channelRegionLocaleIdx = 1
const channelRegionPathIdx = 2
// const channelRegionCurrencyIdx = 3

const translations = {
  'fr': {
    'home': 'Domicile',
    'aboutus': 'À Propos De Nous',
    'ourproducts': 'Nos Produits',
    'admin': 'Admin',
    'storeblog': 'Le Blog Du Magasin',
    'contactus': 'Contactez Nous',
  },
  'default': {
    'home': 'Home',
    'aboutus': 'About Us',
    'ourproducts': 'Our Products',
    'admin': 'Admin',
    'storeblog': 'The Store Blog',
    'contactus': 'Contact Us',
  }
}

const Footer = class extends React.Component {
  render() {
    const pageContext = this.props.pageContext
    let channelRegionPathPrefix = pageContext.channel.external_id.split('|')[channelRegionPathIdx]
    let pageText = translations['default']
    
    if (channelRegionPathPrefix.length > 0 && translations[channelRegionPathPrefix]) {
      pageText = translations[channelRegionPathPrefix]
    }

    channelRegionPathPrefix = (!channelRegionPathPrefix.length) ? '' : '/' + channelRegionPathPrefix

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="My Store"
            style={{ height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter" style={{ paddingBottom: '3em' }}>
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to={`${channelRegionPathPrefix}/`} className="navbar-item">
                        {pageText.home}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`${channelRegionPathPrefix}/about`}>
                        {pageText.aboutus}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`${channelRegionPathPrefix}products`}>
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pageText.admin}
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to={`${channelRegionPathPrefix}/blog`}>
                        {pageText.storeblog}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={`${channelRegionPathPrefix}/contact`}>
                        {pageText.contactus}
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
