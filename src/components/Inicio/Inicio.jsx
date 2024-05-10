import './Inicio.css'
import banner from '../../assets/img/banner.jpg'
import person from '../../assets/img/person.png'
import especialistas from '../../assets/img/especialistas_2.png'

function Inicio() {
    return (
        <>
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
            <div className='content'>
                <img className="banner" src={banner} alt="" />
                <img className="especialistas" src={especialistas} alt="" />
                <img className="person" src={person} alt="" />
            </div>
        </>
    )
}

export default Inicio