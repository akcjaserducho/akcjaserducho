import React from "react"
import Layout from "../components/Layout"
import "../scss/404.scss"

const page404 = () => {
  return (
    <Layout>
      <div className="error-page">
        <p>Ups, nie ma takiej strony :(</p>
        <a href="/" className="btn">
          Wróć do strony głównej
        </a>
      </div>
    </Layout>
  )
}

export default page404
