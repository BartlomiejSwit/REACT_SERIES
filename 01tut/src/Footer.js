import React from 'react';

const Footer = ({length}) => {
    
  return (
    <footer>
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
      <p>{length} Lista {length === 1 ? "przedmiot" : "przedmiotów"}</p>
    </footer>
  );
}

export default Footer;
