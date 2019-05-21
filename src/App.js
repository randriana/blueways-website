import React from 'react';
import './App.scss';

import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Project from "./components/project/project";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <main className="main">
            <Header/>
            <About/>
            <Project/>
        </main>
    </div>
  );
}

export default App;
