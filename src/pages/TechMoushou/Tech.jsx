import { Outlet } from "react-router-dom";

export default function Tech(){
    return(
        <section id="pageTech">
            <h2><span className="gris">03</span> Space lauch 101</h2>
            <Outlet/>
        </section>
    )
}