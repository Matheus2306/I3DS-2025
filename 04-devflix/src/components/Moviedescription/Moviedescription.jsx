// Importa os estilos específicos para este componente
import styles from "./Moviedescription.module.css";
import devflix from "../../../public/favicon.png";
// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Define o componente funcional Moviedescription que recebe props como argumento
const Moviedescription = (props) => {
  // Declara um estado chamado movieDesc e uma função setMovieDesc para atualizá-lo, inicializado como um array vazio
  const [movieDesc, setMovieDesc] = useState([]);

  // useEffect é um hook que executa um efeito colateral. Neste caso, ele será executado após cada renderização do componente
  useEffect(() => {
    // Função que fará a conexão com a API e trará os dados do filme baseado no link fornecido
    fetch(`${props.apiUrl}&i=${props.movieId}`) // Faz uma requisição à API usando a URL e o ID do filme passados via props
      .then((response) => response.json()) // Converte a resposta da API para JSON
      .then((data) => setMovieDesc(data)) // Atualiza o estado movieDesc com os dados recebidos da API
      .catch((error) => console.error(error)); // Captura e exibe qualquer erro que ocorrer durante a requisição
  }, []);

  return (
    <div className={styles.modalBackdrop} onClick={props.click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt={props.Title} />
          <button className={styles.btnClose} onClick={props.click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devflix} alt="" />
              {movieDesc.Type}
              <h1>{movieDesc.Title}</h1>
              <a href="https://google.com" target="_blank">
                Assista
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerFlex}>
            Avaliação : {movieDesc.imdbRating} | Duração {movieDesc.Runtime} |{" "}
            {movieDesc.Released}
          </div>
        </div>
        <div className={styles.desc}>
          <div className={styles.containerFlex}>
            <p>Elenco: {movieDesc.Actors}</p>
            <p>Gênero: {movieDesc.Genre}</p>
          </div>
          <p>Sinopse: {movieDesc.Plot}</p>
        </div>
      </div>
    </div>
  );
};

// Exporta o componente Moviedescription para que possa ser utilizado em outros arquivos
export default Moviedescription;
