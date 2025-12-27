import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Description from './components/Description';
import Content from './components/Content';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="min-h-screen w-full">
      
      <Navbar />
      <About/>
      <Description/>
      <Content/>
      <Contact/>

    </div>
  );
};

export default App;