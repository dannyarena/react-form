import { useState } from "react";

function App() {

  // "articoli" contiene l'array, setArticoli può modificare quell'array
  const [articoli, setArticoli] = useState(["Il mio primo articolo","Viaggio a Roma", "Cosa ho mangiato oggi"]);

  return (
    <div>
      <h1>Lista articoli</h1>
    </div>
  )
}

export default App;