import { useState } from "react";

function App() {

  // "articoli" contiene l'array, setArticoli può modificare quell'array
  const [articoli, setArticoli] = useState(["Il mio primo articolo","Viaggio a Roma", "Cosa ho mangiato oggi"]);

  return (
    <div>
      <h1>Lista articoli</h1>

        {/* elenco che con il metodo .map mostra a schermo il contenuto dell'array */}
      <ul>
        {articoli.map((titolo, index) => (
          <li key={index}>{titolo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;