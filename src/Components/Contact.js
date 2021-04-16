import Maps from './Maps';
import Formulaire from './Formulaire';
import '../scss/Formulaire.scss';
import '../scss/Map.scss';

const Contact = () => {
    return (
        <div className="containerContact">
            <Formulaire/>
            <Maps/>
        </div>
    )
}
export default Contact;