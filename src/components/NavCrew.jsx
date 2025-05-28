import {NavLink} from 'react-router-dom'

export default function NavCrew({data}){
    return(
        <div id='crewNav'>
            {data.map((el)=> 
                <NavLink  key={el.id} to={`/Crew/${el.titre}`}> </NavLink>
            )}
        </div>
    )
}
