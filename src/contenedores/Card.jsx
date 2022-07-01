import logo2 from '../logo2.png';
import './Card.css';


const Card = () =>{

return(
    <>
    <body className="body card">
        <main className="main card-header">
            <header className="header">
                <figure className="header__professional-image-container">
                <img src={logo2} alt="sapo"
                    className="header__professional-image" />
                </figure>
            </header>
            <article className="article">
                <h1 className="article__title">Pringles</h1>
                <h2 className="article__keywords">👨‍💻Futuro Desarrollador👨‍💻 | 🌌Frontend🌌 | ⚛React⚛ | 💻Estudiante💻</h2>
                <p className="article__presentation">
                Developer Front End-DEsigner 
                </p>
            </article>
            <footer className="footer card-body">
                <a href="a" className="footer__link-icon-container">
                <img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" className="footer__link-icon" />
                </a>
                <a href="a" className="footer__link-icon-container">
                <img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" className="footer__link-icon" />
                </a>
                <a href="https://www.facebook.com/" className="footer__link-icon-container">
                <img src="https://i.postimg.cc/7YHyZXZX/facebook.png" alt="Facebook" className="footer__link-icon" />
                </a>
                <a href="https://github.com/SalvadorCT" className="footer__link-icon-container" >
                <img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" className="footer__link-icon" />
                </a>
                <a href="a" className="footer__link-icon-container">
                <img src="https://i.postimg.cc/dtPYcvbM/youtube.png" alt="YouTube" className="footer__link-icon" />
                </a>
                <a href="a" className="footer__link-icon-container">
                <img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Página Personal" className="footer__link-icon" />
                </a>
            </footer>
        </main>
    </body>
    </>
)
}

export default Card;