import { AuthAdminForm } from "@/features"
import './AuthAdminPage.css'

export const AuthAdminPage = () => {

  return(
    <div className="auth-admin">
      <h1 className="auth-admin__title">Вход в админ-панель</h1>
      <AuthAdminForm></AuthAdminForm>
    </div>
  )
}