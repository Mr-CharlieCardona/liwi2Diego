import Navbar from './components/Navbar/Navbar'
import Inicio from './components/Inicio/Inicio'
import Slider from './components/Slider/Slider'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Innersoft from './components/Innersoft/Innersoft'
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
    </>
  )
}

export default App

