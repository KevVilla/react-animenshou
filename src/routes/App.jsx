import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AnimeProvider } from "../context/AnimeProvider";

import Home from "../pages/Home/Home";
import TopPage from "../pages/Top/TopPage";
import MangaPage from "../pages/Manga/MangaPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AnimeProvider>
              <Home />
            </AnimeProvider>
          }
        />
        <Route
          path="/top"
          element={
            <AnimeProvider>
              <TopPage />
            </AnimeProvider>
          }
        />
        <Route
          path="/mangas"
          element={
            <AnimeProvider>
              <MangaPage />
            </AnimeProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
