import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

const getCooperation = graphql`
query{
    wspolpraca:allContentfulWspolpraca{
      edges{
        node {
          nazwa
          logo{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
          link
        }
      }
    }
  }
`

const Cooperation = () => {
    const {wspolpraca} = useStaticQuery(getCooperation);
    return (
        <ul className="cooperation-list">
            {wspolpraca.edges.map(({node}) => {
                return (
                    <li className="cooperation-list__item" key={node.nazwa}>
                        <a href={node.link} className="cooperation-item__link">
                            <Image className="cooperation-item__img"fluid={node.logo.fluid} alt={node.nazwa} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Cooperation
