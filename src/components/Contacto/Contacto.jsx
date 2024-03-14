import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contacto.css'
import { FaLocationDot, FaPhoneVolume, FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { RiCellphoneFill, RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";

function Contacto() {
    return (
        <>
            <section id="Contacto">
                <div className='contact_cotizar'>
                    <div className='container contacto'>
                        <div className='title'>
                            <h2>CONTACTO</h2>
                        </div>
                        <div className='redes'>
                            <ul>
                                <li><a title="Seguir en FaceBook" target="_blank" 
                                href="#"><FaFacebook /></a></li>
                                <li><a title="Seguir en Instagram"target="_blank" 
                                href="#"><RiInstagramFill /></a></li>
                                <li><a title="Seguir en X" target="_blank" 
                                href="#"><FaSquareXTwitter /></a></li>
                                <li><a title="Seguir en YouTube" target="_blank" 
                                href="#"><FaYoutube /></a></li>
                            </ul>
                        </div>
                        <div className='texto'>
                            <p>Brindamos asesoría, orientación y asistencia permanente a las empresas interesadas en implementar soluciones con tecnologías de última generación.</p>
                            <ul>
                                <li><strong><FaLocationDot /></strong>   Calle 18 Norte # 3N-24 – Cali, Colombia</li>
                                <li><strong><FaPhoneVolume /></strong>   +602 524 0696</li>
                                <li><strong><RiCellphoneFill /></strong> 316 877 2851</li>
                                <li><strong><RiWhatsappFill /></strong>  312 833 7193</li>
                                <li><strong><MdAlternateEmail /></strong>  ideas@e&efabricadesoftware.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className='container formulario'>
                        <div className='title'>
                            <h2>COTIZAR PROYECTO</h2>
                        </div>
                        <div className='formu'>
                            <Form>
                                <div className='group'>
                                <Form.Group className="mb-3 group_1" controlId="formBasicName">
                                    <Form.Control className="control" type="text" placeholder="Nombre o Empresa:"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicEmail">
                                        <Form.Control className="control" type="email" placeholder="Correo Electrónico:" />
                                    </Form.Group> 
                                </div>
                                <div className='group'>
                                <Form.Group className="mb-3 group_1" controlId="formBasicPhone">
                                    <Form.Control className="control" type="text" placeholder="Teléfono o Celular:"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicCity">
                                        <Form.Control className="control" type="text" placeholder="Ciudad:" />
                                    </Form.Group> 
                                </div>
                                <div className='textarea'>
                                    <Form.Group className="mb-3" controlId="formBasicMsj">
                                        <textarea placeholder="Mensaje:"/>
                                    </Form.Group>
                                </div>
                                <div className='buton'>
                                    <Button variant="primary" type="submit">
                                        Enviar
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacto