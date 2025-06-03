import { Container, Icon, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

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
      <h1>Sai Krishna Mateti.</h1>
      <p>Frontend Engineer</p>
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
      </Container>
  );
}

export default Content;
