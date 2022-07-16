import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function ImageList() {
  return (
    <Box
      display="flex"
      gap={6}
      style={{ paddingBottom: "1%", font: "Encode Sans" }}
    >
      <Box gridColumn="span 8">
        <Image src="/Group 475.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 307.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 300.png"
          alt="Lorem Ipsum"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 301.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 302.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 303.png"
          alt="Lorem Ipsum"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 304.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 305.png" height="248px" width="180px" />
      </Box>
      <Box gridColumn="span 8">
        <Image src="/Group 306.png" height="248px" width="180px" />
      </Box>
    </Box>
  );
}
