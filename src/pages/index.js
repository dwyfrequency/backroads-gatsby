import React from 'react'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import About from '../components/home/about'
import Services from '../components/home/Services'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="continue exploring" info="lorem ipsum">
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
