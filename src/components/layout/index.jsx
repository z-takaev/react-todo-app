import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-0">{children}</main>
    </>
  );
}

export default Layout;
