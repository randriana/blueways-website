import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <main className="main">
            <Header/>
            <About/>
        </main>
    </div>
  );
}

export default App;
