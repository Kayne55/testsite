import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
            <Link to="/">Home</Link>
        </main>
    )
}

export const Head = () => (
    <>
        <title>About</title>
        <meta name="description" content="About this website." />
    </>
)

export default AboutPage