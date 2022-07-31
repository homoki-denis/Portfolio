import { useState } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className="main-content">
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
