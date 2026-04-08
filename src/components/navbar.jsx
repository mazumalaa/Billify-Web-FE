// Imports
import Logo from "../assets/logo/logo.png";
import CustomModal from "./customModal";
import CustomToggle from "./customToggle";
import NavbarLink from "./navbarLink";

// My-Setup
const Navbar = ({ data }) => {
  return (
    <>
      <header className={`z-999 fixed top-0 left-0 right-0 bg-linear-to-r from-gray-700 to-indigo-400 p-6`}>
        <div className={`flex overflow-hidden items-center justify-between bg-gray-50 absolute top-5 left-[10%] right-[10%] p-2 px-4 rounded-lg shadow-md`}>
          <div>
            <img className={`w-26`} src={Logo} alt="Billify Logo" />
          </div>

          <div className={`hidden md:block`}>
            <NavbarLink data={data} />
          </div>

          <div className={`block md:hidden`}>
            <CustomToggle />
          </div>
        </div>
      </header>

      <CustomModal customStyle={`block! md:hidden!`}></CustomModal>
    </>
  );
};

// Export
export default Navbar;
