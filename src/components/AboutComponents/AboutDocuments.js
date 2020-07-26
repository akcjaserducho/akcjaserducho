import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const getDocs = graphql`
query{
    dokumenty:allContentfulDokumenty(sort:{fields:kolejnosc, order:ASC}){
      edges{
        node{
          nazwa
          link
          kolejnosc
        }
      }
    }
  }
`

const AboutDocuments = () => {
    const {dokumenty} = useStaticQuery(getDocs);
    return (
        <section className="section docs">
            <h2 className="section__title docs__title">Dokumenty</h2>
            <ul className="docs-list">
                {dokumenty.edges.map(({node}) => {
                    return (
                        <li className="docs-list__item" key={node.nazwa}>
                            <a href={node.link} className="docs-list__link btn">{node.nazwa}</a>
                        </li>
                    )
                })}
                
            </ul>
        </section>
    )
}

export default AboutDocuments
