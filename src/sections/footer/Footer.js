import React from "react";

// External Components
import { Flex, Grid, Image, Link, Paragraph } from "theme-ui";

// Local Components
import { Logo } from "components";

// Data
import { useData } from "graphql/useData";

export const Footer = () => {
  const {
    navigation: { links },
    footer: { socials, copyright },
  } = useData();

  return (
    // Markup
    <ContentWrapper>
      <LogoWrapper />
      <Links data={links} />
      <SocialsWrapper data={socials} />
      <Copyright data={copyright} />
    </ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children }) => (
  <Grid
    as="footer"
    sx={{
      bg: "black",
      gap: 0,
      p: ["14% 5% 18%", "10% 6% 12%", "4% 9% 4%", "4% 12% 4%"],
    }}
  >
    {children}
  </Grid>
);

const LogoWrapper = () => (
  <Logo
    sx={{
      gridRow: 1,
      mx: ["auto", "auto", 0, 0],
      width: ["45%", "40%", "31%", "25%"],
    }}
  />
);

const Links = ({ data, sx }) => (
  <Flex
    sx={{
      alignSelf: ["start", "start", "end", "end"],
      alignItems: "center",
      flexDirection: ["column", "row", "row", "row"],
      justifyContent: ["center", "center", "flex-start", "flex-start"],
      gridRow: 2,
      mt: ["10%", "8%", 0, 0],
      ...sx,
    }}
  >
    {data.map(({ name, to }, index) => (
      <Link
        key={name}
        variant="footer"
        href={to}
        sx={{
          ml: index !== 0 ? [0, "1.75em", "1.75em", "1.75em"] : 0,
          mt: index !== 0 ? ["1.5em", 0, 0, 0] : 0,
        }}
      >
        {name}
      </Link>
    ))}
  </Flex>
);

const SocialsWrapper = ({ data }) => (
  <Flex
    sx={{
      alignItems: "center",
      gridRow: [3, 3, 1, 1],
      justifyContent: ["center", "center", "flex-end", "flex-end"],
      mt: ["18%", "10%", 0, 0],
    }}
  >
    {data.map((item) => (
      <SocialIcon key={item.name} {...item} />
    ))}
  </Flex>
);

const SocialIcon = ({ icon, name, href }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    sx={{ display: "flex", ml: ["1.25em", "1.25em", "1rem", "1rem"] }}
  >
    <Image src={icon.publicURL} alt={`${name} icon`} />
  </Link>
);

const Copyright = ({ data }) => (
  <Paragraph
    variant="styles.body"
    sx={{
      gridRow: [4, 4, 2, 2],
      justifySelf: ["center", "center", "end", "end"],
      mt: ["6%", "4%", "6%", "5%"],
    }}
  >
    {data}
  </Paragraph>
);
