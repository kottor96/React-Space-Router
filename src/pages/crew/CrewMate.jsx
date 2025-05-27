import {useParams} from 'react-router-dom'
import data from "../../data/crewmate.json";
import NavCrew from "../../components/NavCrew";

export default function CrewMate() {
    const {titre} = useParams()

    const individu = data.find(el=>el.titre === titre)

    const img = `/assets/crew/image-${individu.nom.toLowerCase()}-${individu.prenom.toLowerCase()}.webp`

    return(
        <div className={individu.nom.toLowerCase()}>
            <div>
                <div className='crewPresentation'>
                    <h3>{individu.titre}</h3>
                    <h3>{individu.nom} {individu.prenom}</h3>
                    <p>{individu.presentation}</p>
                </div>
                <div className='crewNav'>
                    <NavCrew data={data}/>
                </div>
            </div>
            <div>
                <img src={img} alt={individu.nom} />
            </div>
        </div>
    )
}