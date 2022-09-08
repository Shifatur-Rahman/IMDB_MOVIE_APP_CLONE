import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Homepage } from "./homepage/Homepage";
import MovieList from "./components/movieList/MovieList";
import MovieDetails from "./MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="movie/:id" element={<MovieDetails />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
