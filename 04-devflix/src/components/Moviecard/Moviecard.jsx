import { useState } from "react";
import Moviedescription from "../Moviedescription/Moviedescription";

const MovieCard = (props) => {
  const [isMdalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isMdalOpen)
  };

  return (
    <>
      <div onClick={toggleModal} className={styles.movie}>
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
      {isMdalOpen && (
        <Moviedescription click={toggleModal} apiUrl={props.apiUrl} movieId={props.imdbID} />
      )}
    </>
  );
};

export default MovieCard;
