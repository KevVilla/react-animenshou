import "./MangaPage.css";

import HomeContainer from "../../containers/Home/HomeContainer";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";

import { useEffect } from "react";

import useAnime from "../../hooks/useAnime";
import { fetchGetManga } from "../../service/Manga/Manga";

const MangaPage = () => {
  const { loadingPage, setLoadingPage, mangas, setMangas } = useAnime();

  const getMangas = async () => {
    try {
      setLoadingPage(true);
      const fetchMangas = await fetchGetManga();
      setMangas([...fetchMangas.data]);
    } finally {
      setLoadingPage(false);
    }
  };

  useEffect(() => {
    getMangas();
  }, []);

  if (loadingPage) {
    return (
      <HomeContainer>
        <Loading />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <div className="mangaPage__container container">
        {mangas.map((manga, index) => (
          <Card key={`mangacard-${manga.mal_id}-${index}`} manga={manga} />
        ))}
      </div>
    </HomeContainer>
  );
};

export default MangaPage;
