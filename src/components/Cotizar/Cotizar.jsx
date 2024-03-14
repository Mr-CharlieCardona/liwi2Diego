import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cotizar.css'

function Cotizar() {
    return (
        <>
            <section id="Cotizar">
                
                <div className='container'>
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
            </section>
        </>
    )
}

export default Cotizar