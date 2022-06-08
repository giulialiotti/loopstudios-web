import React from "react";

// External Components
import { Grid, Heading, Box } from "theme-ui";

// Local Components
import { ImageWrapper, ButtonPrimary } from "components";

export const Creations = ({ data: { headline, button, projects } }) => {
  return (
    // Markup
    <GridWrapper>
      <Headline headline={headline} />
      {projects.map((project, index) => (
        <Project key={project.title} index={index} {...project} />
      ))}
      <Button text={button} />
    </GridWrapper>
  );
};

// Elements

const GridWrapper = ({ children }) => (
  <Grid
    id="creation"
    as="section"
    sx={{
      gridGap: 0,
      gridTemplateColumns: ["1fr", "1fr", "repeat(3, 32%)", "repeat(4, 23%)"],
      justifyContent: "space-between",
      px: ["5%", "6%", "9%", "12%"],
      "& > .creations__project:nth-of-type(n+5)": {
        mt: [null, null, null, "10%"],
      },
    }}
  >
    {children}
  </Grid>
);

const Headline = ({ headline }) => (
  <Heading
    as="h2"
    sx={{
      alignSelf: "center",
      gridColumn: [1, 1, "1/span 2", "1/span 2"],
      gridRow: 1,
      variant: "styles.h2",
    }}
  >
    {headline}
  </Heading>
);

const Project = ({ title, image: { mobile, desktop, alt }, index }) => (
  <Grid
    className="creations__project"
    sx={{
      gridGap: 0,
      mt:
        index === 0 ? ["15%", "10%", "10%", "30%"] : ["8%", "5%", "10%", "30%"],
    }}
  >
    <ProjectTitle title={title} />
    <ProjectImage
      className="project__mobile-image"
      src={mobile.src}
      alt={alt}
    />
    <ProjectImage
      className="project__desktop-image"
      isMobile={false}
      src={desktop.src}
      alt={alt}
    />
  </Grid>
);

const ProjectTitle = ({ title }) => (
  <Heading
    as="h3"
    className="project__title"
    dangerouslySetInnerHTML={{
      __html: title,
    }}
    sx={{
      alignSelf: "end",
      gridArea: "1/1",
      p: ["0 0 6% 6%", "0 0 6% 6%", "0 0 6% 6%", "0 0 8% 8%"],
      position: "relative",
      variant: "styles.h3",
      zIndex: 1,
    }}
  />
);

const ProjectImage = ({ className, src, alt, isMobile = true }) => (
  <Box
    sx={{
      display: isMobile
        ? ["block", "block", "none", "none"]
        : ["none", "none", "block", "block"],
      gridArea: "1/1",
      position: "relative",
    }}
  >
    <ImageWrapper className={className} img={src} alt={alt} />
    <Gradient />
  </Box>
);

const Gradient = () => (
  <Box
    sx={{
      background: [
        "linear-gradient(100deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
        "linear-gradient(100deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
        "linear-gradient(0deg, rgba(0,0,0,0.7413559173669468) 0%, rgba(0,0,0,0) 100%)",
        "linear-gradient(0deg, rgba(0,0,0,0.7413559173669468) 0%, rgba(0,0,0,0) 100%)",
      ],
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    }}
  />
);

const Button = ({ text }) => (
  <ButtonPrimary
    sx={{
      alignSelf: "center",
      gridColumn: [null, null, "2/span 2", "3/span 2"],
      gridRow: [null, null, 1, 1],
      justifySelf: ["center", "center", "end", "end"],
      mt: ["10%", "10%", 0, 0],
    }}
  >
    {text}
  </ButtonPrimary>
);
