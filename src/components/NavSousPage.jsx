import { NavLink } from 'react-router-dom'
import data from "../data/destination.json";

export default function NavSousPage(){


    return(
        <nav>
            {data.map((el)=> 
                <NavLink  key={el.destination} to={`/Destination/${el.destination}`}>{el.destination}</NavLink>
            )}
        </nav>
    )
}