import React from "react"
import MailChimpForm from "../components/mailchimpform"
import { Link, graphql, useStaticQuery } from "gatsby"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

const Newsletter = () => {
  const data = useStaticQuery(pageQuery)
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const header = (
    <Link className="header-link-home" to="/">
      {siteTitle}
    </Link>
  )
  return (
    <div className="global-wrapper">
      <header style={{ marginBottom: "2em" }} className="global-header">
        {header}
      </header>
      <p>
        My name is Haris Rozajac, I live in Utah and I am a dedicated learner,
        experimenter, and scribe. My newsletter and my website are about those
        three topics: learning, experimenting and writing. Every day, I spend
        several hours reading books, talks, and articles, and I take extensive
        notes. On the weekends, I write about what I've learned during the week
        and then make a plan to test theories or ideas I've discovered.
      </p>
      <p>
        {" "}
        I don't believe in reading authors whose ideas I cannot test, but I will
        boldly experiment with everything else. I'm anxious to share the results
        of those mental and physical experiments, along with useful insights,
        ideas, and tools. In a world with so many meaningless distractions, I'm
        seeking to find content that brings meaning to my life. Occasionally, I
        will write fiction because sometimes that is the only way to conduct
        effective experiments and get answers to troubling questions.
      </p>
      <MailChimpForm text="Subscribe now and receive quality and creative content every Monday." />
    </div>
  )
}

export default Newsletter
