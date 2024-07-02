
import { useEffect , useState} from 'react';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsSection from './components/ProductsSection';
import StatsSection from './components/StatsSection';
import Modal from './components/Modal';

function App() {

  useEffect(() => {
    document.title = "Chemfab Engineers";
  }, []);

  const [open, setOpen] = useState(false)

  return (
    <main className={" relative"}>
      <Modal open={open} setOpen={setOpen} />
      <nav className="bg-[#eaeefe]/70 shadow-md backdrop-blur-xl  h-[15vh] p-4 flex justify-between items-center sticky top-0 z-10">
        <NavBar OpenModal={setOpen}/>
      </nav>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
