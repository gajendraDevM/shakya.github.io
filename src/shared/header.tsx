import React from 'react';

function Header() {
  return (
    <header className="text-brand py-10 flex justify-start" style={{ background: "#252525" }}>
      <div className="containers ">
        <h1 className="text-4xl font-semibold">Beautiful Title</h1>
        <p className="text-xl mt-2 text-gray-300 font-thin">Subtext for your beautiful title</p>
      </div>
    </header>
  );
}

export default Header;