import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <p>This is just a test page. Don't get too excited... yet.</p>
      <Link to="/about">About</Link>
    </main>
  )
}

export const Head = () => (
  <>
    <title>Home Page Test</title>
    <meta name="description" content="Home page description" />
  </>
)

export default IndexPage