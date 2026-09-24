import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';

const apiKey = import.meta.env.VITE_API_KEY

function App() {
  const [filmes, setFilmes] = useState([]);
  const [msg, setMsg] = useState(``);
  const [loading, setLoading] = useState(false);

  const buscar = async (titulo) => {
    setLoading(true);

    try {
      const resposta = await fetch(`https://www.omdbapi.com/?s=${titulo}&apikey=${apiKey}`);
      const dados = await resposta.json();
      if (resposta.Response === 'False') {
        setMsg('Não encontrámos nada')
        return;
      }
      setFilmes(dados.Search);

    } catch (error) {
      setMsg(`CATCH_ERRO: ${error}`);

    } finally {
      setLoading(false);
    }

  }
  console.log(filmes);

  return (
    <>

      <SearchBar onSearchBar={buscar}/>
      {loading && <p>A carregar...</p>}
      {msg && <p>{msg}</p>}
    </>
  )

}

export default App;