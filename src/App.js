import "./App.css";
import BlogPost from "./components/BlogPost";
import BlogPostModel from "./models/BlogPostModel";

function App() {
    const blogModel = new BlogPostModel(
        "Primeira postagem!",
        "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris.",
    );

    return (
      <div className="'ExemploDeClasseCSS">
        <BlogPost post={blogModel}></BlogPost>
      </div>
    )
}

export default App;
