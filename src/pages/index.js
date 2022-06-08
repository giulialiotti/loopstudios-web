import * as React from "react";

// Local Components
import { Layout } from "../layouts/index";
import { Hero, About, Creations } from "sections";
import { Spacer } from "components";

// Data
import { useData } from "graphql/useData";

const IndexPage = () => {
  const { hero, about, creations } = useData();

  return (
    <Layout>
      <Hero data={hero} />
      <Spacer height={["6.25em", "12.5em", "8.75em", "11.25em"]} />
      <About data={about} />
      <Spacer height={["6.875em", "15em", "10em", "13.75em"]} />
      <Creations data={creations} />
      <Spacer height={["6.25em", "12.5em", "8.75em", "11.25em"]} />
    </Layout>
  );
};

export default IndexPage;
