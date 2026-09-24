import { useState } from 'react';

function SearchBar({ onSearchBar }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            setInput('Insere um título!')
            setTimeout(() => {
                setInput('');
            }, 1000);
            return;
        }
        onSearchBar(input.trim())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" value={input} placeholder="Search movies..." onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Pesquisar</button>
        </form>
    )

}

export default SearchBar;