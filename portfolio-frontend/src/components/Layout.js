// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container">
                    <Link href="/" className="navbar-brand">
                        Gaurav's Portfolio
                    </Link>
                    <div className="nav-links">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/projects" className="nav-link">Projects</Link>
                        <Link href="/certifications" className="nav-link">Certifications</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <a
                            href="/media/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container">{children}</main>
        </>
    );
}
