import { Outlet } from "react-router-dom"

export default function Destination() {
    
    
    
    return(
        <>
            <section id="pageDestination">
                <h2><span className="gris">01</span> PICK YOUR DESTINATION</h2>
                <Outlet/>
            </section>
        </>
        

    )
}