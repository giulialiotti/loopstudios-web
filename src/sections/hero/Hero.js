import React from "react";

// External Components
import { Grid, Heading } from "theme-ui";

// Local Components
import { ImageWrapper } from "components/ImageWrapper";

export const Hero = ({
  data: {
    headline,
    image: { mobile, desktop, alt },
  },
}) => {
  return (
    // Markup
    <Grid as="header">
      <Headline data={headline} />
      <BackgroundImage img={mobile.src} alt={alt} />
      <BackgroundImage img={desktop.src} alt={alt} isMobile={false} />
    </Grid>
  );
};

// Elements

const Headline = ({ data }) => (
  <Heading
    as="h1"
    sx={{
      border: "2px solid white",
      gridColumn: 1,
      gridRow: 2,
      p: ["6% 6% 5%", "6% 6% 5%", "3% 3% 2%", "2%", "2% 2% 1.5%"],
      position: "relative",
      mt: [0, 0, 0, "7%"],
      ml: ["5%", "6%", "9%", "12%"],
      mr: ["5%", 0, 0, 0],
      variant: "styles.h1",
      width: [null, "68%", "47%", "44.5%"],
      zIndex: 1,
    }}
  >
    {data}
  </Heading>
);

const BackgroundImage = ({ img, alt, isMobile = true }) => (
  <ImageWrapper
    img={img}
    alt={alt}
    sx={{
      display: isMobile
        ? ["block", "block", "none", "none"]
        : ["none", "none", "block", "block"],
      gridColumn: 1,
      gridRow: "1/span 3",
      width: "100%",
      "& > div": {
        width: "100%",
      },
    }}
  />
);
