import Project from "../components/Projects/Project"
import { NextSeo } from "next-seo"

const Proyectos = ( { projects } ) => {
    return (
        <>
            <NextSeo
                title="Proyectos | EDsoft"
                description="Los proyectos de la empresa EDsoft"
            />
            <main className="main">
                <section className="projects-section section-container">
                    <h1>Nuestros Proyectos</h1>
                    <div className="content-wrapper">
                        {
                            projects.map(proj => (
                                <Project
                                    key={proj.title}
                                    title={proj.title}
                                    image={proj.image}
                                    description={proj.description}
                                    url={proj.url}
                                /> 
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const resp = await fetch("http://localhost:4050/projects")
    const projects = await resp.json()

    return {
        props: {
            projects
        }
    }
}

export default Proyectos