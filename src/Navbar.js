import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      background: '#00BFFF',
      display: 'flex',
      justifyContent: 'space-between' 
    }}>
      <span style={{padding: '25px', fontWeight: 'bold', fontSize: '32px', color: 'white'}}>React Portfolio</span>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        color: 'white' 
      }}>
        <li style={{padding: '30px', fontWeight: 'bold', fontSize: '22px'}}>About Me</li>
        <li style={{padding: '30px', fontWeight: 'bold', fontSize: '22px'}}>Portfolio</li>
        <li style={{padding: '30px', fontWeight: 'bold', fontSize: '22px'}}>Contact</li>
        <li style={{padding: '30px', paddingRight: '75px', fontWeight: 'bold', fontSize: '22px'}}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navbar;