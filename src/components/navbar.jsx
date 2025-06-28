import React from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  Box,
  Container,
  Typography,
  keyframes,
} from "@mui/material";

import { Link} from "react-router-dom";

const navItems = [
  { name: "About", path: "/about"},
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];


function NavBar() {
  return (
      <AppBar
        component={'nav'}
        position="fixed"
        sx={{ backgroundColor: "#1b1c1d", boxShadow: "none"}}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "840px",
            margin: "0 auto",
          }}
        >
          <div
            className="logo"
            style={{ fontFamily: 'monospace, monospace', fontSize: "1.127rem", fontWeight: "bold", color: "#fff" }}
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
              style={{ color: "#a9a9b3", cursor: "pointer", fontWeight: "bold"}}
            >
              /home/saikrishnamateti
            </span>
            </Link>
            <span
              className="logo_blink"
              style={{
                display: "inline-block",
                marginLeft: "8px",
                width: "10px",
                height: '1rem',
                backgroundColor: "#00ee00",
                borderRadius: "1px", 
              }}
              >
            </span>
          </div>
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
                  backgroundColor: "#1b1c1d",
                  color: "#a9a9b3",
                  "&:hover": {
                    textDecoration: "underline"
                  }
                }}
              >
                 {item.name}
              </Paper>
            ))}
          </div>
        </Toolbar>
      </AppBar>
  );
}
export default NavBar;
