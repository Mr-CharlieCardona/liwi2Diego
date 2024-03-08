import {useState} from "react";
import { FaBars, FaList } from "react-icons/fa";
import './Navbar.css'
import logo from '../../assets/img/logo.png'

function Navbar() {
    const [ menu , setMenu ] = useState (false)
    const toggleMenu = () => {
        setMenu(!menu)
    } 
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className={ `responsive ${ menu ? 'isActive' : '' }` }>
                    <div className="items">
                        <a className="item" href="#">INICIO</a>
                        <a className="item" href="#QuienesSomos">¿QUIENES SOMOS?</a>
                        <a className="item" href="#Innersoft">PRESENTACIÓN</a>
                        <a className="item" href="#Productos">PRODUCTOS Y SERVICIOS</a>
                        <a className="item" href="#">CONTACTO</a>                        
                    </div>
                    <div>
                        <a className="cotizar" href="#"><FaList/>   Cotizar Proyecto</a>
                    </div>
                </div>
                <div onClick={toggleMenu} className="menu">
                    <FaBars/>
                </div>
            </nav>
        </>
    )
}

export default Navbar