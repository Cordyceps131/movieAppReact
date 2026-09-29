function InputCompra({ value, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default InputCompra;