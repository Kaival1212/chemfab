
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import StatsSection from './components/StatsSection';

function App() {

  return (
    <main className={'absolute'}>
      <nav className="bg-[#EAEEFE] w-full h-[15vh] p-4 flex justify-between items-center sticky top-0 z-10">
        <NavBar/>
      </nav>
      <HeroSection />
      <StatsSection />
    </main>
  )
}

export default App
