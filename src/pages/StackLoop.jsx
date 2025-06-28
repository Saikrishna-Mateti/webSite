import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Grid } from "@mui/material";

const techStack = [
    { name: "React", src: "/tech/react.svg" },
    { name: "Tailwind", src: "/tech/tailwind.svg" },
    { name: "Typescript", src: "/tech/typescript.svg" },
    { name: "Javascript ", src: "/tech/javascript.svg" },
    { name: "Firebase", src: "/tech/firebase.svg" },
    { name: "Mongodb", src: "/tech/mongodb.svg" },
  ];

  const StackLoop = () => {
    return (
        <Box sx={{ width: "50%", marginTop: "30px" }}>
        <Marquee delay={5} speed={30} gradient={true} gradientColor="#232425" gradientWidth={50}>
          <Grid container spacing={2} sx={{ padding: "10px" }}>
            {techStack.map((tech, index) => (
              <Grid item key={index}>
                <Box
                  component="img"
                  src={tech.src}
                  alt={tech.name}
                  sx={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Marquee>
      </Box>
    );
  };
  
  export default StackLoop;