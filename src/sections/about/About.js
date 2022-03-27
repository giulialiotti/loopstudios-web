import React from "react";

// External Components
import { Grid, Heading, Box, Paragraph } from "theme-ui";

// Local Components
import { ImageWrapper } from "components";

export const About = ({ data: { headline, description, image } }) => {
  return (
    <Grid
      id="about"
      sx={{
        gridTemplateColumns: [null, null, "repeat(24, 1fr)", "repeat(24, 1fr)"],
        py: ["26.7%", "26.7%", "20%", "13.9%"],
        px: ["5%", "6%", "9%", "12%"],
      }}
    >
      <ImageWrapper
        img={image.src}
        alt={image.alt}
        sx={{
          gridColumn: [null, null, "1/span 16", "1/span 16"],
          gridRow: 1,
        }}
      />
      <TextBlock headline={headline} description={description} />
    </Grid>
  );
};

const TextBlock = ({ headline, description }) => (
  <Box
    className="about__text-block"
    sx={{
      alignSelf: ["start", "start", "end", "end"],
      bg: "white",
      gridColumn: [null, null, "13/25", "13/25"],
      gridRow: [2, 2, 1, 1],
      mx: "auto",
      p: ["15% 0 0 0", "10% 0 0 0", "13% 0 0 13%", "17% 0 0 17%"],
      position: "relative",
      width: [null, "80%", "100%", "100%"],
      zIndex: 1,
    }}
  >
    <Heading as="h2" sx={{ variant: "styles.h2" }}>
      {headline}
    </Heading>
    <Paragraph
      sx={{
        mt: ["5%", "4%", "4%", "4%"],
        px: ["5%", "6%", 0, 0],
        variant: "styles.body",
      }}
    >
      {description}
    </Paragraph>
  </Box>
);
