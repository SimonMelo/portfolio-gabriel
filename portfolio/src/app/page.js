import ContactButton from "./components/ContactButton";
import Form from "./components/Form";
import ContactInfo from "./components/ContactInfo";
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
        <div id="project-section" className="p-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mt-12 mb-8" id="title-project">Aplicações</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="div-projects">
            {/* Primeira linha */}
            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">Frontend de um formulário de pesquisa</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      href="https://github.com/SimonMelo/form-page"
                      target="_blank"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>



            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">API de um formulário de pesquisa</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      target="_blank"
                      href="https://github.com/SimonMelo/form-search-api"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>



            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">Frontend de um sistema de ponto</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      target="_blank"
                      href="https://github.com/SimonMelo/Punching-system"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>



            {/* Segunda linha */}
            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">API de um sistema de ponto</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      href="https://github.com/SimonMelo/puching-system-backend/tree/main/Backend"
                      target="_blank"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>



            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">API de pagamento</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      href="https://github.com/SimonMelo/api-payment/tree/master"
                      target="_blank"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>



            <div class="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#ff0000]">
              <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                <div class="group relative flex flex-col items-center">
                  <span class="text-center">API de um projeto universitário</span>
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 transition-all duration-500 hover:from-[#331029] hover:to-[#ff000]"
                  >
                    <a
                      href="https://github.com/SimonMelo/squad-1-api"
                      target="_blank"
                    >
                      <svg
                        class="w-5"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </button>
                </div>
              </div>
              <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>


          </div>
        </div>
      </section>
      <section id="contato">
        <div id="contact-section">
          <div>
            <ContactInfo/>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;