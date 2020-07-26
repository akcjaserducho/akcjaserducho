import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Microdotations from "../images/microdotations.png"

const Img = styled.img`
  max-width: 100%;
`

const getFounders = graphql`
  query {
    wspierajaNas: allContentfulWspierajaNas {
      edges {
        node {
          nazwa
          logo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          link
        }
      }
    }
  }
`

const Founders = () => {
  const { wspierajaNas } = useStaticQuery(getFounders)
  return (
    <ul className="cooperation-list">
      {wspierajaNas.edges.map(({ node }) => {
        return (
          <li className="cooperation-list__item" key={node.nazwa}>
            <a href={node.link} className="cooperation-item__link">
              <Image
                className="cooperation-item__img"
                fluid={node.logo.fluid}
                alt={node.nazwa}
              />
            </a>
          </li>
        )
      })}
      <Img src={Microdotations} alt="realizujemy MikroDotacje" />
    </ul>
  )
}

export default Founders
