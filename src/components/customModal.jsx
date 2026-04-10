// My-Setup
const CustomModal = ({ open, children, onClose, customStyle }) => {
  return (
    <>
      <div onClick={onClose} className={`${customStyle ? customStyle : ``} ${open ?  `opacity-100 z-999` : `opacity-0 -z-1`} fixed inset-0  bg-black/50 duration-200`}>
        {children}
      </div>
    </>
  )
}

// Export
export default CustomModal;