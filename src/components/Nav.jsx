import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'


export default function NavBar(){
    return(
        <nav>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <NavLink to={'/'}>01 HOME</NavLink>
                <NavLink to={'/Destination'}>02 DESTINATION</NavLink>
                <NavLink to={'/Crew'}>03 CREW</NavLink>
                <NavLink to={'/Tech'}>04 TECHONOLOGY</NavLink>
            </div>
        </nav>
    )
}