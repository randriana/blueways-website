import React from 'react';
import './App.scss';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <main className="main">
            <Header/>
        </main>
    </div>
  );
}

export default App;
