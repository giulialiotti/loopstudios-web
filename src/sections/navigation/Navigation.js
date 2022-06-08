import React from "react";

// External Components
import { Button, Flex, Link, Box, Grid } from "theme-ui";

// Local Components
import { Logo } from "components";

// Data
import { useData } from "graphql/useData";

// Hooks
import { useScrollBlock } from "hooks";

export const Navigation = () => {
  const {
    navigation: { links },
  } = useData();
  // State for menu overlay
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Handle menu open/close
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  // Hook to disable and allow body scroll
  const [blockScroll, allowScroll] = useScrollBlock();

  React.useEffect(() => {
    isMenuOpen ? blockScroll() : allowScroll();
  }, [isMenuOpen, blockScroll, allowScroll]);

  return (
    // Markup
    <ContentWrapper>
      <LogoWrapper />
      <MenuButton handleClick={handleClick} />
      <DesktopLinks data={links} />
      {isMenuOpen && <MenuOverlay data={links} />}
    </ContentWrapper>
  );
};

// Elements

const ContentWrapper = ({ children }) => (
  <Flex
    as="nav"
    sx={{
      alignItems: "center",
      justifyContent: "space-between",
      position: "absolute",
      pt: ["10%", "10%", "5%", "5%"],
      px: ["5%", "6%", "9%", "12%"],
      width: "100%",
      zIndex: 8,
    }}
  >
    {children}
  </Flex>
);

const LogoWrapper = () => (
  <Logo
    sx={{
      width: ["45%", "40%", "14.5%", "17.5%"],
      zIndex: 10,
    }}
  />
);

const MenuButton = ({ handleClick }) => (
  <Button
    variant="clear"
    onClick={handleClick}
    sx={{
      display: ["block", "block", "none", "none"],
      position: "relative",
      width: ["1.5em", "2em", null, null],
      zIndex: 10,
    }}
  >
    <MenuLine isFirstLine />
    <MenuLine />
    <MenuLine />
  </Button>
);

const DesktopLinks = ({ data }) => (
  <Links data={data} sx={{ display: ["none", "none", "flex", "flex"] }} />
);

const MenuOverlay = ({ data }) => (
  <Grid
    sx={{
      alignContent: "center",
      bg: "black",
      height: "100%",
      overflow: "hidden",
      position: "fixed",
      px: ["5%", "6%", 0, 0],
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 9,
    }}
  >
    <Links data={data} />
  </Grid>
);

// Reusable Components

const Links = ({ data, sx }) => (
  <Flex
    sx={{
      alignItems: ["flex-start", "flex-start", "center", "center"],
      flexDirection: ["column", "column", "row", "row"],
      ...sx,
    }}
  >
    {data.map(({ name, to }, index) => (
      <Link
        key={name}
        variant="navigation"
        href={to}
        sx={{
          ml: index !== 0 ? [0, 0, "1.75em", "1.75em"] : 0,
          mt: index !== 0 ? ["1.75em", "1.75em", 0, 0] : 0,
        }}
      >
        {name}
      </Link>
    ))}
  </Flex>
);

const MenuLine = ({ sx, isFirstLine = false, ...props }) => (
  <Box
    as="span"
    sx={{
      bg: "white",
      display: "block",
      height: ["2px", "3px", null, null],
      mt: !isFirstLine ? ["5px", "8px", null, null] : 0,
      width: "100%",
      ...sx,
    }}
    {...props}
  />
);
