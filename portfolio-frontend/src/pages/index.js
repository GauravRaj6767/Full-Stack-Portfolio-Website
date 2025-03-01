// pages/index.js
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Gaurav's Portfolio</title>
      </Head>
      <div className="hero">
        <h1>Welcome to Gaurav's Portfolio!</h1>
        <p>Built using Django API and Nextjs, this showcases my projects and certifications.</p>
        <a className="btn" href="/projects">
          View Projects
        </a>
      </div>
    </Layout>
  );
}
