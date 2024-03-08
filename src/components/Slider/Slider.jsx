import images from '../../imgsCarrusel/imgs'
import './Slider.css'

const Slider = () => {
  return (
    <div className="container slider.container">
        <div className="slider">
            {images.map(image => (
                <div className="item" key={image}>
                    <img  src={image} alt="" />
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Slider