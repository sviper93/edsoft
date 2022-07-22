import Image from "next/image"

const Banner = () => {
    return (
        <section className="main-banner section-container">
            <div className="content-wrapper content">
            <div className="container">
                <h1 className="title">Bienvenidos a EDsoft</h1>
                <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te 
                podemos ayudar en la construcción de tu sitio web.</p>
                <div>
                <a className="button white" href="/contacto.html">Escríbenos ya mismo!</a>
                </div>
            </div>
            <div className="container">
                <Image className="image" src="/images/computer.svg" width={467} height={380}
                alt="Computadora EDsoft"/>
            </div>
            </div>
      </section>
    )
}

export default Banner