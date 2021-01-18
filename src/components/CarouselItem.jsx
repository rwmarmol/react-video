import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

// Staticfiles
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ title, poster_path, release_date, vote_average }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt=""></img>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"></img>
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"></img>
            </div>
            <h2 className="carousel-item__details--title">{title}</h2>
            <p className="carousel-item__details--subtitle">{new Date(release_date).getFullYear()} <span className="votes"> {vote_average} / 10 Score</span></p>
        </div>
     </div>
);

CarouselItem.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
};

export default CarouselItem;
