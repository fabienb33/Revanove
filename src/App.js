import '../src/scss/App.scss';
import '../src/scss/Burger.scss';
import '../src/scss/Hero.scss';
import '../src/scss/Steps.scss';
import '../src/scss/Renovation.scss';
import '../src/scss/Security.scss';
import '../src/scss/Contact.scss';
import '../src/scss/Footer.scss';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Steps from './Components/Steps';
import Steps2 from './Components/Steps2';
import Renovation from './Components/Renovation';
import Separator from './Components/Separator';
import Security from './Components/Security';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
      <Header/>
      <Hero/>
      <Steps/>
      <Separator title="01. Rénovation"/>
      <Renovation/>
      <Steps2/>
      <Separator title="02. Sécurité"/>
      <Security/>
      <Separator title="03. Contact"/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
