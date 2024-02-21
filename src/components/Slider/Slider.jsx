import images from '../../imgsCarrusel/imgs'
import './Slider.css'
import { motion } from 'framer-motion'

const Slider = () => {
  return (
    <motion.div className="container slider.container">
        <motion.div className="slider" drag='x' dragConstraints={{right:-100, left:0}}>
            {images.map(image => (
                <motion.div className="item" key={image}>
                    <img  src={image} alt="" />
                </motion.div>
            ))}
        </motion.div>
        
    </motion.div>
  )
}

export default Slider