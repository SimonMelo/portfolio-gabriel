import ContactButton from "./components/ContactButton";
import Navbar from "./components/NavBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="inicio">
        <div id="home-section">
          <div id="div-img">

          </div>
          <div className="animated-content" id="text-area">
            <blockquote>
              <h2>"O futuro pertence àqueles que estão dispostos a aprender e se adaptar"</h2>
              <footer className="mt-3" id="cite">
                <span>- <cite>Satya Nadella, CEO da Microsoft</cite></span>
              </footer>
            </blockquote>
            <ContactButton />
          </div>
        </div>
      </section>
      <section id="sobre-mim">
        <div id="about-section">
          <div id="about-me">
            <h2 id="about-title">Sobre mim</h2>
            <p id="p-me">
              Me chamo Gabriel Melo e sou um estudante de Análise e Desenvolvimento de Sistemas (ADS) na Unit. Durante um ano, tive a oportunidade de atuar como Desenvolvedor Frontend no banco digital <a href="https://www.delbank.com.br" target="_blank" id="delbank-name">Delbank</a>. Nessa experiência pude trabalhar em diversos projetos, frameworks e linguagens.
              <br/><br/>
              Atualmente, estou em busca de aperfeiçoamento em minha stack de desenvolvimento para me tornar um desenvolvedor FullStack. Acredito na importância de adquirir conhecimento em todas as camadas de uma aplicação, desde o frontend até o backend, para criar soluções mais completas e eficientes.
            </p>
          </div>
          <div id="text-area">
            
          </div>
        </div>
      </section>
      <section id="projetos">
        <h2>Projetos</h2>
        {/* Conteúdo da seção Projetos */}
      </section>
      <section id="contato">
        <h2>Contato</h2>
        {/* Conteúdo da seção Contato */}
      </section>
    </div>
  );
};

export default Home;