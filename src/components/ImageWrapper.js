import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "theme-ui";

export const ImageWrapper = ({ className, img, alt, sx, imgStyle }) => {
  return (
    <Box
      className={`gatsby-image__wrapper ${className}`}
      sx={{ "& > div": { width: "100%" }, ...sx }}
    >
      <GatsbyImage
        image={getImage(img)}
        alt={alt}
        imgStyle={{ height: "100%", maxWidth: "100%", ...imgStyle }}
      />
    </Box>
  );
};
