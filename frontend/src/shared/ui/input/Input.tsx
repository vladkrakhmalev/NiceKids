import React from "react"
import './Input.css'

type IInputProps = {
  type: 'text' | 'number' | 'email' | 'password' | 'file',
  name: 'email' | 'password',
  status?: 'valid' | 'invalid',
  children: string,
  value: string,
  onChange: (name: string, value: string) => void
}

export const Input: React.FC<IInputProps> = ({type, name, status, children, value, onChange}) => {

  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target
    onChange(name, value)
  }

  return(
    <input
      value={value}
      type={type}
      name={name}
      className={'input' + (status ? ` _${status}` : '')} 
      placeholder={children}
      onChange={handleChange}
    />
  )
}