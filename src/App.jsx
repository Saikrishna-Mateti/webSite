import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './pages/About';
import './App.css';
import './styles/navbar.css';
import './styles/Content.css';
import React from 'react';


function MainLayout(){
  return(
    <>
    <NavBar/>
    <Content/>
    <Footer/>
    </>
  )
}


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
