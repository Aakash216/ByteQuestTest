import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      width: "10px",
    },
  },
});
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <LocalMallRoundedIcon />
            </Badge>
          </IconButton>
          <p>Mail</p>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <SearchRoundedIcon />
            </Badge>
          </IconButton>
          <p>search</p>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <AccountCircle />
            </Badge>
          </IconButton>
          <p>Account</p>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <Badge color="error">
              <BookmarkBorderRoundedIcon />
            </Badge>
          </IconButton>
          <p>BookMark</p>
        </MenuItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ font: "Comme" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              TANN TRIM
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <LocalMallRoundedIcon />
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <SearchRoundedIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <BookmarkBorderRoundedIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
