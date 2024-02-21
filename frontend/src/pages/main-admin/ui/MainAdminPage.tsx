import { NavAdmin } from "@/widgets"
import { Outlet } from "react-router-dom"
import './MainAdminPage.css'

export const MainAdminPage = () => {

  return(
    <div className="admin">
      <div className="admin__nav">
        <NavAdmin/>
      </div>
      <div className="admin__content">
        <Outlet/>
      </div>
    </div>
  )
}