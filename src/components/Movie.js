import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={style.movie}>
      <img className={style.movie__img} src={coverImg} alt={title} />
      <h2 className={style.movie__title}>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={style.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={style.movie__genres}>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
