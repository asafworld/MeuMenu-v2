import React from "react";
import { Link } from "react-router-dom";
import menuContext from "../../ContextAPI/MenuContext";
import './MenuList.css'

function MenuList() {
  const { menus } = React.useContext(menuContext)

  return(
    <section className="menu-list-section">
      {
        menus.length ? (
          <div>
            <h2>Seus menus:</h2>
            <ul className="menu-list-ul">
            {
              menus.map((menu) => (
                <li>
                  <Link to={`/menu/${ menu.name }`}>
                    { menu.name }
                  </Link>
                </li>
              ))
            }
            </ul>
          </div>
        ) : <h5>Nenhum menu por aqui ainda!</h5>
      }
    </section>
  )
}

export default MenuList;
