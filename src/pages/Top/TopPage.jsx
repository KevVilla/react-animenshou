import "./TopPage.css";

import HomeContainer from "../../containers/Home/HomeContainer";
import Loading from "../../components/Loading/Loading";
import Card from "../../components/Card/Card";

import { useEffect } from "react";

import useAnime from "../../hooks/useAnime";
import { fetchGetTopAnime } from "../../service/Anime/Anime";

const TopPage = () => {
  const { loadingPage, setLoadingPage, topAnimes, setTopAnimes } = useAnime();

  const getTopAnime = async () => {
    try {
      setLoadingPage(true);
      const fetchTopAnimes = await fetchGetTopAnime();
      setTopAnimes([...fetchTopAnimes.data]);
    } finally {
      setLoadingPage(false);
    }
  };

  useEffect(() => {
    getTopAnime();
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
      <div className="topPage__container container">
        {topAnimes.map((topAnime, index) => (
          <Card key={`topcard-${topAnime.mal_id}-${index}`} anime={topAnime} />
        ))}
      </div>
    </HomeContainer>
  );
};

export default TopPage;
