import React from "react";

// External Components
import { Link, Image } from "theme-ui";

// Assets
import logo from "assets/svg/logo.svg";

export const Logo = ({ sx, ...props }) => (
  <Link
    href="/"
    sx={{
      display: "flex",
      position: "relative",
      ...sx,
    }}
    {...props}
  >
    <Image src={logo} alt="Loop Studios logo" sx={{ width: "100%" }} />
  </Link>
);
