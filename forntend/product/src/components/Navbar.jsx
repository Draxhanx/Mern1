import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";

function Navbar() {
  return (
    <div className="w-full p-5 bg-red-500 flex items-center justify-between">
      <Link to="/">logo</Link>

      <div className="right px-10 flex items-center justify-between gap-10">
        <h1 className="text-2xl ml-10">
          <CiSun />
        </h1>
        <Link to="/create">
          <FaPlus />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
