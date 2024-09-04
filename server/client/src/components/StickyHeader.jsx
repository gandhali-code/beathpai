import React from "react";
import './StickyHeader.css'; // Ensure this file exists and is correctly linked
import umdLogo from '/umdlogo.png'; // Adjust the path as necessary

function StickyHeader() {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <img src={umdLogo} alt="University of Maryland Logo" className="umd-logo" />
        <h2>
            University of Maryland
        </h2>
      </div>
    </header>
  );
}

export default StickyHeader;
