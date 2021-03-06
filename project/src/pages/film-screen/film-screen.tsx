
import { Link, useNavigate, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import FilmOverview from '../../components/film-overview/film-overview';
import { Film } from '../../types/film';

type FilmScreenProps = {
  filmsData: Film[]
}

const FilmScreen = ({ filmsData }: FilmScreenProps):JSX.Element => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const currentFilm = filmsData.find((item) => item.id === id) as Film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={ currentFilm.backgroundImage } alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a href="/#" className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{ currentFilm.genre }</span>
                <span className="film-card__year">{ currentFilm.released }</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={()=> navigate(`/player/${currentFilm.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={ currentFilm.posterImage } alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <FilmOverview currentFilm={currentFilm} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList filmsData={[]} />
          </div>
        </section>

        <footer className="page-footer">

          <Logo/>

          <div className="copyright">
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
export default FilmScreen;
