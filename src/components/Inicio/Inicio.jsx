import './Inicio.css'
import banner_1 from '../../assets/img/banner_1.png'
import especialistas from '../../assets/img/especialistas.png'

function Inicio() {
    return (
        <>
            <div className='banner'>
                <img className="img_1" src="https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg" alt="" />
                <img className="especialistas" src={especialistas} alt="" />
                <img className="img_2" src={banner_1} alt="" />
            </div>
        </>
    )
}

export default Inicio