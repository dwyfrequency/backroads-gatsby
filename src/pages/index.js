import React from 'react'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="continue exploring" info="lorem ipsum">
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
