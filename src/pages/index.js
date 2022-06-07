import * as React from "react";

// Local Components
import { Layout } from "../layouts/index";
import { Hero, About, Creations } from "sections";

// Data
import { useData } from "graphql/useData";

const IndexPage = () => {
  const { hero, about, creations } = useData();

  return (
    <Layout>
      <Hero data={hero} />
      <About data={about} />
      <Creations data={creations} />
    </Layout>
  );
};

export default IndexPage;
