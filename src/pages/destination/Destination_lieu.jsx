import { useParams } from "react-router-dom";
import data from "../../data/destination.json";
import NavSousPage from "../../components/NavSousPage";

export default function Destination_lieu(){
    const {destination} = useParams()
    
    const planete = data.find(el=>el.destination === destination)
    
    

    return(
        <div className={planete.destination.toLowerCase}>
            <div>
                <img src={planete.img} alt={planete.destination.toLowerCase} />
            </div>
            <div>
                <NavSousPage/>
                <h3>{planete.destination}</h3>
                <p>{planete.text}</p>
                <hr />
                <div>
                    <h5>EST. TRAVEL TIME</h5>
                    <p>{planete.estimation} {planete.uniter}</p>
                </div>
            </div>
        </div>
    )
}