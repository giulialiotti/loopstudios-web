import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Box } from "theme-ui";

export const ImageWrapper = ({ img, alt, sx, imgStyle }) => {
  return (
    <Box className="gatsby-image__wrapper" sx={{ ...sx }}>
      <GatsbyImage
        image={getImage(img)}
        alt={alt}
        imgStyle={{ height: "100%", maxWidth: "100%", ...imgStyle }}
      />
    </Box>
  );
};
