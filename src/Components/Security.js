import alarm from '../assets/alarm.jpg';
import volets from '../assets/volets.jpg';

const Security = () => {
    return (
        <div className="boxSecurity">
            <a href="www.revanove.fr"  className="box">
                <h2>alarme, caméra de surveillance et detecteur de fumée connectés
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                </h2>
                    <div className="bgWhite"></div>
                    <img src={alarm} alt="" className="img02"/>
            </a>
            
            <a href="www.revanove.fr"  className="box">
                <h2>volets roulant éléctrique
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h6>
                </h2>
                    <div className="bgWhite"></div>
                    <img src={volets} alt="" className="img02"/>
            </a>
        </div>
    )
}
export default Security;