import React from "react";
import { Container } from "@mui/material";
function About () {
    return(
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
        <p>About section</p>
        
    </Container>
    );
}

export default About;