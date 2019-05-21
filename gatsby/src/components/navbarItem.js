import React from "react"
import { Link } from "gatsby"

const NavbarItem = ({ item, active }) => {
  let children = ""
  if (item.items) {
    children = (
      <li key={`${item.id}-li-child`} id={`${item.id}-li-child`}>
        <ul id="manual-guide-toc-child" className="manual-guide-toc child">
          {item.items.map(item => {
            return (
              <li key={`${item.id}-li-key`} id={`${item.id}-li`}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }

  return (
    <>
      <li key={`${item.id}-li-key`} id={`${item.id}-li`}>
        <Link to={item.link} className={active ? "active-trail" : ""}>
          {item.title}
        </Link>
      </li>
      {children}
    </>
  )
}

export default NavbarItem