import React from 'react'
import PropTypes from 'prop-types';
import styles from './sidemenu.module.scss';

export default function SideMenu({ menuItems }) {
  return (
    <aside
      className={`column is-1 is-sidebar-menu p-0 is-hidden-mobile ${styles.sideMenuList}`}
    >
      <ul className="menu-list pt-6">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`my-6 ${item.active ? styles.sideMenuList__active : ''
              }`}
          >
            <a href={item.route}>
              <span className="icon is-medium has-text-centered">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/${item.icon}`}
                  alt={item.alt}
                />
              </span>
              {item.title}
            </a>
          </li>
        ))}

        <li className={`my-6`}>
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
            href="#"
          >
            <span className="icon is-medium has-text-centered">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/log-out-outline.svg" alt="Sign out icon" />
            </span>
            Sign Out
          </a>
        </li>
      </ul>
    </aside>
  )
}

SideMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
    active: PropTypes.bool,
    route: PropTypes.string
  }))
}
