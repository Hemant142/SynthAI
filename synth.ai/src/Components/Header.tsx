import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 py-4">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl font-semibold">Developer Interview Prep</h1>
        <p className="text-lg mt-2">Prepare for Your Dream Developer Job</p>
      </div>
    </header>
  );
};

export default Header;
