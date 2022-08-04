import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import useAnime from "../../hooks/useAnime";
import "./Card.css";

const Card = ({ anime, manga }) => {
  const {darkPage} = useAnime()
  if (manga == undefined) {
    return (
      <div className={`card ${darkPage && 'darkPage'}`}>
        <div className={`card__face1 ${darkPage && 'darkPage--card'}`}>
          <figure className="card__picture">
            <img
              className="card__image"
              src={anime.images.jpg.image_url}
              alt=""
            />
          </figure>
          <p className={`card__title--face1 ${darkPage && 'darkPage--letter'}`}>{anime.title}</p>
        </div>
        <div className={`card__face2 ${darkPage && 'darkPage--card'}`}>
          <p className={`card__title--face2 ${darkPage && 'darkPage--letter'}`}>{anime.title}</p>
          <div className="card__information">
            <p className="card__information--title">Episodes:</p>
            <p className="card__information--detail">{anime.episodes}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Duration:</p>
            <p className="card__information--detail">{anime.duration}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Status:</p>
            <p className="card__information--detail">{anime.status}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Year:</p>
            <p className="card__information--detail">{anime.year}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Score:</p>
            <p className="card__information--detail">{anime.score}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Rating:</p>
            <p className="card__information--detail">{anime.rating}</p>
          </div>
          <div className="card__genres">
            <p style={{ marginRight: "5px", fontWeight: 600 }}>Genres:</p>
            {anime.genres.map((genre) => (
              <TicketCard key={`ticket-${genre.name}`} genre={genre.name} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`card ${darkPage && 'darkPage'}`}>
        <div className={`card__face1 ${darkPage && 'darkPage--card'}`}>
          <figure className="card__picture">
            <img
              className="card__image"
              src={manga.images.jpg.image_url}
              alt=""
            />
          </figure>
          <p className={`card__title--face1 ${darkPage && 'darkPage--letter'}`}>{manga.title}</p>
        </div>
        <div className={`card__face2 ${darkPage && 'darkPage--card'}`}>
          <p className={`card__title--face2 ${darkPage && 'darkPage--letter'}`}>{manga.title}</p>
          <div className="card__information">
            <p className="card__information--title">Chapters:</p>
            <p className="card__information--detail">{manga.chapters}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Volumes:</p>
            <p className="card__information--detail">{manga.volumes}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Status:</p>
            <p className="card__information--detail">{manga.status}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Published:</p>
            <p className="card__information--detail">{`${manga.published.string}`}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Score:</p>
            <p className="card__information--detail">{manga.score}</p>
          </div>
          <div className="card__information">
            <p className="card__information--title">Rank:</p>
            <p className="card__information--detail">{manga.rank}</p>
          </div>
          <div className="card__genres">
            <p style={{ marginRight: "5px", fontWeight: 600 }}>Genres:</p>
            {manga.genres.map((genre) => (
              <TicketCard key={`ticket-${genre.name}`} genre={genre.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
