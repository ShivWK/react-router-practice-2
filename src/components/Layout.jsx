import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="protected">Protected</Link>
      <Link to="login">Login</Link>
      <Link to="protected/nestedProtected1">NestedProtected1</Link>
      {/* <Link to="protected/nestedProtected2">NestedProtected2</Link>
      <Link to="protected/nestedProtected3">NestedProtected3</Link> */}
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}
