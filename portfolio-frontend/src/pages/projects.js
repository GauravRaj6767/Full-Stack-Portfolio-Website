import { useEffect, useState } from 'react'
import styles from '../styles/Projects.module.css'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/projects/')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error fetching projects:', err))
    }, [])

    return (
        <div className={styles.container}>
            <h1>Projects</h1>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.github_link && (
                            <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
                        )}
                        {project.live_link && (
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
