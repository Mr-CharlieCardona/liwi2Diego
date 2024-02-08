import './Inicio.css'
import banner from '../../assets/img/banner.jpg'
import person from '../../assets/img/person.png'
import especialistas from '../../assets/img/especialistas.png'

function Inicio() {
    return (
        <>
            <div className='content'>
                <img className="banner" src={banner} alt="" />
                <img className="especialistas" src={especialistas} alt="" />
                <img className="person" src={person} alt="" />
            </div>
        </>
    )
}

export default Inicio