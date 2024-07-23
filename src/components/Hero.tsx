import { prueba } from "../assets/index"

//Añadimos la imagen que va tener nuestro layout
const Hero = () => {
  return (
    <div>
        <img src={prueba} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

export default Hero;