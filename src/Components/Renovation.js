import sdb from "../assets/sdb.jpg";
import floor from "../assets/floor.jpg";
import homestaging from "../assets/homestaging.jpg";
import paint from "../assets/paint.jpg";
import elec from "../assets/elec.jpg";

const Renovation = () => {
    return (
        <div className="boxRenovation">
                <div className="boxRenovation1">
                    <a href="www.revanove.fr" className="reno01">
                    <h2>Cuisine et salle de bain
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                        </h2>
                        <div className="bgWhite2"></div>
                        <img src={sdb} alt="" className="img01"/>
                    </a>
                </div>
                        <div className="spacer01"></div> 
            <div className="boxRenovation2">
                        <div className="spacer04"></div>

                    <a href="www.revanove.fr" className="reno02">
                        <h2>parquet et carrelage
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                        </h2>
                        <div className="bgWhite"></div>
                        <img src={floor} alt="" className="img02"/>
                    </a>
                  
                        <div className="spacer05"></div> 
                        <div className="spacer02"></div> 

                    <a href="www.revanove.fr" className="reno02">
                        <h2>home staging
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                        </h2>
                        <div className="bgWhite"></div>
                        <img src={homestaging} alt="" className="img02"/>
                    </a>

                        <div className="spacer03"></div> 

                    <a href="www.revanove.fr" className="reno02">
                        <h2>peinture et papier peint
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                        </h2>
                        <div className="bgWhite"></div>
                        <img src={paint} alt="" className="img02"/>
                    </a>

                        <div className="spacer05"></div> 
                        <div className="spacer02"></div> 

                    <a href="www.revanove.fr"  className="reno02">
                        <h2>electricite et plomberie
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                        </h2>
                        <div className="bgWhite1"></div>
                        <img src={elec} alt="" className="img02"/>
                    </a>
            </div>
            <div className="boxSeparator">
                <div className="separator"></div>
            </div>
        </div>
    )
}

export default Renovation;