// Imports
import { NavLink } from "react-router";

// My-Setup
const NavbarLinkMobile = ({ data }) => {
  return (
    <>
      <ul>
        {
          data?.map((value,index) => {
            const Icon = value.Icon;
            return (
              <li onClick={(e)=> e.stopPropagation()} key={index}>
              <NavLink to={value.path} className={({isActive}) => `${isActive ? `text-gray-700` : `text-gray-400`} flex items-center justify-between gap-2 text-xl p-2 px-4 font-medium hover:text-gray-500`}>
                {Icon && <Icon />}
                <span className={`block`}>{value.label}</span>
              </NavLink>
            </li>
            )
          })
        }
      </ul>
    </>
  )
}

// Export
export default NavbarLinkMobile;