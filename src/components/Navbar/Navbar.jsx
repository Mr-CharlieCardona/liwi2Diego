import {useState} from "react";
import { FaList } from "react-icons/fa";
import './Navbar.css'
import logo from '../../assets/img/logo.jpg'

function Navbar() {
    const [ isOpen , setIsOpen ] = useState (false)
 
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="" />
                </div>
                
                <div className={ `nav_items ${ isOpen && "open" }` }>
                    <a className="item" href="#">INICIO</a>
                    <a className="item" href="#QuienesSomos">¿QUIENES SOMOS?</a>
                    <a className="item" href="#EE">PRESENTACIÓN</a>
                    <a className="item" href="#Productos">PRODUCTOS Y SERVICIOS</a>
                    <a className="item" href="#Contacto">CONTACTO</a>                        
                    <a className="cotizar" href="#Contacto"><FaList/>   Cotizar Proyecto</a>
                </div>

                <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar