import * as React from "react";

// Local Components
import { Hero, About } from "sections";

// Data
import { useData } from "../graphql/useData";

const IndexPage = () => {
  const { hero, about } = useData();

  return (
    <main>
      <Hero data={hero} />
      <About data={about} />
    </main>
  );
};

export default IndexPage;
