import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <h1>Hello Gatsby!</h1>
      <Link to='/about/'>About</Link>
    </Layout>
  )
}

export default Home;