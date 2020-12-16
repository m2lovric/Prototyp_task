import React from 'react'
import {Header, Footer} from './index'

const Layout = ({ children }: any) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;