import Moviedescription from "../Moviedescription/Moviedescription";
import styles from "./Moviecard.module.css";

const MovieCard = ({apiUrl, ...props}) => {
  return (
    <>
    <div className={styles.movie}>
      <div>
        <p>{props.Year}</p>
      </div>
      <div>
        <img src={props.Poster} alt="" />
      </div>
      <div>
        <span>{props.Type}</span>
        <h3>{props.Title}</h3>
      </div>
    </div>
      <Moviedescription apiUrl={apiUrl} movieId={props.imdbID}/>
    </>
  );
};

export default MovieCard;
