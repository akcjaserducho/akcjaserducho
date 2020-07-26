import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';

const getTeam = graphql`
query{
    zespol:allContentfulZespol(sort:{fields:kolejnosc, order:ASC}){
      edges{
        node{
          nazwa
          opis{
            opis
          }
          zdjecie{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
          kolejnosc
        }
      }
    }
  }
`

const TeamList = () => {
    const {zespol} = useStaticQuery(getTeam);
    return (
        <ul className="team-list">
            {zespol.edges.map(({node}) => {
                return (
                    <li className="team-item" key={node.nazwa}>
                      <h2 className="team-item__name">{node.nazwa}</h2>
                      <div className="team-item__wrapper">
                          <p className="wrapper__description">{node.opis.opis}</p>
                          <div className="wrapper__img-box">
                            <Image className="img-box__img" fluid={node.zdjecie.fluid} alt={node.nazwa} />
                          </div>
                      </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default TeamList
