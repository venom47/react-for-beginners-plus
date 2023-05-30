import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import style from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    );
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={style.container}>
      {loading ? (
        <div className={style.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={style.movies}>
          {movies.map((movie, index) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
