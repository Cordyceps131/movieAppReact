function Botao({onClick, texto, cor}){
    return(
        <button onClick={onClick} style={{color: cor}}>{texto}</button>
    )
}

export default Botao;