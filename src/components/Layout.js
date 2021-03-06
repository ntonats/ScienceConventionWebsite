import React from "react"
import PropTypes from "prop-types";
import Header from "./Header";

export const headerHeight = 64;

const Layout = ({children}) => {

  return (
    <>
      <Header height={headerHeight}/>
      <main style={{minHeight: '100vh'}}>
        <div style={{height: headerHeight, width: '100%'}}/>
        {children}
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
