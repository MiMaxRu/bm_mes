import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Navbar.module.css'

const Navbar = () => {
    return <nav className={nav.nav}>
    <div className={nav.item}><NavLink to="/home" >Home</NavLink></div>    {/* ${n.active}` */}
    <div className={nav.item}><NavLink to="/profile" >Profile</NavLink></div>    {/* ${n.active}` */}
    <div className={nav.item}><NavLink to="/dialogs" >Dialogs</NavLink></div>
    <div className={nav.item}><NavLink to="/news" >News</NavLink></div>
    <div className={nav.item}><NavLink to="/music" >Music</NavLink></div>
    <div className={nav.item}><NavLink to="/settings">Settings</NavLink></div>
</nav>
}
export default Navbar;