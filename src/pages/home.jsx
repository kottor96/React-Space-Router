import {Link} from 'react-router-dom'


export default function Home({}){
    
    
    return(
        <>
            <section id="homePage">
                <div id="homeText">
                    <div className="pageHead">
                        <p>SO, YOU WANT TO TRAVEL TO</p>
                        <h1>SPACE</h1>
                    </div>
                    <div className="pageBody">
                        <p>
                            Let's face it; if you want to go to space, you might as well
                            genuinely go to outer space and not hover kind of on the
                            edge of it. Well sit back, and relax because we'll give you a
                            truly out of this world experience!
                        </p>
                    </div>
                </div>
                <div id="homeBtn">
                    <Link to='/Destination'><button type="button" className="btn-Explore">EXPLORE</button></Link>
                </div>
            </section>
        </>
    )
}