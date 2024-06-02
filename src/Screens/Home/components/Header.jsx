import React from "react";
import logo from "./../../../assets/logo.png";

function Header() {
  return (
    <div
      className="flex flex-row justify-between items-center
    shadow-lg p-4 border round-lg"
    >
      <button className="btn btn-primary btn-sm md:btn-md">+ New Idea</button>
      <h2 className="font-bold text-sm md:text-2xl">Top 30 Ideas</h2>
      <div className="flex gap-2 items-center">
        <img src={logo} className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          By
          <br />
          David Lee
        </h2>
      </div>
    </div>
  );
}

export default Header;
