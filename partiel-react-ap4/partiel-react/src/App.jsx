import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import Home from "./pages/Home";
//import NotFound from "./pages/NotFound";
import './App.css'
import './css/style.css'
import {useState, useEffect} from "react";
import AfficheFilm from "./components/AfficheFilm/AfficheFilm.jsx"
import films from "./data/data.json"

function App() {
    console.log(films);
    return (
        <>
            <div className="app">
                <div className="movie">
                    {films.map((film) => (
                        <AfficheFilm
                            key={film.movieId}
                            titre={film.titre}
                            date={film.date}
                            image={film.image}
                            pourcentage={film.pourcentage}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

/*<Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>*/

export default App;
