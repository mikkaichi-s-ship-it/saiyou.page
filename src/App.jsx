import Hero from './components/Hero'
import Concept from './components/Concept'
import Treatment from './components/Treatment'
import StaffVoices from './components/StaffVoices'
import ThreePoints from './components/ThreePoints'
import Requirements from './components/Requirements'
import ClinicInfo from './components/ClinicInfo'
import Cta from './components/Cta'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Treatment />
        <StaffVoices />
        <ThreePoints />
        <Requirements />
        <ClinicInfo />
      </main>
      <Cta />
      <Footer />
    </div>
  )
}

export default App
