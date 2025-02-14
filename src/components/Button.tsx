import { JSX } from "react"

const Button = ({ title, id, leftIcon, containerClassName }: { title: string, id: string, leftIcon: JSX.Element, containerClassName: string }) => {
  return (
    <button id = {id} className = {`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClassName}`}>
      {leftIcon}
      <span className = 'relative incline-flex overflow-hidden font-general text-xs uppercase'>
        {title}
      </span>
    </button>
  )
}

export default Button