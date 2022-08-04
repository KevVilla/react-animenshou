import { useEffect } from "react";

import HomeContainer from "../../containers/Home/HomeContainer";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";

import { fetchGetAnime } from "../../service/Anime/Anime";

import useAnime from "../../hooks/useAnime";

import "./Home.css";

const Home = () => {
  const { setAnimes, animes, loadingPage, setLoadingPage, darkPage } = useAnime();

  const getAnimes = async () => {
    try{
      setLoadingPage(true)
      const fetchAnimes = await fetchGetAnime();
      setAnimes([...fetchAnimes.data]);
    }
    finally{
      setLoadingPage(false)
    }
    
  };

  useEffect(() => {
    getAnimes();
  }, []);

  if(loadingPage){
    return(
      <HomeContainer>
        <Loading/>
      </HomeContainer>
    )
  }

  return (
    <HomeContainer>
      <div className={`home__container container ${darkPage && 'darkPage'}`}>
        {animes.map((anime,index) => (
          <Card key={`card-${anime.mal_id}-${index}`} anime={anime} />
        ))}
      </div>
    </HomeContainer>
  );
};

export default Home;
