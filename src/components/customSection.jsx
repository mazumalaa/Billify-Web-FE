// My-Setup
const CustomSection = ({ children, customStyle, title, Icon }) => {
  return (
    <>
      <section className={`${customStyle ? customStyle : ``} break-inside-avoid bg-gray-50 p-3 rounded-md shadow-md ring-2 ring-offset-3 ring-gray-300 ring-inset animate_show mb-3`}>
        {(Icon || title) && (<div className={`flex items-center gap-4 text-xl font-medium`}>
          {Icon && <Icon className={`text-xl md:text-2xl`} />}
          {title && <h2 className={`text-base md:text-lg`}>{title}</h2>}
        </div>)}
        {children}
      </section>
    </>
  )
}

// Export
export default CustomSection;