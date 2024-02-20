import { Button, Input } from "@/shared/ui";
import React, { useState } from "react";
import './AuthAdminForm.css'

export const AuthAdminForm: React.FC = () => {

  type IFormData = {
    email: string
    password: string
  }

  const [formData, setFormData] = useState <IFormData> ({
    email: '',
    password: ''
  })



  function handleInputChange(name: string, value: string) {
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    validateData(formData)
    console.log(`Send data by API. \nEmail: ${formData.email}; \nPassword: ${formData.password}.`)
  }

  function validateData(formData: IFormData) {
    console.log('Validate... ' + formData)
  }



  return (
    <form className="auth-admin__form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name='email'
        value={formData.email}
        onChange={handleInputChange}
      >Email</Input>
      <Input
        type="password"
        name='password'
        value={formData.password}
        onChange={handleInputChange}
      >Пароль</Input>
      <Button theme="main">Войти</Button>
      <a className="auth-admin__link">Восстановить пароль</a>
    </form>
  )
}