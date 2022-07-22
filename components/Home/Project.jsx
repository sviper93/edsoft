import Image from "next/image"

const Project = ({ title, description, image }) => {
  return (
    <a href="#" className="project-item">
        <article>
            <div>
                <h4>{ title }</h4>
                <p> { description }</p>
            </div>
            <div className="image-container">
                <Image src={ image } layout="fill" alt={ title }/>
            </div>
        </article>
    </a>
  )
}

export default Project

// layout="fill" -> rellena todo el tamaño del contenedor padre, es decir toma el width y height
// de su elemento padre, por ende no hace falta darle un width y height a la imagen
// layout="fixed" -> la imagen está fija
// layout="intrinsic" -> significa que la imagen está integrada dentro del código
// layout="responsive" -> es para que la imagen sea responsive

/* <Image src={ image } width={276} height={165} layout="fill" alt={ title }/> -> Como dije línea
arriba, al ponerle la propiedad layout="fill" ya no es necesario colocar el width y height */
