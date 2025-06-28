import React from "react";
import { Container, Box, Divider } from "@mui/material";

function About() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        testAlign: "left",
        height: "auto",
        margin: "0 auto",
        color: "#a9a9b3",
        width: "840px",
        marginTop: 12,
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "20px",
          backgroundColor: "#1b1c1d",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          color: "#a9a9b3",
          marginBottom: "20px",
        }}
      >
        <h2>About</h2>
        <p>
          Hey there!👋 <br />
          I’m Sai Krishna Mateti — a recent Electrical and Computer Engineering
          graduate🎓 from UAB, proud to finish with a 3.91 GPA. I'm currently
          working as a Software Engineer Intern at BearCreek AI, where I build
          clean, responsive frontend components that bring ideas to life, and
          develop new features in LLm agents to provide the best experience for
          users.
        </p>

        <p>
          Over the past few years, I’ve explored a range of topics, from
          building LLM agents and crafting engaging UIs to delving into data
          science—cleaning raw data, performing analysis, training machine
          learning models, and even building neural networks from scratch.
        </p>

        <p>
          {" "}
          Now, I’m actively looking for full-time opportunities where I can
          contribute to meaningful projects in AI, software engineering, or data
          science. I’m passionate about building products that solve real
          problems—and learning something new every step of the way.
        </p>

        <p>
          {" "}
          When I’m not coding, you’ll probably find me on a badminton court with
          friends (great way to unwind!) or doing yoga to stay balanced and
          energized.
        </p>

        <p>Let’s connect and build something great!</p>

        <Divider color={"#a9a9b3"} width={"inheret"}></Divider>
        <h2>Experience</h2>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
            border: "1px solid #a9a9b3",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
        <div style={{fontWeight:'bold'}}>BearCreek AI</div>
        <div class="location">Birmingham, US</div>
        <div class="role">Frontend Developer (Internship)</div>
        <div class="duration">Oct 2024 - Currently Working</div>
        <ul class="details">
          <li>
            Developed and deployed a real-time AI chat interface used by{" "}
            <strong>1,500+</strong> users across educational institutions.
          </li>
          <li>
            Integrated LLM agents (OpenAI o1, DeepSeek r1) with LangChain to
            support Responsive AI interactions and multi-model compatibility,
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
            border: "1px solid #a9a9b3",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
        <div style={{fontWeight:'bold'}}>EquipSense</div>
        <div class="location">Birmingham, US</div>
        <div class="role">Software Engineer Intern (Internship)</div>
        <div class="duration">July 2024 - Sep 2024</div>
        <ul class="details">
          <li>
            Built a responsive cloud dashboard for real-time asset tracking used
            by 3 pilot clients in logistics.
          </li>
          <li>
            Integrated GPS tracking with IoT data to improve visibility across{" "}
            <strong>100+</strong> deployed assets.
          </li>
        </ul>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
            border: "1px solid #a9a9b3",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
        <div style={{fontWeight:'bold'}}>Infosys Technologies Limited</div>
        <div class="location">Hyderabad, India</div>
        <div class="role">Software Engineer (Frontend) - Full-time</div>
        <div class="duration">Feb 2021 - July 2023</div>
        <ul class="details">
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
        </Box>
      </Box>
    </Container>
  );
}

export default About;
