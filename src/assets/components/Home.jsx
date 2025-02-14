import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <>
         <h1>This is home page</h1>
         <NavLink to='contacts'>Contacts</NavLink>
         <Outlet />
        </>
    )
}