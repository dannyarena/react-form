import { useState } from "react";

function App() {

  // "articoli" contiene l'array, setArticoli può modificare quell'array
  const [articoli, setArticoli] = useState(["Il mio primo articolo","Viaggio a Roma", "Cosa ho mangiato oggi"]);
  const [nuovoTitolo, setNuovoTitolo] = useState(""); //stato del form

  const [indexInModifica, setIndexInModifica] = useState(null);  //stato che memmorizza l'indice da modficare
  const [titoloModificato, setTitoloModificato] = useState ("");  //stato che memorizza cosa stiamo scrivendo

  function handleSubmit(e) {
    e.preventDefault(); // impedisce il refresh
    setArticoli([...articoli, nuovoTitolo]);  // aggiunge il nuovo articolo
    setNuovoTitolo(""); //svuota l'input
  }

    // funzione per eliminare un articolo
    function rimuoviArticolo(indexDaRimuovere) {
      const nuoviArticoli = articoli.filter((_, index) => index !== indexDaRimuovere);
      setArticoli(nuoviArticoli);
    }

  return (
    <div>
      <h1>Lista articoli</h1>

        {/* lista che con il metodo .map mostra a schermo il contenuto dell'array */}
      <ul>
        {articoli.map((titolo, index) => (
          <li key={index}>
            {indexInModifica === index ? (
               <>
                <input
                type="text"
                value={titoloModificato}
                onChange={(e) => setTitoloModificato(e.target.value)}
              />
              <button onClick={salvaModifica}>Salva</button>
               </>
                ) : (
              <span>{titolo}</span>
            )}

          <button onClick={() => {
            setIndexInModifica(index);
            setTitoloModificato(titolo);
          }}>✏️</button>
          <button onClick={() => rimuoviArticolo(index)}>🗑</button>
          </li>
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
  function salvaModifica() {
    const copia = [...articoli];  //viene fatta una copia dell'array precedente
    copia[indexInModifica] = titoloModificato; // Sostituisce l'articolo all'indice scelto con il nuovo titolo scritto dall'utente
    setArticoli(copia);// Aggiorna lo stato articoli con la nuova lista modificata
    setIndexInModifica(null);  // si esce fuori dalla modalità modifica
  } 
  
}

export default App;