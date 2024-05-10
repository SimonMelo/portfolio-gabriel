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
              Me chamo Gabriel Melo e sou um estudante de Análise e Desenvolvimento de Sistemas (ADS) na Unit. Durante um ano, tive a oportunidade de atuar como Desenvolvedor
              Frontend no banco digital <a href="https://www.delbank.com.br" target="_blank" id="delbank-name">Delbank</a>.
              Nessa experiência pude trabalhar em diversos projetos com diversos frameworks e linguagens.
              <br /><br />
              Atualmente, estou em busca de aperfeiçoamento em minha stack de desenvolvimento para me tornar um desenvolvedor FullStack. Acredito na importância de adquirir
              conhecimento em todas as camadas de uma aplicação, desde o frontend até o backend, para criar soluções mais completas e eficientes.
            </p>
          </div>
          <div id="skills" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="col-span-full mb-4">
              <h2 id="title-skills" class="text-center font-bold">Principais Tecnologias</h2>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">Javascript</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">NodeJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">ReactJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">NextJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">VueJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">Postman</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">ExpressJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">NestJS</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">.NET</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">MySQL</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">SQLite</p>
            </div>
            <div class="skills-item bg-gray-100 p-4 rounded-md transition duration-300 ease-in-out hover:bg-red-500 hover:text-white">
              <p class="text-center font-bold">GIT</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projetos">
        <div id="project-section" className="p-4">
          <h2 className="text-3xl font-bold text-center mt-12 mb-8" id="title-project">Aplicações</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="div-projects">
            {/* Primeira linha */}
            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">Frontend de um formulário de pesquisa</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">API de formulário de pesquisa</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">Frontend de um sistema de jornada trabalhista</p>
            </div>

            {/* Segunda linha */}
            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">API de um sistema de jornada trabalhista</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">API de pagamento</p>
            </div>

            <div className="flex flex-col items-center justify-center bg-white p-2 sm:p-4 rounded-lg shadow-md div-proj mx-auto">
              <div className="w-16 h-16 rounded-full mb-4"></div>
              <p className="text-center text-sm">API de projeto universitário </p>
            </div>
          </div>
        </div>
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