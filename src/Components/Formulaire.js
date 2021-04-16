const Formulaire = () => {
    function sayHello() {
        alert('Votre message a bien été envoyé, nous reprendrons contact avec vous prochainement');
      }
    return (
        <div className="containerForm">
            <form>
                <div className="select">
                    <p className="radioBox"> <input className="radio" type="radio" name="gender" value="" checked/> <label>Professionnel</label> </p>
                    <p className="radioBox"> <input className="radio" checked="checked" type="radio" name="gender" value=""/> <label>Particulier</label> </p>
                </div>

                <div className="select">
                    <input type="text" className="textInput" placeholder="Nom*" required></input>
                    <input type="text" className="textInput" placeholder="Prénom"></input>
                </div>

                <div className="select1">
                    <input type="text" className="textInput1" placeholder="Adresse"></input>
                </div>

                <div className="select">
                    <input type="number" className="textInput" placeholder="Code postal*" required></input>
                    <input type="text" className="textInput" placeholder="Ville*" required></input>
                </div>

                <div className="select">
                    <input type="number" className="textInput" placeholder="Numéro de téléphone*" required></input>
                    <input type="email" className="textInput" placeholder="Adresse Email*"></input>
                </div>

                    <input list="prestations" className="textInput2" placeholder="Type de prestation*"/>
                        <datalist id="prestations">
                            <option value="Cuisine"/>
                            <option value="Salle de bain"/>
                            <option value="Parquet"/>
                            <option value="Carrelage"/>
                            <option value="Home staging"/>
                            <option value="Peinture"/>
                            <option value="Papier peint"/>
                            <option value="Electricité"/>
                            <option value="Plomberie"/>
                            <option value="Alarme"/>
                            <option value="Caméra de surveillance"/>
                            <option value="Détecteur de fumée"/>
                            <option value="Volet roulant"/>
                            <option value="autre"/>
                        </datalist>

                <div className="select">
                    <input type="number" className="textInput" placeholder="Superficie de la pièce (en m2)" required></input>
                    <input type="number" className="textInput" placeholder="Budget (€)" required></input>
                </div>

                <div className="select1">
                    <input type="text" className="textInput1" placeholder="Message"></input>
                </div>

                <button onClick={sayHello} className="buttonForm">Envoyer</button>
            </form>
        </div>
    )
}

export default Formulaire;