import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [movie, setMovie] = useState("");
  const [input, setInput] = useState("");
    const getMovie = async () => {
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${input}`);
        console.log(res.data.data.movies)
    };

    useEffect(()=>{
      getMovie()
    }, []);

    const searchHandler = e => {
      setInput(e.target.value)
      console.log(input)
    }

    return (
        <div className="Search">
            <form>
                <input type="text" onChange={searchHandler}/>
                <button>
                    <i className="xi-search"></i>
                </button>
            </form>
        </div>
    );
};

export default Search;
