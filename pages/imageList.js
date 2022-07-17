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
        <Image
          src="/Group 475.png"
          alt="All bags"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 307.png"
          alt="Vanity pouch"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 300.png"
          alt="Tote Bag"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 301.png"
          alt="Duffle Bag"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 302.png"
          alt="Laptop Sleeve"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 303.png"
          alt="Messengers Bag"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 304.png"
          alt="Slings Bag"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 305.png"
          alt="HandBags"
          height="248px"
          width="180px"
        />
      </Box>
      <Box gridColumn="span 8">
        <Image
          src="/Group 306.png"
          alt="Buck Bag"
          height="248px"
          width="180px"
        />
      </Box>
    </Box>
  );
}
