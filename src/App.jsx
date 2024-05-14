import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import Slider from './components/Slider/Slider'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import EE from './components/Liwi/Liwi'
import Productos from './components/Productos/Productos'
import SliderClients from './components/SliderClients/SliderClients'
import Contacto from './components/Contacto/Contacto'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Whatsapp from './components/Whatsapp/Whatsapp'


function App() {
  return (
    <>
      <Navbar/>
      <Inicio/>
      <Slider/>
      <QuienesSomos/>
      <EE/>
      <Productos/>
      <SliderClients/>
      <Contacto/>
      <ScrollButton />
      <Whatsapp />
    </>
  )
}

export default App

