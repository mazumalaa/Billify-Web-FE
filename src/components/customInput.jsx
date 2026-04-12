// My-Setup
const CustomInput = ({ label, type, value, Icon, onChange }) => {
  return (
    <div className="relative my-3 border-2 focus-within:border-indigo-500 rounded-md border-gray-300 px-2 py-1.5">
      <div className={`w-full flex items-center gap-2`}>
        <input onChange={onChange} value={value} id={label} className={`outline-0 peer text-sm focus:outline-0 w-full`} type={type} />
        <label className={`bg-gray-50 text-gray-400 w-max px-2 block duration-200 absolute ${value.length > 0 ? `-translate-y-[100%] text-sm ` : ``} peer-focus:text-indigo-500 peer-focus:-translate-y-[100%] peer-focus:text-sm`} htmlFor={label}>{label}</label>
        {Icon && <Icon className={`text-xl peer-focus:text-indigo-500 text-indigo-300`} />}
      </div>
    </div>
  )
}

// Export
export default CustomInput;