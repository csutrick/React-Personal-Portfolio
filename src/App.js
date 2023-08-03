import React from 'react';
// Different Page content
import Navbar from './components/Navbar';
import Page1 from './components/Page1'; 
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

function App() {

  const [currentPage, setCurrentPage] = React.useState('page1');

  function handleNavClick(page) {
    setCurrentPage(page);
  }

  let content;
  if (currentPage === 'page1') {
      content = <Page1 />;
  } else if (currentPage === 'page2') {
      content = <Page2 />;
  } else if (currentPage === 'page3') {
      content = <Page3 />;
  } else if (currentPage === 'page4') {
      content = <Page4 />;
  }
  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      {content}
    </div>
  );
};

export default App;