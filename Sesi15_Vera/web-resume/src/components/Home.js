export default function Home({ id }){
    return(    
        <section  className="d-flex flex-column justify-content-center hero" id={id}>
            <div className="container">
            <h1 id="nama">Vera</h1>
            <p id="desc">I'm <span>Front End Developer</span></p>
            <div className="social-links-home">
                <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </section>      
    );
}