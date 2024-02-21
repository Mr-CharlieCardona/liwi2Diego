import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import Slider from './components/Slider/Slider'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar/>
      <Inicio/>
      <Slider/>
      <QuienesSomos/>
    </>
  )
}

export default App

