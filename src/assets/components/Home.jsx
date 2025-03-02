import { NavLink, Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <>
         <NavLink to='contacts'>Contacts</NavLink>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='about'>About</NavLink>
         <Outlet />
        </>
    )
}