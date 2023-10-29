import { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./App.css";
import { LiaFreeCodeCamp } from "react-icons/lia";
import {
  FaExpandArrowsAlt,
  FaFreeCodeCamp,
  FaArrowsAltH,
} from "react-icons/fa";

const defaultMarkdown = `
# Bem-vindo ao meu React Markdown Previewer!
## Este é um subtítulo...
### E aqui estão outras coisas legais:
Aqui está um código, \`<div></div>\`, entre 2 crases.
\`\`\`
// este é o código multilinha:
function outroExemplo(primeiraLinha, últimaLinha) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    retornar multiLineCode;
  }
}
\`\`\`
Você também pode deixar o texto em **negrito**... uau!
Ou _itálico_.
Ou ambos!_**
Há também [links](https://www.freecodecamp.com) e
> Bloquear citações!
![Logotipo do React com texto](https://seeklogo.com/images/R/react-logo-D95A746C77-seeklogo.com.png)
- E claro que existem listas.
  - Alguns estão com balas.
      - Com diferentes níveis de indentação.
        - Isso é assim.
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div className="container">
      <div className="editorWrap">
        <div className="toolbar">
          <i className="fa LiaFreeCodeCamp">
            <LiaFreeCodeCamp />
          </i>
          <span className="tools_title">editor</span>
          <button className="fa FaExpandArrowsAlt">
            <FaExpandArrowsAlt />
          </button>
        </div>
        <textarea
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        ></textarea>
      </div>
      <i className="fa FaArrowsAltH">
        <FaArrowsAltH />
      </i>
      <div className="previewWrap">
        <h1>Visualizador TextDown</h1>
        <div className="toolbar">
          <i className="fa LiaFreeCodeCamp">
            <LiaFreeCodeCamp />
          </i>
          <span className="tools_title">visualizador</span>
          <button className="fa FaExpandArrowsAlt">
            <FaExpandArrowsAlt />
          </button>
        </div>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
