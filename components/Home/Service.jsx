// rafce -> atajo emmet para crear la estructura de un componente

const Service = ({name, detail}) => {
  return (
    <article className="service-item">
        <span className="jam jam-phone"></span>
        <h3>{name}</h3>
        <p>{detail}</p>
    </article>
  )
}

export default Service