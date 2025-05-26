import { useState } from "react";

function App() {

  // "articoli" contiene l'array, setArticoli può modificare quell'array
  const [articoli, setArticoli] = useState(["Il mio primo articolo","Viaggio a Roma", "Cosa ho mangiato oggi"]);
  const [nuovoTitolo, setNuovoTitolo] = useState(""); //stato del form

  function handleSubmit(e) {
    e.preventDefault(); // impedisce il refresh
    setArticoli([...articoli, nuovoTitolo]);  // aggiunge il nuovo articolo
    setNuovoTitolo(""); //svuota l'input
  }
  return (
    <div>
      <h1>Lista articoli</h1>

        {/* elenco che con il metodo .map mostra a schermo il contenuto dell'array */}
      <ul>
        {articoli.map((titolo, index) => (
          <li key={index}>{titolo}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={nuovoTitolo}
        onChange={(e) => setNuovoTitolo(e.target.value)}
        placeholder="Scrivi un nuovo titolo"/>
        <button>Aggiungi</button>
      </form>
    </div>
  )
}

export default App;