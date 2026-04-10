// Imports
import Logo from "../assets/logo/logo.png";
import useUIStore from "../stores/zustand";
import CustomModal from "./customModal";
import CustomToggle from "./customToggle";
import NavbarLink from "./navbarLink";
import NavbarLinkMobile from "./navbarLinkMobile";

// My-Setup
const Navbar = ({ data }) => {
  const { open, setOpen } = useUIStore();
  return (
    <>
      <header className={`z-9999 fixed top-0 left-0 right-0 bg-linear-to-r from-gray-700 to-indigo-400 p-6`}>
        <div className={`flex overflow-hidden items-center justify-between bg-gray-50 absolute top-5 left-[5%] right-[5%] md:left-[10%] md:right-[10%] p-2 px-4 rounded-lg shadow-md`}>
          <div>
            <img className={`w-26`} src={Logo} alt="Billify Logo" />
          </div>

          <div className={`hidden md:block`}>
            <NavbarLink data={data} />
          </div>

          <div className={`block md:hidden`}>
            <CustomToggle open={open} onClick={() => setOpen(!open)} />
          </div>
        </div>
      </header>

      <CustomModal open={open} onClose={() => setOpen(!open)} customStyle={`block! md:hidden!`}>
        <div className={`${open ? `h-max p-2` : `h-0 p-0`} duration-200 absolute left-[7%] right-[7%] sm:left-[10%] sm:right-[10%] bottom-0  bg-gray-50 rounded-t-3xl ring-3 ring-offset-3 ring-gray-50 ring-offset-gray-500`}>
          <NavbarLinkMobile data={data} />
        </div>
      </CustomModal>
    </>
  );
};

// Export
export default Navbar;
