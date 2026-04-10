// My-Setup
const CustomToggle = ({open,onClick}) => {
  return (
    <>
      <ul onClick={onClick} className={`space-y-1 cursor-pointer`}>
        <li className={`w-6 h-1 ${open ? `rotate-45 translate-y-2` : ``} rounded-full duration-200  bg-gray-700`}></li>
        <li className={`h-1 ${open ? `w-0` : `w-6`} rounded-full duration-200 bg-gray-700`}></li>
        <li className={`w-6 h-1 ${open ? `-rotate-45 -translate-y-2` : ``} rounded-full duration-200 bg-gray-700`}></li>
      </ul>
    </>
  );
};

// Export
export default CustomToggle;
