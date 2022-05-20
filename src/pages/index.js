import * as React from "react";

// Local Components
import { Hero, About, Creations } from "sections";

// Data
import { useData } from "../graphql/useData";

const IndexPage = () => {
  const { hero, about, creations } = useData();

  return (
    <main>
      <Hero data={hero} />
      <About data={about} />
      <Creations data={creations} />
    </main>
  );
};

export default IndexPage;
