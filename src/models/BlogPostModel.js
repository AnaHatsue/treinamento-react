export default class BlogPostModel {

    /**
     * Constrói um modelo padrão do componente BlogPost.
     * @param {String} titulo Título do post. 
     * @param {String} imagem Link da imagem do post.
     * @param {String} texto Texto do post.
     */
    constructor(titulo, imagem, texto) {
        this.titulo = titulo;
        this.imagem = imagem;
        this.texto = texto;
        this.exibirImagem = true;
    }

    
}