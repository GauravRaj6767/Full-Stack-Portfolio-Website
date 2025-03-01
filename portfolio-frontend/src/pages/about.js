import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
import Head from 'next/head';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - Gaurav's Portfolio</title>
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.description}>
                    I am a full-stack developer passionate about creating beautiful, efficient, and user-friendly web applications. Explore my projects, certifications, and resume to learn more about my work and experience.
                </p>
            </div>
        </Layout>
    );
}
