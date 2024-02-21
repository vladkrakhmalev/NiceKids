import React from "react"
import './Input.css'

type TInputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'file',
  name: 'email' | 'password',
  error?: boolean,
  children: string,
  value: string,
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<TInputProps> = ({error, children, ...props}) => {

  return(
    <input
      {...props}
      className={'input' + (error ? ` _error` : '')} 
      placeholder={children}
    />
  )
}