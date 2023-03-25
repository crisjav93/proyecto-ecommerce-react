import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import CartWidget from '../CartWidget'

const Navbar = () => {
    const activeStyle = {
        color: 'red',
    }
    return (
    <nav className={styles.container}>
        <NavLink to='/home' 
        style={({ isActive }) => (isActive ? activeStyle: undefined
            )}>
            <p>Home</p>
        </NavLink>
        <NavLink to='/category/men' style={({isActive}) => (isActive ? activeStyle: undefined
            )}>
            <p>Men's Cloth</p>
        </NavLink>
        <NavLink to='/category/women' style={({isActive}) => (isActive ? activeStyle: undefined
            )}>
            <p>Women's Cloth</p>
        </NavLink>
        <NavLink to='/category/electronics' style={({isActive}) => (isActive ? activeStyle: undefined
            )}>
            <p>Electronics</p>
        </NavLink>
        <NavLink to='/category/jewelery' style={({isActive}) => (isActive ? activeStyle: undefined
            )}>
            <p>Jewelery</p>
        </NavLink>



        <CartWidget></CartWidget>
    </nav>
    )
}

export default Navbar