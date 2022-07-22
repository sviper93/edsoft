// import Link from "next/link"
import AboutUs from "../components/Home/AboutUs"
import Banner from "../components/Home/Banner"
import Jobs from "../components/Home/Jobs"
import Projects from "../components/Home/Projects"
import Services from "../components/Home/Services"
import { NextSeo } from "next-seo"

export default function Home({services, projects}) {

  return (
    <>
    <NextSeo
      title="Bienvenidos | EDsoft"
      description="Página de inicio de nuestro sitio web EDsoft"
    />
    <main>
      <Banner/>
      <Services services={services}/>
      <AboutUs/>
      <Projects projects={projects}/>
      <Jobs/>
    </main>
    </>
  )
}


// export async function getStaticProps() { 7. Cambiado por getServerSideProps
// export async function getServerSideProps() {
export async function getStaticProps() { // 8. Vuelve a ser estático... -.-
  // const resp = await fetch("http://localhost:4050/services") 5. Haciendo prueba
  const resp = await fetch("http://edsoft.vercel.app/api/services")
  const services = await resp.json()
  // const resp1 = await fetch("http://localhost:4050/last-projects") 5. Haciendo prueba
  const resp1 = await fetch("http://edsoft.vercel.app/api/last-projects")
  const projects = await resp1.json()

  return {
    props: {
      services,
      projects
    }
  }
}