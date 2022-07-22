import Link from "next/link"
import MainMenu from "./MainMenu"
import Image from "next/image" // 8. Importando Image

// 8. Recordemos que al usar el Image debemos de indicar el ancho y alto de la imagen

const Header = () => {
    return (
        <header className="main-header">
        <div className="content-wrapper">
          <Link href="/">
          <a>
            <Image src="/images/logo.svg" width={136} height={32}
            alt="Logo EDsoft"/>
          </a>
          </Link>
          <span id="open-menu-button" className="jam jam-menu"></span>
          <MainMenu/>
        </div>
      </header>
    )
}

export default Header