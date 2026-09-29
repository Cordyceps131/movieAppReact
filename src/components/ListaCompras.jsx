function ListaCompras({ compras, onClick }) {
    return (
        <ul>{
            compras.map(c =>
                <li key={c.id} style={{ marginLeft: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5em", maxWidth: "300px" }}>
                    {c.texto}
                    <button onClick={() => onClick(c.id)}>X</button>
                </li>
            )
        }</ul>
    )
}

export default ListaCompras;