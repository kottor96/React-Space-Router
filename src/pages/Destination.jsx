import NavBar from "../components/Nav";
import { Outlet } from "react-router-dom"

export default function Destination() {
    
    
    
    return(
        <>
            <NavBar/>
            <section>
                <h2>PICK YOUR DESTINATION</h2>
                <Outlet/>
            </section>
        </>
        

    )
}