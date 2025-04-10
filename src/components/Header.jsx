import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiBarChart2,
  FiMenu,
  FiChevronDown,
  FiX
} from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";

const countries = [
  { code: "us", name: "USA" },
  { code: "ca", name: "Canada" },
  { code: "gb", name: "UK" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "es", name: "Spain" },
  { code: "it", name: "Italy" },
  { code: "au", name: "Australia" },
];

const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "Products",
    link: "/products",
    submenu: [
      { name: "Electronics", link: "/products/electronics" },
      { name: "Clothing", link: "/products/clothing" },
      { name: "Books", link: "/products/books" },
    ],
  },
  { name: "Brands", link: "/brands" },
  { name: "Login", link: "/login" },
];

const Header = ({ onFilterClick, isMenuOpen, onOpenMenuClick }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop  */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600 me-10">Shopping</h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.link}
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                    {item.submenu && <FiChevronDown className="ml-1" />}
                  </a>

                  {item.submenu && hoveredItem == item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="lg:flex md:hidden sm:hidden flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country.code)}
                  className={`p-1 rounded-full ${
                    selectedCountry === country.code
                      ? "ring-2 ring-indigo-500"
                      : ""
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/16x12/${country.code}.png`}
                    alt={country.name}
                    className="w-4 h-3"
                  />
                </button>
              ))}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiHeart className="text-gray-600" />
            </button>
            <button
              onClick={onFilterClick}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              <IoFilterSharp className="text-gray-600" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={onOpenMenuClick}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <FiX className="text-gray-600" /> : <FiMenu className="text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 border-b">
            <nav className="flex flex-col space-y-4 ">
              {menuItems.map((item) => (
                <div key={item.name} className="relative mb-3"   
                 onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                >
  
                   <a
                    href={item.link}
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    {item.name}
                    {item.submenu && <FiChevronDown className="ml-1" />}
                  </a>

                  {item.submenu && hoveredItem == item.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className=" md:flex items-center space-x-2 mt-3 text-center">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country.code)}
                  className={`p-1 rounded-full ${
                    selectedCountry === country.code
                      ? "ring-2 ring-indigo-500"
                      : ""
                  }`}
                >
                  <img
                    src={`https://flagcdn.com/16x12/${country.code}.png`}
                    alt={country.name}
                    loading="lazy"
                    className="w-4 h-3"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Search */}
        <div className="lg:hidden md:flex flex-1 py-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
