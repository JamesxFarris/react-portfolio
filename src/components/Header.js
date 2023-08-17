import React from "react";

// Pass in props from App.js
function Header(props) {
  const { onHome, onAbout, onPortfolio, onContact, onResume } = props;
  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button onClick={onHome} className="navbar-brand"></button>
        <button onClick={onAbout} className="navbar-brand"></button>
        <button onClick={onPortfolio} className="navbar-brand"></button>
        <button onClick={onContact} className="navbar-brand"></button>
        <button onClick={onResume} className="navbar-brand"></button>
      </nav>
    </div>
  );
}

export default Header;
