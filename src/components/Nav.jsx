import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'


export default function NavBar(){
    return(
        <nav>
            <div>
                <img src={logo} alt="logo"/>
            </div>
            <div>
                <Link to={'/'}>01 HOME</Link>
                <Link to={'/Destination'}>02 DESTINATION</Link>
                <Link to={'/Crew'}>03 CREW</Link>
                <Link to={'/Tech'}>04 TECHONOLOGY</Link>
            </div>
        </nav>
    )
}