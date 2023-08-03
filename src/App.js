import React from 'react';
// Different Page content
import Navbar from './components/Navbar';
import About from './components/About'; 
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [currentPage, setCurrentPage] = React.useState('about');

  function handleNavClick(page) {
    setCurrentPage(page);
  }

  let content;
  if (currentPage === 'about') {
      content = <About />;
  } else if (currentPage === 'portfolio') {
      content = <Portfolio />;
  } else if (currentPage === 'contact') {
      content = <Contact />;
  } else if (currentPage === 'resume') {
      content = <Resume />;
  }
  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      {content}
    </div>
  );
};

export default App;