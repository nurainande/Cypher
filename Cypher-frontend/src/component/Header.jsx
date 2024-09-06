import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import {Link} from "react-router-dom"
import SigninAndupToggle from "./RegAndLoginToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegAndLoginToggle, setIsRegAndLoginToggle] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <header className="bg-white shadow-md py-4 px-9 md:px-24 flex items-center justify-between fixed w-[100%]">
      <h3 className="logo text-2xl font-bold text-gray-800">
        <Link to="/">cypher</Link>
      </h3>

      <div className="search flex items-center border border-gray-300 rounded-md px-3 py-1 w-1/5 max-w-md">
        <CiSearch size="24" className="text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none px-2 py-1 full"
        />
      </div>

      {/* Menu Toggle Button */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-900"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX size="24" /> : <HiMenu size="24" />}
      </button>

      {/* Collapsible Navigation */}
      <nav
        className={`fixed inset-0 bg-white md:static md:flex md:gap-4 md:items-center md:justify-center transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 duration-300 ease-in-out z-50`}
      >
        <div className="inner md:hidden flex items-center justify-between p-4">
          <h3 className="text-2xl font-bold text-gray-800">cypher</h3>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <HiX size="24" />
          </button>
        </div>
        <ul className="flex flex-col md:flex-row gap-4 text-gray-700 p-4 md:p-0">
          <li>
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <Link to="/product" className="hover:text-gray-900">
              Products
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-2">
        {/* <CiHeart
          size="24"
          className="text-gray-600 cursor-pointer hover:text-gray-900"
        /> */}
        <Link to='shopping-cart'>
          <FiShoppingCart
            size="24"
            className="text-gray-600 cursor-pointer hover:text-gray-900"
          />
        </Link>
        <CiUser
          size="24"
          className="text-gray-600 cursor-pointer hover:text-gray-900"
          onClick={()=>setIsRegAndLoginToggle((isRegAndLoginToggle)=>!isRegAndLoginToggle)}
        />
      </div>
      {isRegAndLoginToggle && <SigninAndupToggle/>}
    </header>
  );
};

export default Header;
