import * as React from "react";

// Local Components
import { Hero } from "sections";

// Data
import { useData } from "../graphql/useData";

const IndexPage = () => {
  const { hero } = useData();

  return (
    <main>
      <Hero data={hero} />
    </main>
  );
};

export default IndexPage;
