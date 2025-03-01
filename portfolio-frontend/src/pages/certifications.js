// pages/certifications.js
import { useEffect, useState } from 'react';
import styles from '../styles/Certifications.module.css';

export default function Certifications() {
    const [certs, setCerts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/certifications/')
            .then((res) => res.json())
            .then((data) => setCerts(data))
            .catch((err) => console.error('Error fetching certifications:', err));
    }, []);

    return (
        <div className={styles.container}>
            <h1>Certifications</h1>
            <ul className={styles.certList}>
                {certs.map((cert) => (
                    <li key={cert.id} className={styles.certItem}>
                        <h2>{cert.title}</h2>
                        <p>{cert.details}</p>
                        <p><strong>Issuer:</strong> {cert.issuer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
