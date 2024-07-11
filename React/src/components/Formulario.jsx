import { useState } from "react";
import "../components/Componentes.css";
import "../components/Contato.css";
import "../components/Cores.css";
import "../components/Tipografia.css";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarForm() {
    const form = {
      nome,
      email,
      mensagem,
    };
    console.log("Formulário a ser enviado: ", form);
  }

  return (
    <>
      <div className="contato-formulario" aria-label="Formulário">
        <fieldset>
          <label>Nome: </label>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label>E-mail: </label>
          <input
            type="text"
            placeholder="contato@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label>Mensagem: </label>
          <textarea
            type="text"
            placeholder="O que você precisa?"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </fieldset>

        <button className="botao col-2" onClick={() => enviarForm()}>
          Enviar
        </button>
      </div>
    </>
  );
}

export default Formulario;
