import React from "react";
import List from "./List";
import "./common.scss";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import GenreList from "./GenreList";
import All from "./All";

const App = () => {
    const genreList = ["Action", "Adventure", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir"];
    return (
        <div>
            <Header>
                <ul className="flex">
                    {genreList.map((it) => {
                        return (
                            <li>
                                <Link to={it}>{it}</Link>
                            </li>
                        );
                    })}
                </ul>
            </Header>
            <Routes>
                <Route path="/" element={<Main limit={50} />} />
                {genreList.map((it) => {
                    return <Route path={it} element={<GenreList genre={it} limit={20} />} />;
                })}
            </Routes>
            <All/>
            <List genre="Drama" limit={20} />
            <List genre="Action" limit={20} />
        </div>
    );
};

export default App;
