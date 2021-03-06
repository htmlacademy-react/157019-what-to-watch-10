import { Film } from '../../types/film';
import { Link, useNavigate } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film
  activeCard: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

const SmallFilmCard = ({film, activeCard, onMouseEnter, onMouseLeave}: SmallFilmCardProps): JSX.Element => {

  const isPlaying = film.id === activeCard;
  const navigate = useNavigate();

  return (
    <article
      className = "small-film-card catalog__films-card"
      onMouseEnter = {() => onMouseEnter(film.id)}
      onMouseLeave = {onMouseLeave}
      onClick={() => navigate(`/films/${film.id}`)}
    >

      <div className="small-film-card__image">
        {
          isPlaying
            ? < VideoPlayer film={film} activeCard={activeCard}/>
            : <img src={film.previewImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
};

export default SmallFilmCard;
