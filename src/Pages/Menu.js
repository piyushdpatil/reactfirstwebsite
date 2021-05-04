import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='nav'>
            <div>
                <a className="b1" to="">My Website</a>
            </div>
            <nav className='navbarin'>
                <NavLink exact to='/' activeClassName='activeMen' className="navMenu">Home</NavLink>
                <NavLink to='/about' activeClassName='activeMen' className='navMenu'>About</NavLink>
                <NavLink to='/service' activeClassName='activeMen' className='navMenu'>Services</NavLink>
                <NavLink to='/contact' activeClassName='activeMen' className='navMenu'>Contact</NavLink>
            </nav>


        </div>
    )
}
export default Menu;