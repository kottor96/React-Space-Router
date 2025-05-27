export default function navCrew({data}){
    return(
        <div id='crewNav'>
            {data.map((el)=> 
                <NavLink  key={el.id} to={`/Crew/${el.titre}`}>truc</NavLink>
            )}
        </div>
    )
}
