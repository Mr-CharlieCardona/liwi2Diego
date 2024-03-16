import './Whatsapp.css'
import { RiWhatsappFill } from "react-icons/ri";

function Whatsapp() {
    return (
        <>
            <div className='whatsapp'>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=3128337193" className='btn-wsp' target='_blank' rel="noreferrer">
                        <i className='icon'><RiWhatsappFill /></i>
                    </a> 
                </div>
                <div>
                    <span className='asesor-wsp'>¡Hola!, Un asesor en línea le atenderá  ➜</span>  
                </div>
            </div>
        </>
    )
}

export default Whatsapp