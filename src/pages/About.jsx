import React from "react";
import { Container, Box } from "@mui/material";

function About() {
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
        marginLeft: '40px',
      }}
    >
      <Box 
        sx={{
          // width: "100%",
          // height: "100%", 
          // overflowY: "auto",
          // pr: 4,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1a1a1a",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#646cff",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#535bf2",
          },
        }}>
        <h1 className="title">
          ABOUT
        </h1>
        <div 
          style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            maxWidth: '800px',
            marginBottom: '40px',
          }}>
          <p className="subtitle">
            Hey there! 👋 <br />
            I'm Sai Krishna Mateti — a recent Electrical and Computer Engineering
            graduate 🎓 from UAB, proud to finish with a 3.91 GPA. I'm currently
            working as a Software Engineer Intern at BearCreek AI, where I build
            clean, responsive frontend components that bring ideas to life, and
            develop new features in LLM agents to provide the best experience for
            users.
          </p>

          <p className="subtitle">
            Over the past few years, I've explored a range of topics, from
            building LLM agents and crafting engaging UIs to delving into data
            science—cleaning raw data, performing analysis, training machine
            learning models, and even building neural networks from scratch.
          </p>

          <p className="subtitle">
            Now, I'm actively looking for full-time opportunities where I can
            contribute to meaningful projects in AI, software engineering, or data
            science. I'm passionate about building products that solve real
            problems—and learning something new every step of the way.
          </p>

          <p className="subtitle">
            When I'm not coding, you'll probably find me on a badminton court with
            friends (great way to unwind!) or doing yoga to stay balanced and
            energized.
          </p>

          <p className="subtitle">Let's connect and build something great!</p>
        </div>

        {/* <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#f9fafb',
          marginTop: '40px',
          marginBottom: '24px',
        }}>
          EXPERIENCE
        </h2> */}

        {/* BearCreek AI */}
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "32px",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#1a1a1a",
            maxWidth: '800px',
            transition: "border-color 0.3s",
            "&:hover": {
              borderColor: "#646cff",
            },
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <div style={{fontWeight:'bold', fontSize: '1.25rem', color: '#f9fafb'}}>
                Software Engineer
              </div>
              <div style={{color: '#646cff', marginTop: '4px'}}>BearCreek AI</div>
              <div style={{fontSize: '0.9rem', marginTop: '4px'}}>Birmingham, US</div>
            </div>
            <div style={{
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#a9a9b3',
            }}>
              Oct 2024 - Present
            </div>
          </div>
          <ul style={{margin: '12px 0', paddingLeft: '1.5rem'}}>
            <li>
              Developed and deployed a real-time AI chat interface used by{" "}
              <strong>1,500+</strong> users across educational institutions.
            </li>
            <li>
              Integrated LLM agents (OpenAI o1, DeepSeek r1) with LangChain to
              support responsive AI interactions and multi-model compatibility,
              reducing user query latency by <strong>~30%</strong>.
            </li>
            <li>
              Optimized full-stack architecture and API request handling to scale
              for <strong>1,000+</strong> concurrent sessions, maintaining{" "}
              <strong>99.9%</strong> uptime and fast response times.
            </li>
            <li>
              Collaborated with a 4-member agile team using GitHub version
              control, completing sprint cycles with an average code merge time of
              under <strong>24</strong> hours.
            </li>
            <li>
              Delivered production-ready features with CI/CD best practices,
              contributing to system-wide <strong>~50%</strong> reduction in bug
              reports over three release cycles.
            </li>
          </ul>
        </Box> */}

        {/* EquipSense */}
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "32px",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#1a1a1a",
            maxWidth: '800px',
            transition: "border-color 0.3s",
            "&:hover": {
              borderColor: "#646cff",
            },
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <div style={{fontWeight:'bold', fontSize: '1.25rem', color: '#f9fafb'}}>
                Software Engineer Intern
              </div>
              <div style={{color: '#646cff', marginTop: '4px'}}>BearCreek AI</div>
              <div style={{fontSize: '0.9rem', marginTop: '4px'}}>Birmingham, US</div>
            </div>
            <div style={{
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#a9a9b3',
            }}>
              July 2024 - Sep 2024
            </div>
          </div>
          <ul style={{margin: '12px 0', paddingLeft: '1.5rem'}}>
            <li>
              Built a responsive cloud dashboard for real-time asset tracking used
              by 3 pilot clients in logistics.
            </li>
            <li>
              Integrated GPS tracking with IoT data to improve visibility across{" "}
              <strong>100+</strong> deployed assets.
            </li>
          </ul>
        </Box> */}

        {/* Infosys */}
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "80px",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #333",
            backgroundColor: "#1a1a1a",
            maxWidth: '800px',
            transition: "border-color 0.3s",
            "&:hover": {
              borderColor: "#646cff",
            },
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div>
              <div style={{fontWeight:'bold', fontSize: '1.25rem', color: '#f9fafb'}}>
                Software Engineer (Frontend)
              </div>
              <div style={{color: '#646cff', marginTop: '4px'}}>Infosys Technologies Limited</div>
              <div style={{fontSize: '0.9rem', marginTop: '4px'}}>Hyderabad, India</div>
            </div>
            <div style={{
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: '#a9a9b3',
            }}>
              Feb 2021 - July 2023
            </div>
          </div>
          <ul style={{margin: '12px 0', paddingLeft: '1.5rem'}}>
            <li>
              Developed and maintained over <strong>50</strong> responsive user
              interfaces using React.js, improving user engagement by{" "}
              <strong>30%</strong> through enhanced performance and dynamic
              interactions.
            </li>
            <li>
              Successfully integrated RESTful APIs, connecting frontend with
              backend services to ensure seamless data flow.
            </li>
            <li>
              Collaborated with cross-functional teams, including UX/UI designers
              and backend developers, to launch <strong>10+</strong> web
              applications, resulting in a <strong>25%</strong> increase in
              positive user feedback and design experience.
            </li>
          </ul>
        </Box> */}
      </Box>
    </Container>
  );
}

export default About;