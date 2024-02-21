import { NavLink } from "react-router-dom"
import { menuList } from "@/shared/router"
import './NavAdmin.css'

export const NavAdmin = () => {

  return(
    <ul className="admin-menu__list">
      {menuList.map(item => 
        <li key={item.id}>
          <NavLink
            className="admin-menu__item"
            to={item.link}
          >{item.name}</NavLink>
        </li>
      )}
    </ul>
  )
}