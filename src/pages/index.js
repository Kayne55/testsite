import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <p>This is just a test page. Don't get too excited... yet.</p>
        <StaticImage
          alt="Random Image"
          src="../images/0-367x267.jpeg"
        />
      </Layout>
  )
}

export const Head = () => (
  <>
    <title>Home Page Test</title>
    <meta name="description" content="Home page description" />
  </>
)

export default IndexPage