
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import ProductsSection from './components/ProductsSection';
import StatsSection from './components/StatsSection';

function App() {

  return (
    <main className={" relative"}>
      <nav className="bg-[#eaeefe]/70 shadow-md backdrop-blur-xl  h-[15vh] p-4 flex justify-between items-center sticky top-0 z-10">
        <NavBar/>
      </nav>
      <HeroSection />
      <StatsSection />
      <AboutSection/>
      <ProductsSection/>
    </main>
  )
}

export default App
