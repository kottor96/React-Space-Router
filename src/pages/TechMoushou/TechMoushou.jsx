import NavTech from '../../components/NavTech'
import data from '../../data/technologie.json'

export default function TechMoushou() {
    return(
        <div>
            <div>
                <NavTech data={data}/>
            </div>
            <div>
                <p>THE THECHNOLOGIE...</p>
                <h3>{data.etape}</h3>
                <p>{data.description}</p>
            </div>
            <div>
                <img src={data} alt={data.etape} />
            </div>
        </div>
    )
}