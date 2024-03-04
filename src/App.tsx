import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className='min-h-screen w-screen overflow-hidden hidescrollbar'>
      <Navbar />
      <Intro />
      <About/>
      <Skills/>
      <Projects/>

    </div>
  );
}

export default App;
