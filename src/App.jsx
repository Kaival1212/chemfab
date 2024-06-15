
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';

function App() {

  return (
    <main className={'absolute'}>
      <nav className="bg-[#EAEEFE] w-full h-[15vh] p-4 flex justify-between items-center sticky top-0 z-10">
        <img src="/vite.svg" className="bg-cover h-full w-10" />
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Products</li>
          <li>Contact</li>
          <li>Get a Quote</li>
        </ul>
      </nav>
      <HeroSection />
      <StatsSection />
    </main>
  )
}

export default App
