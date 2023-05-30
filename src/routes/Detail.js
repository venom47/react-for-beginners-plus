import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setLoading((prev) => !prev);
      setMovie(json.data.movie);
    };
    getMovie();
  }, [url]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary=""
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
