import "./Inicial.css";

export const Inicial = () => {
  return (
    <div className="content">
      <div className="logo">
        <img src="\logo.svg" />
      </div>
      <div className="translatorComponent">
        <div className="source">
          <div className="languageSelector">
            <button>Detectar idioma</button>
            <button>Inglês</button>
            <button>Português</button>
            <button>Espanhol</button>
          </div>
        </div>
        <div className="result">
          <div className="languageSelector">
            <button>Detectar idioma</button>
            <button>Inglês</button>
            <button>Português</button>
            <button>Espanhol</button>
          </div>
        </div>
      </div>
    </div>
  );
};
