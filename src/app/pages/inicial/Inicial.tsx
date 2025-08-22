import { useEffect, useRef, useState } from "react";
import "./Inicial.css";

export const Inicial = () => {
  const [selected, setSelected] = useState<LanguageKey>();
  const [translated, setTranslated] = useState<LanguageKey>();
  const [inputText, setInputText] = useState(""); // texto original
  const [outputText, setOutputText] = useState(""); // texto traduzido

  const languages = ["Inglês", "Português", "Espanhol"] as const;

  const langCodes = {
    Português: "pt",
    Inglês: "en",
    Espanhol: "es",
  } as const;

  type LanguageKey = keyof typeof langCodes;

  const handleTranslate = async () => {
    if (!selected || !translated || !inputText) return;

    const from = langCodes[selected];
    const to = langCodes[translated];

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        inputText
      )}&langpair=${from}|${to}`
    );
    const data = await response.json();
    setOutputText(data.responseData.translatedText);
  };

  const outputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (outputText && outputRef.current) {
      outputRef.current.classList.add("animate");

      setTimeout(() => {
        outputRef.current?.classList.remove("animate");
      }, 500);
    }
  }, [outputText]);

  return (
    <div className="content">
      <div className="logo">
        <img src="/logo.svg" />
      </div>
      <div className="translatorComponent">
        <div className="source">
          <div className="languageSelector">
            {languages.map((lang) => (
              <button
                key={lang}
                className={selected === lang ? "active" : ""}
                onClick={() => setSelected(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <div className="linha"></div>
          <div>
            <textarea
              placeholder="Escreva"
              className="writeField"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <button className="translateButton" onClick={handleTranslate}>
            <img src="./Sort_alfa.svg" className="icon" />
            Translate
          </button>
        </div>
        <div className="result">
          <div className="languageSelector">
            {languages.map((lang) => (
              <button
                key={lang}
                className={translated === lang ? "active" : ""}
                onClick={() => setTranslated(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <div className="linha"></div>
          <div>
            <textarea
              id="outputText"
              placeholder="Tradução"
              className="writeField"
              value={outputText}
              disabled
              ref={outputRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
