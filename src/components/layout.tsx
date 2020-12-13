import React, { ComponentProps } from 'react'
import Header from './Header/Header';

const Layout = ({ children }: any) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Layout;