import { Outlet } from "react-router-dom";

export default function Crew(){
    return(
        <>
            <section id="pageCrew">
                <h2><span className="gris">02</span> MEET YOUR CREW</h2>
                <Outlet/>
            </section>  
        </>
        
    )
}