import { Button, Input } from "@/shared/ui";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import './AuthAdminForm.css'
import { validateData, fetchData, TFormData } from "../model/authAdmin"


export const AuthAdminForm: React.FC = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [formData, setFormData] = useState<TFormData>({email: '', password: ''})

  // Updates the formData state when there's a change in the input fields.
  function handleInputChange(e:React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target
    setErrorMessage('')
    setFormData({...formData, [name]: value})
  }

  // Validates the form data and triggers the authentication process
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage('')

    // Validation
    const isValid = validateData(formData)
    if (!isValid) return setErrorMessage('Неверный логин или пароль')

    // Authentication
    const result = await fetchData(formData)
    if (result.status) return navigate('/admin')
    setErrorMessage(result.message)
  }



  return (
    <form className="auth-admin__form" onSubmit={handleSubmit}>

      <Input
        type="text"
        name='email'
        value={formData.email}
        error={errorMessage ? true : false}
        onChange={handleInputChange}
      >Email</Input>

      <Input
        type="password"
        name='password'
        value={formData.password}
        error={errorMessage ? true : false}
        onChange={handleInputChange}
      >Пароль</Input>

      <Button type='submit' theme="main">Войти</Button>
      {errorMessage ? <p className="auth-admin__message">{errorMessage}</p> : null}
      <a className="auth-admin__link">Восстановить пароль</a>
    </form>
  )
}