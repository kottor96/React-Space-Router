import { NavLink } from 'react-router-dom'

export default function NavSousPage({data}){
    

    return(
        <nav>
            {data.nom===undefined&&
            data.map((el)=> 
                <NavLink  key={el.id} to={`/Destination/${el.destination}`}>{el.destination}</NavLink>
            )}    
        </nav>
    )
}