// Imports
import { NavLink } from "react-router";

// My-Setup
const NavbarLink = ({ data }) => {
  return (
    <ul className={`flex gap-4`}>
      {data?.map((value, index) => (
        <li key={index}>
          <NavLink className={({ isActive }) =>
              `${isActive ? `text-gray-700 hover:text-gray-700 after:scale-95 after:border-indigo-500` : `text-gray-300 hover:text-gray-500 after:border-indigo-200`} relative after:w-full font-medium  after:absolute after:left-0  after:rounded-full after:right-0 hover:after:scale-95 after:duration-200 after:-bottom-3 after:scale-0 after:border-b-4`
            }to={value.path}>
            <span className={`block text-lg`}>{value.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// Export
export default NavbarLink;
