import { useState } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SecondSideBar from "./components/SecondSideBar";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <TopNav />

      <div className="content">
        <Sidebar />
        <SecondSideBar />
        <div className="main-content">
          <Navbar />
          <div>
            <h1>Home Main Content</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
