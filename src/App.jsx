import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import Slider from './components/Slider/Slider'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Innersoft from './components/Innersoft/Innersoft'
import Productos from './components/Productos/Productos'
import SliderClients from './components/SliderClients/SliderClients'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar/>
      <Inicio/>
      <Slider/>
      <QuienesSomos/>
      <Innersoft/>
      <Productos/>
      <SliderClients/>
    </>
  )
}

export default App

