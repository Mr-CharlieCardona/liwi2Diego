
import Form from 'react-bootstrap/Form';
import './Contacto.css'
import { FaLocationDot, FaPhoneVolume, FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { RiCellphoneFill, RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import useForm from '../../hooks/useForm';
import Iframe from 'react-iframe'

const Contacto = () => {
    const initialData = {
        nombre: '',
        correo: '',
        telefono: '',
        ciudad: '',
        mensaje: ''
    }
    const onValidate = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^[0-9,$]*$/;
        let regexComments = /^.{1,255}$/;

        if(!form.nombre.trim()) {
            errors.nombre = 'Este campo no debe estar vacio.'
        }else if (!regexName.test(form.nombre)){
            errors.nombre = 'Este campo solo acepta letras y espacios.'
          }
        if(!form.correo.trim()) {
            errors.correo = 'Este campo no debe estar vacio.'
        }else if (!regexEmail.test(form.correo)){
            errors.correo = 'Este campo contiene un formato no valido.'
          }
        if(!form.telefono.trim()) {
            errors.telefono = 'Este campo no debe estar vacio.'
        }else if (!regexPhone.test(form.telefono)){
            errors.telefono = 'Este campo solo acepta números y signo "+".'
          }
        if(!form.ciudad.trim()) {
            errors.ciudad = 'Este campo no debe estar vacio.'
        }else if (!regexName.test(form.nombre)){
            errors.nombre = 'Este campo solo acepta letras y espacios.'
          }
        if(!form.mensaje.trim()) {
            errors.mensaje = 'Este campo no debe estar vacio.'
        }else if (!regexComments.test(form.mensaje)){
            errors.mensaje = 'Este campo acepta hasta 255 caracteres.'
          }
        return errors
    }
    const {form, errors, loading, handleChange, handleSubmit} = useForm(initialData, onValidate)

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
                                <li><a title="Seguir en Facebook" target="_blank" 
                                href="#"><FaFacebook /></a></li>
                                <li><a title="Seguir en Instagram"target="_blank" 
                                href="#"><RiInstagramFill /></a></li>
                                <li><a title="Seguir en X" target="_blank" 
                                href="#"><FaSquareXTwitter /></a></li>
                                <li><a title="Seguir en YouTube" target="_blank" 
                                href="#"><FaYoutube /></a></li>
                            </ul>
                        </div>
                        <div className='map'>
                            <div className='texto'>
                                <p>Brindamos asesoría, orientación y asistencia permanente a las empresas interesadas en implementar soluciones con tecnologías de última generación.</p>
                                <ul>
                                    <li><strong><FaLocationDot /></strong>   Calle 18 Norte # 3N-24 <br/> Cali, Colombia</li>
                                    <li><strong><FaPhoneVolume /></strong>   +602 524 0696</li>
                                    <li><strong><RiCellphoneFill /></strong> 316 877 2851</li>
                                    <li><strong><RiWhatsappFill /></strong>  312 833 7193</li>
                                    <li><strong><MdAlternateEmail /></strong>  ideas@e&e.com</li>
                                </ul>
                            </div>
                            <div>
                                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5505287584274!2d-76.53191142521534!3d3.458822296515607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66bda77ecf5%3A0x7347b8fc6cfcadd1!2sCl.%2018%20Nte.%20%233N-24%2C%20San%20Vicente%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1711068720583!5m2!1ses-419!2sco" className="img_map" width="350" height="350" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            </div>
                        </div>
                    </div>

                    <div className='container formulario'>
                        <div className='title'>
                            <h2>COTIZAR PROYECTO</h2>
                        </div>
                        <div className='formu'>
                            <Form onSubmit={handleSubmit}>
                                <div className='group'>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicName">
                                        <Form.Control className="control" type="text" name="nombre" value={form.nombre} placeholder="Nombre o Empresa:" onChange={handleChange}/>
                                        {errors.nombre && <div className="alert alert-danger p-1 mt-1">{errors.nombre}</div>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicEmail">
                                        <Form.Control className="control" type="email" name="correo" value={form.correo} placeholder="Correo Electrónico:" onChange={handleChange}/>
                                        {errors.correo && <div className="alert alert-danger p-1 mt-1">{errors.correo}</div>}
                                    </Form.Group> 
                                </div>
                                <div className='group'>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicPhone">
                                        <Form.Control className="control" type="text" name="telefono" value={form.telefono} placeholder="Teléfono o Celular:" onChange={handleChange}/>
                                        {errors.telefono && <div className="alert alert-danger p-1 mt-1">{errors.telefono}</div>}
                                    </Form.Group>
                                    <Form.Group className="mb-3 group_1" controlId="formBasicCity">
                                        <Form.Control className="control" type="text" name="ciudad" value={form.ciudad} placeholder="Ciudad:" onChange={handleChange}/>
                                        {errors.ciudad && <div className="alert alert-danger p-1 mt-1">{errors.ciudad}</div>}
                                    </Form.Group> 
                                </div>
                                <div className='textarea'>
                                    <Form.Group className="mb-3" controlId="formBasicMsj">
                                        <textarea name="mensaje" value={form.mensaje} placeholder="Mensaje:" onChange={handleChange}/>
                                        {errors.mensaje && <div className="alert alert-danger p-1 mt-1">{errors.mensaje}</div>}
                                    </Form.Group>
                                </div>
                                <div className='buton'>
                                    <button disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <p>© COPYRIGHT ALL RIGHTS RESERVED LIWI Software ®</p>
                </div>
            </section>
        </>
    )
}

export default Contacto