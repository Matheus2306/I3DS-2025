import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

const App = () => {
  const [search, setsearch] = useState("");
  const [movies, setmovies] = useState([]);

  //utilizando chave de API do arquivo .env

  const apiKey = "e4d577fa"
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //alimentando com dados para não ficar nulo
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  //criando a conexão com a api trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setmovies(data.Search);
  };

  const handleKeypress = (e) => {
    //e= event | ao clicar ou digitar acontece algo
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div>
      <div id="app">
        <img className="logo" src={logo} alt="" />
        <div className="search">
          <input
            onKeyDown={handleKeypress}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Pesquise por filmes"
          />
          <img
            onClick={() => searchMovies(search)}
            src={lupa}
            alt=""
          />
        </div>
      </div>
      {/* mapeando o array de "movies" ou seja buscando os dados guardados na API ou array */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
            // ...movie traz todos os dados guardados no DB ou array
          ))}
        </div>
      ) : (
        <h2 className="empty">Filme não encontrado</h2>
      )}
      <Footer
        DEVname="Matheus Felipe Rodrigues"
        DEVLInk="https://github.com/Matheus2306"
      />
    </div>
  );
};

export default App;
