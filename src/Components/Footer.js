import logoBW from '../assets/logoBW.png'
import logoW from '../assets/logoWebbisterie.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="separatorFooter"></div>
            <div className="containerFooter">
                <div className="boxFooter">
                    <a href="www.happyuncle.fr" className="sections pink"><p>Rénovation</p></a>
                    <a href="www.happyuncle.fr">Cuisine</a>
                    <a href="www.happyuncle.fr">Salle de bain</a>
                    <a href="www.happyuncle.fr">Parquet</a>
                    <a href="www.happyuncle.fr">Carrelage</a>
                    <a href="www.happyuncle.fr">Home staging</a>
                    <a href="www.happyuncle.fr">Peinture</a>
                    <a href="www.happyuncle.fr">Papier peint</a>
                    <a href="www.happyuncle.fr">Electricité</a>
                    <a href="www.happyuncle.fr">Plomberie</a>
                </div>
                <div className="boxFooter">
                    <a href="www.happyuncle.fr" className="sections blue"><p>Sécurité</p></a>
                    <a href="www.happyuncle.fr">Alarme</a>
                    <a href="www.happyuncle.fr">Caméra de surveillance</a>
                    <a href="www.happyuncle.fr">Détecteur de fumée</a>
                    <a href="www.happyuncle.fr">Volets roulants</a>
                </div>
                <div className="boxFooter">
                    <a href="www.happyuncle.fr" className="sections violet"><p>Contact</p></a>
                    <a href="www.happyuncle.fr">Contactez mail</a>
                    <a href="www.happyuncle.fr">Contactez téléphone</a>
                    <a href="www.happyuncle.fr">Devis</a>
                    <a href="www.happyuncle.fr">Réseaux sociaux</a>
                </div>
            </div>
            <div className="separatorFooter"></div>
            <div className="logos">
                <img src={logoBW} alt="" className="logo"/>
                <p className="pushed" >propulsé par</p>
                <img src={logoW} alt="" className="logo"/>
            </div>
        </div>
    )
}

export default Footer;