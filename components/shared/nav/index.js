import React from 'react'
import Link from 'next/link';

import styles from './nav.module.scss';

export default function Nav({ pageTitle }) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand mr-6">
        <Link href="/">
          <a className="navbar-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Logo"
              src="images/logo.svg"
              width="112"
              height="28"
            />
          </a>
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        {pageTitle &&
          <div className="navbar-item">
            <h5 className={styles.pageTitle}>{pageTitle}</h5>
          </div>
        }
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="mr-5">
                <span className="icon is-primary is-large">
                  <i className="fas fa-search fa-lg"></i>
                </span>
              </a>
              <a className="mr-5">
                <span className="icon is-primary is-large">
                  <i className="far fa-bell fa-lg"></i>
                </span>
              </a>
              <figure className="image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Profile picture" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
