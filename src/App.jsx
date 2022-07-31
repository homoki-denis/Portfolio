import { useState } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SecondSideBar from "./components/SecondSideBar";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="main-content">
        <Sidebar />
        <SecondSideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
