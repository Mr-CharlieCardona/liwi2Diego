import {useState} from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
    const [ menu , setMenu ] = useState (false)
    const toggleMenu = () => {
        setMenu(!menu)
    } 
    return (
        <>
            <nav>
                <div>
                    <img src="https://innersoftcali.com/wp-content/uploads/2020/11/logo-innersoft.png" alt="" />
                </div>
                <div className={ `responsive ${ menu ? 'isActive' : '' }` }>
                    <div className="items">
                        <a href="#">INICIO</a>
                        <a href="#">¿QUIENES SOMOS?</a>
                        <a href="#">INNERSOFT</a>
                        <a href="#">PRODUCTOS Y SERVICIOS</a>
                        <a href="#">CONTACTO</a>
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