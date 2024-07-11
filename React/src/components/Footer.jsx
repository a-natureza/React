import "../components/Componentes.css";
import "../components/Cores.css";
import "../components/Footer.css";
import "../components/Tipografia.css";

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="footer container">
          <img
            src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"
            alt="Bikcraft"
          ></img>
          <div className="footer-contato">
            <h3 className="font-2-1-b cor-0">Contato</h3>
            <ul className="font-2-m cor-5">
              <li>
                <a href="tel:+552199999999">+55 21 9999-9999</a>
              </li>
              <li>
                <a href="malito:contato@bikcraft.com">contato@bikcraft.com</a>
              </li>
              <li>Rua Ali Perto, 42, Botafogo</li>
              <li>Rio de Janeiro - RJ</li>
            </ul>
            <div className="footer-redes">
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg"
                  alt="Instagram"
                ></img>
              </a>
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg"
                  alt="Facebook"
                ></img>
              </a>
              <a href="./">
                <img
                  src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg"
                  alt="Youtube"
                ></img>
              </a>
            </div>
          </div>
          <div className="footer-informacoes">
            <h3 className="font-2-1-b cor-0">Informações</h3>
            <nav>
              <ul className="font-1-m cor-5">
                <li>
                  <a href="./bibiletas.html">Bicicletas</a>
                </li>
                <li>
                  <a href="./seguros.html">Seguros</a>
                </li>
                <li>
                  <a href="./contato.html">Contato</a>
                </li>
                <li>
                  <a href="./termos.html">Termos e Condições</a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="footer-copy font-2-m cor-6">
            Bikcraft © Alguns direitos reservados.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
