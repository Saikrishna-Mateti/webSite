import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#171717",
        height: "100%",
        paddingTop: "20px",
      }}
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} sx={{ padding: "12px 24px" }}>
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "#a9a9b3",
                fontSize: "1.1rem",
                fontFamily: "monospace",
                width: "100%",
              }}
            >
              {item.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      component={"nav"}
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#171717",
        boxShadow: "none",
        borderTop: "1px solid #222",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "95%", md: "90%" },
          margin: "0 auto",
          padding: { xs: "8px 0", md: "12px 0" },
        }}
      >
        <div
          className="logo"
          style={{
            fontFamily: "monospace, monospace",
            fontSize: isMobile ? "0.9rem" : "1.127rem",
            fontWeight: "bold",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            className="logo_mark"
            style={{ marginRight: "8px", color: "#a9a9b3" }}
          >
            &gt;_
          </span>
            <Link to="/">
            <span
              className="logo_text"
              style={{
                color: "#a9a9b3",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isMobile ? "~/saikrishna" : "/home/saikrishnamateti"}
            </span>
          </Link>
          {!isMobile && (
            <span
              className="logo_blink"
              style={{
                display: "inline-block",
                marginLeft: "8px",
                width: "10px",
                height: "1rem",
                backgroundColor: "#00ee00",
                borderRadius: "1px",
              }}
            ></span>
          )}
        </div>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color: "#a9a9b3" }}
          >
            <Menu size={24} />
          </IconButton>
        ) : (
          <div
            className="nav-tools"
            style={{ display: "flex", alignItems: "center" }}
          >
            {navItems.map((item) => (
              <Paper
                key={item.name}
                component={Link}
                to={item.path}
                elevation={0}
                sx={{
                  margin: "0 8px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  color: "#a9a9b3",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item.name}
              </Paper>
            ))}
          </div>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "#171717",
            borderLeft: "1px solid #222",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#a9a9b3" }}>
            <X size={24} />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;