import './QuienesSomos.css'

function QuienesSomos() {
    return (
        <> 
            <section id='QuienesSomos'>
            <img className="img1" src="https://img.freepik.com/vector-gratis/fondo-banner-tecnologia-formas-hexagonales-espacio-texto_1017-22589.jpg" alt="" />
                <div className='context'>
                    <h3>¿ QUIENES SOMOS ?</h3>
                    <p><b>InnerSoft</b> es una empresa de profesionales en informática con más de 15 años de experiencia en proporcionar soluciones de la más alta calidad en sistemas de información y automatización de procesos.</p>
                    <h3>NUESTRA MISIÓN</h3>
                    <p>Es lograr que nuestros clientes obtengan los mejores beneficios de la tecnología de informática, mediante el suministro de soluciones integrales y de servicios de excelente calidad; además apoyar a nuestros colaboradores en busca de la excelencia y sus logros personales con la mentalidad del servicio nuestra comunidad.</p>
                    <h3>¿ A QUE NOS COMPROMETEMOS ?</h3>
                    <p>Es lograr que nuestros clientes obtengan los mejores beneficios de la tecnología de informática, mediante el suministro de soluciones integrales y de servicios de excelente calidad; además apoyar a nuestros colaboradores en busca de la excelencia y sus logros personales con la mentalidad del servicio nuestra comunidad.</p>
                </div>
                <div className='img_quienes'>
                    <img id="img_q" src="https://miro.medium.com/v2/resize:fit:1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg" alt="" />
                    <img id="img_q2" src="https://concepto.de/wp-content/uploads/2018/09/Software-Libre1-e1536932868972-800x400.jpg" alt="" />
                </div>
            </section>
            <br />
            <div className='experiencia'>
                <div>
                    <span className='num'>15+</span>
                    <strong className='strong1'>AÑOS DE EXPERIENCIA</strong>
                </div>
                <div>
                    <span className='cien'>100%</span>
                    <strong className='strong2'>PROFESIONALES EXPERTOS</strong>
                </div>
                <div>
                    <span className='num'>40+</span>
                    <strong className='strong3'>DESARROLLOS A MEDIDA</strong>
                </div>
                <div>
                    <span className='cien'>100%</span>
                    <strong className='strong3'>CLIENTES SATISFECHOS</strong>
                </div>
                
            </div>
        </>
    )
}

export default QuienesSomos