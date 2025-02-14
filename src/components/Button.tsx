const Button = ({ title, id, rightIcon, leftIcon, containerClassName }) => {
  return (
    <button id = {id} className = {`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClassName}`}>
      {leftIcon}
      <span className = 'relative incline-flex overflow-hidden font-general text-xs uppercase'>
        {title}
        {rightIcon}
      </span>
    </button>
  )
}

export default Button