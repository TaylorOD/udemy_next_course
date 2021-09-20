import React from "react"
import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = ({ children, title="Book best hotel for your holiday"}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
