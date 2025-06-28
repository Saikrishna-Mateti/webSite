import {
  Container,
  Icon,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { Github, Linkedin, Mail, Dot } from "lucide-react";
import "../pages/StackLoop.jsx";
import StackLoop from "../pages/StackLoop.jsx";

function Content() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        testAlign: "center",
        height: "100vh",
        margin: "0 auto",
        color: "#a9a9b3",
      }}
    >
      <h1>
        {" "}
        Hi, I&apos;m Sai Krishna Mateti.
        <br /> Software Engineer
      </h1>

      <p style={{ textAlign: "center" }}>
        Relentless self-taught developer, passionate about crafting solutions,
        <br />
        and driven to grow in tech.
      </p>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: "-10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          href="https://github.com/Saikrishna-Mateti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="#a9a9b3" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/sai-krishna-mateti-940a7a23b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin color="#a9a9b3" />
        </IconButton>
        <IconButton
          href="mailto:saikrishna.mateti7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail color="#a9a9b3" />
        </IconButton>
      </Stack>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#1b1c1d",
            color: "#a9a9b3",
            border: "1px solid #232425",
            padding: "3px 10px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#2c2d2e",
              color: "#fff",
            },
          }}
          variant="outlined"
          size="large"
        >
          <a href="#contact">Hire Me!</a>
        </Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #178D00",
              padding: "1px 10px",
              borderRadius: "25px",
              color: "#a9a9b3",
              backgroundColor: "#E1F9DC",
            }}
          >
            <Dot color="#178D00" />
            <span style={{ color: "#178D00" }}>
              Available for collaborations
            </span>
          </div>
        </div>
      </div>
      <StackLoop />
    </Container>
  );
}

export default Content;
