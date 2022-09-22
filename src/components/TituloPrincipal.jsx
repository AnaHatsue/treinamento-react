import React, {useState} from "react";
import { useEffect } from "react";

function TituloPrincipal(props) {

    //O useState retornará um "get e set" que pega o valor de "titulo" e atualiza-o com o valor de "setTitulo". Se o props estiver nulo quando iniciado, retornará "Olá..."
    const [titulo, setTitulo] = useState(props.titulo ?? "Olá, Mundo!")

    useEffect(() => {
        console.log("Título mudou.")
    }, [titulo]
    )
 
    /**
     * Função irá retornar um alerta ao usuário quando clicar em um componente.
     * @param {Event} event É o evento a ser realizado na página.
     * @return {alert} Uma mensagem ao usuário.
     */
    function clickCallBack(event) {
        alert("Obrigado por clicar em mim! =)");
    }

    /**
     * Função irá colocar o valor do "setTitulo" como o valor do evento que está sendo alterado.
     * @param {Event} event É o evento a ser realizado na página.
     */ 
    function inputChangeCallBack(event) {
    setTitulo(event.target.value);
    }

    //Irá retornar na tela um título <h1> clicável do tipo "text", nome "name", o seu valor será o próprio título e chamará a função inputChangeBack que irá mudar o nome do setTitulo para este valor.
    return (
        <div>
            <h1 onClick={clickCallBack}>{titulo}</h1>
            <input
                type="text"
                name="name"
                value={titulo}
                onChange={inputChangeCallBack}
            />
            <p className="AboutMe" onClick={clickCallBack}>
                {props.texto}
            </p>
        </div>
    )
}

export default TituloPrincipal;