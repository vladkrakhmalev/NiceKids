import React from "react"
import './Button.css'

type IButtonProps = {
  theme: 'main' | 'additional' | 'dangerous',
  type: 'submit'
  children: string,
  onClick?: () => void
}

export const Button: React.FC<IButtonProps> = ({theme, children, onClick}) => {

  return(
    <button
      className={'button' + ` _${theme}`}
      onClick={onClick}
    >{children}</button>
  )
}