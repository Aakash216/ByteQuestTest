import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color: "white",
  padding: "0px",
  textAlign: "center",
  marginLeft: "31%",
  marginTop: "20px",
  fontSize: "20px",
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 75,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box style={{ alignContent: "center" }}>
      <StyledToolbar>
        <Typography
          variant="h8"
          noWrap
          component="div"
          sx={{ flexGrow: 0.06, alignSelf: "flex-end" }}
        >
          Bags
        </Typography>
        <Typography
          variant="h8"
          noWrap
          component="div"
          sx={{ flexGrow: 0.06, alignSelf: "flex-end" }}
        >
          Travel
        </Typography>
        <Typography
          variant="h8"
          noWrap
          component="div"
          sx={{ flexGrow: 0.06, alignSelf: "flex-end" }}
        >
          Accesories
        </Typography>
        <Typography
          variant="h8"
          noWrap
          component="div"
          sx={{ flexGrow: 0.06, alignSelf: "flex-end" }}
        >
          Gifting
        </Typography>
        <Typography
          variant="h8"
          noWrap
          component="div"
          sx={{ flexGrow: 0.06, alignSelf: "flex-end" }}
        >
          Jewelery
        </Typography>
      </StyledToolbar>
    </Box>
  );
}
