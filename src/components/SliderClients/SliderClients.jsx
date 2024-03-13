import clients from '../../clientsCarrusel/clients'
import './SliderClients.css'

const SliderClients = () => {
  return (
    <div className="container slider.container">
        <div className="slider">
            {clients.map(client => (
                <div className="item" key={client}>
                    <img  src={client} alt="" />
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default SliderClients