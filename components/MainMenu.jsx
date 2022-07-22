const MainMenu = () => {
    return (
        <>
        <nav id="main-menu" className="main-menu">
            <span id="close-menu-button" className="jam jam-close"></span>
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/quienes-somos">¿Quiénes somos?</a>
              </li>
              <li>
                <a href="/proyectos">Proyectos</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
        </nav>
        </>
    )
}

export default MainMenu