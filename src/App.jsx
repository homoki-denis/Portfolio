import { useState } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SecondSideBar from "./components/SecondSideBar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Github from "./pages/Github";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />

        <div className="content">
          <Sidebar />
          <SecondSideBar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="articles" element={<Articles />} />
              <Route path="projects" element={<Projects />} />
              <Route path="github" element={<Github />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
