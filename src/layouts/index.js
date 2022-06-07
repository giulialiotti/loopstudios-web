import * as React from "react";

import { Box } from "theme-ui";

// Local Components
import { Navigation } from "sections";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Box as="main" sx={{ position: "relative" }}>
        {children}
      </Box>
    </>
  );
};
