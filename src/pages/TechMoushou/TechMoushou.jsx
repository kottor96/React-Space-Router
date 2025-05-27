import { useParams } from 'react-router-dom'
import NavTech from '../../components/NavTech'
import data from '../../data/technologie.json'

export default function TechMoushou() {
    
    const {tech} = useParams()
    
    const techAficher = data.find(el=>el.etape.toLocaleLowerCase()===tech.toLocaleLowerCase())
    
    return(
        <div>
            <div>
                <NavTech data={data}/>
            </div>
            <div>
                <p>THE THECHNOLOGIE...</p>
                <h3>{techAficher.etape}</h3>
                <p>{techAficher.description}</p>
            </div>
            <div>
                <img src={techAficher.image} alt={techAficher.etape} />
            </div>
        </div>
    )
}