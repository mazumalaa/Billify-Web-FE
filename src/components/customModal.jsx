// My-Setup
const CustomModal = ({children,onClose,customStyle}) => {
  return (
    <>
      <div onClick={onClose} className={`${customStyle ? customStyle : ``} z-99 fixed inset-0 bg-black/50`}>
        {children}
      </div>
    </>
  )
}

// Export
export default CustomModal;