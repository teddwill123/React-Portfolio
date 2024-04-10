import Contacts from './component/Contacts';
import Work from './component/Work';
import Skills from './component/Skills';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar'
import Footer from './component/Footer';


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App
