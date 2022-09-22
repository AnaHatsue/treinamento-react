import React, {useState} from "react";
import "./BlogPost.css";

/**
 * Função para criação do componente BlogPost.
 * @param {{post:BlogPostModel}} props O componente BlogPost.
 * @returns Um post no blog, com titulo, imagem e texto.
 */
function BlogPost(props) {

    //Uso de Hook para utilizar para colocar BlogPostModel instanciado no "post" e "setPost".
    const [post, setPost] = useState(props.post);

    //Uso do hook para definir "contador" e "setContador" como 0, enquanto ainda não há o evento que o modifique.
    const [contador, setContador] = useState(0);

    /**
     * Função para adicionar um número no "setContador".
     */
    function shareClickCallBack() {
        setContador(contador + 1);
    }

    /**
     * Função para mudar para false a checkbox de "exibirImagem".
     * @param {Event} event - Evento que será onClick.
     */
    function checkboxChangeBack(event) {
        const novoValorExibirImagem = !post.exibirImagem;

        //Chama a variável setPost e muda a checkbox para "novoValorExibirImagem".
        setPost({ ...post, exibirImagem: novoValorExibirImagem });
    }

    //Criação da variável "imgTag" para abrigar a nova função checkboxChangeCallback. 
    let imgTag = <div></div>;
      if (post.exibirImagem) {
        imgTag = <img src={post.imagem} alt={post.titulo} />;
    }

    return (
        <article className="blogPost">
            <h2>{post.titulo}</h2>
            <div>
                <input
                    type="checkbox"
                    defaultChecked={post.exibirImagem}
                    onChange={checkboxChangeBack}
                /> {" "}
                Exibir imagem?
            </div>
            {imgTag}
            <p>{post.texto}</p>
            <button class="share" onClick={shareClickCallBack}>
                Compartilhar!
            </button>
            <div>{contador}</div>
        </article>
    )
}

export default BlogPost;