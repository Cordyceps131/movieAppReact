import { useState } from 'react'
import ListaCompras from './components/ListaCompras.jsx';
import InputCompra from './components/InputCompra.jsx'


function App() {
  const [input, setInput] = useState('');
  const [compras, setCompras] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() === '') {
      return;
    };
    setCompras([...compras, {id: crypto.randomUUID(),texto: input}])
    setInput('');
  }

  const apagarCompra = (id) => {
    setCompras(compras.filter(c => c.id !== id))
  }


  return (
    <>
      <InputCompra value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleSubmit} />
      <ListaCompras compras={compras} onClick={apagarCompra}/>
    </>
  )

}
export default App