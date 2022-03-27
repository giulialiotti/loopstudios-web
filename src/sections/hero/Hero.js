import React from "react";

// External Components
import { Heading, Paragraph } from "theme-ui";

export const Hero = ({ data: { headline } }) => {
  return (
    <div>
      <Heading as='h1' sx={{ variant: 'styles.h1' }}>{headline}</Heading>
      <Paragraph sx={{ variant: 'styles.body' }}>{headline}</Paragraph>
    </div>
  );
};
