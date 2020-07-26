import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TeamList from "../components/TeamList"
import "../scss/team.scss"

const team = () => {
  return (
    <Layout>
      <SEO
        title="Zespół"
        description="Ekipa Akcji Serducho. Poznaj naszą kadrę i najlepszych wolontariuszy na świecie."
      />
      <main className="page team">
        <header className="page__header team-header">
          <h1 className="header__title team-header__title">Nasz zespół</h1>
        </header>
        <TeamList />
      </main>
    </Layout>
  )
}

export default team
