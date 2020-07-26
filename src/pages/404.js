import React from "react";
import Layout from "../components/Layout";
import '../scss/404.scss';
import {Link} from 'gatsby';

const page404 = () => {
  return (
    <Layout>
        <div className="error-page">
          <p>Ups, nie ma takiej strony :(</p>
            <Link to="/" className="btn">Wróć do strony głównej</Link>
        </div>
    </Layout>
)
}

export default page404
