// My-Setup
const CustomInput = ({label, type, value, Icon}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>

      <div>
        <input type={type} />
        {Icon && <Icon />}
      </div>

    </>
  )
}

// Export
export default CustomInput;