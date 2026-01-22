import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import resumePdf from "/Sai_Krishna_Resume.pdf";

function Resume() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        color: "#a9a9b3",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
        >
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            justifyContent: "flex-start",
            position: "absolute",
            left: "50px",
            top: "35px",
            backgroundColor: "#646cff",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#535bf2",
            },
          }}
        >
          Home
        </Button>
      <h1 style={{margin: "2px"}}>Resume</h1>
      </Box>
      <div
        style={{
          width: "50vw",
          height: "100vh",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          background: "#23232a",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <a
          href={resumePdf}
          download
          style={{
            marginBottom: "20px",
            color: "#fff",
            background: "#646cff",
            padding: "0.5em 1.2em",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontFamily: "inherit",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#535bf2")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#646cff")}
        >
          Download PDF
        </a>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={resumePdf} />
        </Worker>
      </div>
    </Container>
  );
}

export default Resume;
