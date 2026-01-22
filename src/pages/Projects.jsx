import React from "react";
import { Container, Tooltip, Box } from "@mui/material";
import { ArrowUpRight } from 'lucide-react';


function Projects() {
    return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: "100vh",
        color: "#a9a9b3",
        paddingTop: { xs: "20px", md: "20px" }, // reduced top padding
        paddingBottom: { xs: "80px", md: "70px" },
        // border: "1px solid red",
        marginLeft: '40px',
      }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h1 className="title"
          style={{ marginBottom: "72px",color: "#f9fafb" }}
        >
          PROJECTS
        </h1>

        {/* Project 1 */}
        <div style={{marginBottom: "72px"}}>
        <span
          style={{
            position: "absolute",
            left: "20px",      
            top: "210px",       
            fontWeight: 900,    
            color: "#fff",      
            opacity: 0.2,
            fontSize: "3rem",
          }}
        >
          00
        </span>
          <h2 style={{marginBottom: "8px", marginTop: "32px", fontWeight: "bold", fontSize: "2rem", color: "#f9fafb"}}>
            Real-Time Vehicle & Person Detection with YOLOv11 Segmentation
            <Tooltip title="GitHub Repository link">
            <a href="https://github.com/Saikrishna-Mateti/Yolov11_Object_detection" target="_blank" rel="noopener noreferrer" style={{color: "#646cff", marginLeft: "8px"}}>
              <ArrowUpRight size={36} />
            </a> 
            </Tooltip>         
          </h2>
          <ul>
            <li>Developed YOLOv11 pipeline with 91.2% mAP@0.5 and 78.9% IoU for real-time traffic segmentation.</li>
            <li>Detected 8,000+ objects at 30 FPS in 720p video using PyTorch and OpenCV.</li>
            <li>Boosted post-processing speed by 20% using Supervision for segmentation overlays.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div style={{marginBottom: "52px"}}>
        <span
          style={{
            position: "absolute",
            left: "20px",      
            top: "510px",       
            fontWeight: 900,    
            color: "#fff",      
            opacity: 0.2,
            fontSize: "3rem",
          }}
        >
          01
        </span> 
          <h2 style={{marginBottom: "8px", marginTop: "32px", fontWeight: "bold", fontSize: "2rem", color: "#f9fafb"}}>
            Analyzing Expenditures for Insurance Company Customers
            <Tooltip title="GitHub Repository link">
            <a href="https://github.com/Saikrishna-Mateti/EE590_smateti" target="_blank" rel="noopener noreferrer" style={{color: "#646cff", marginLeft: "8px"}}>
              <ArrowUpRight size={36} />
            </a>
            </Tooltip>
          </h2>
          <span style={{fontStyle: "italic", color: "#a9a9b3"}}>Jan. 25 – April. 25</span>
          <ul>
            <li>Analyzed a dataset of 1,300+ insurance customers and built a linear regression model to predict medical expenses with a model accuracy of 92%.</li>
            <li>Implemented gradient descent from scratch to optimize a regression model, improving training efficiency and accuracy.</li>
            <li>Forecasted future insurance costs using trained model on test data, supporting potential cost planning improvements of up to 25% for underwriting processes.</li>
          </ul>
        </div>
      </div>
    </Container>
    )
}

export default Projects;