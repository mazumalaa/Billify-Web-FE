// My-Setup
const CustomButton = ({ children, customStyle, ...props }) => {
  return (
    <>
      <button {...props} className={`${customStyle && customStyle} flex items-center gap-2 text-indigo-50 bg-indigo-500 px-4 py-1.5 rounded-md hover:opacity-75 cursor-pointer active:scale-98`}>
        {children}
      </button>
    </>
  )
}

// Export
export default CustomButton;