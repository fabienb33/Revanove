import hero from "../assets/imgHero.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <img src={hero} alt="img Revanove" className="imgHero"/>
            <div className="boxTextHero">
                <h1 className="textHero">Les travaux ce</h1>
                <h1 className="textHero">n’est pas votre truc ?</h1>
                <h2 className="contentHero">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                <button className="buttonHero" >Devis gratuit</button>
            </div>
        </div>
    )}
export default Hero