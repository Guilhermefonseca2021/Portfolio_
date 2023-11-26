export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Guilherme</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Especialista em desenvolvimento Front End com ReactJS e NodeJS
            <br /> Habilidades para criar soluções excepcionais e projetos
          </p>
        </div>
        <button className="btn btn-primary">
          <a
            className="text--decoration"
            href="www.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207"
          >
            Entrar em contato
          </a>
        </button>
      </div>
    </section>
  );
}
