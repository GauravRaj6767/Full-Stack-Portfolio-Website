import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My Portfolio</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/projects">Projects</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/certifications">Certifications</Link>
      </nav>
      <p>Welcome to my portfolio website! Explore my projects and learn more about my work.</p>
    </div>
  )
}
