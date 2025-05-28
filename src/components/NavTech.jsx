import { NavLink } from "react-router-dom";

export default function NavTech({data}){
    return(
        <nav>
            {data.map((el)=>(
                <NavLink key={el.id} to={`/Tech/${el.etape}`}><button>{el.id}</button></NavLink>
            ))}
        </nav>
        
    )
}