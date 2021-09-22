import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Nav from '../../shared/nav';

import styles from './dashboard-layout.module.scss';
import SideMenu from '../../shared/sidemenu';

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const sideMenuItems = [
    {
      id: 1,
      title: 'Customers',
      icon: 'people-outline.svg',
      alt: 'Customers icon',
      active: router.route == '/',
      route: '/',
    },
    {
      id: 2,
      title: 'Orders',
      icon: 'cart-outline.svg',
      alt: 'Orders icon',
      active: router.route == '/orders',
      route: '/orders',
    },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <Nav pageTitle={sideMenuItems.find(item => item.active == true)?.title} />

      <section className="main-content columns is-gapless  is-fullheight">
        <SideMenu menuItems={sideMenuItems} />

        <div className="column is-11">
          <div className="my-4 mx-6">
            <div className={styles.mainContent}></div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
