import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <h1>Done</h1>
        </div>
      )}
    </div>
  );
}

export default Detail;
