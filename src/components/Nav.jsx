import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'


export default function NavBar(){
    return(
        <nav id='navBase'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='space'></div>
            <div className='link'>
                <NavLink to={'/'}>00 HOME</NavLink>
                <NavLink to={'/Destination'}>01 DESTINATION</NavLink>
                <NavLink to={'/Crew'}>02 CREW</NavLink>
                <NavLink to={'/Tech'}>03 TECHONOLOGY</NavLink>
            </div>
        </nav>
    )
}