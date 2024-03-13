import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productos from '../../productsCarrusel/products'
import './Productos.css'

function Productos () {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };
  return (
    <>
    <section id="Productos">
        <div className="contenido">
            <div className="content">
            <h2>PRODUCTOS Y SERVICIOS</h2>
                <Slider {...settings}>
                        {productos.map(producto => (
                            <div className="key" key={producto}>
                                <div className="card">
                                    <img src={producto.img}/>
                                    <div className="title">
                                        <h4>{producto.title}</h4>
                                    </div>
                                    <div className="text">
                                        <p>{producto.texto}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>        
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Productos