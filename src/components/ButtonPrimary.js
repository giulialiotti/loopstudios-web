import React from "react";

import { Button } from "theme-ui";

export const ButtonPrimary = ({ children, sx, ...props }) => {
  return (
    <Button variant="primary" sx={sx} {...props}>
      {children}
    </Button>
  );
};
