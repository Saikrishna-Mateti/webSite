import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './pages/About';
import './App.css';
import './styles/navbar.css';
import './styles/Content.css';
import React from 'react';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function MainLayout(){
  return(
    <>
      <Content/>
      {/* <Footer/> */}
    </>
  )
}

function AppLayout() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/resume";

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;