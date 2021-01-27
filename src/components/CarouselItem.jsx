import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

// Staticfiles
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/google-icon.png';

const CarouselItem = ( props ) => {
    
    const { id, title, poster_path, backdrop_path, release_date, vote_average, isList } = props;
    
    const handleSetFavorite = () => {
        props.setFavorite({
            id, title, poster_path, release_date, vote_average
        })
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    };

    return (
        <div className="custom-carousel-item">
            <img className="custom-carousel-item__img" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt=""></img>
            <div className="custom-carousel-item__details">
                <div>
                    <img className="custom-carousel-item__details--img" src={playIcon} alt="Play Icon"></img>
                    
                    {isList ?     
                        <img 
                            className="custom-carousel-item__details--img" 
                            src={removeIcon} alt="Remove Icon"
                            onClick={ () => handleDeleteFavorite(id) }>
                        </img> : 
     
                        <img 
                            className="custom-carousel-item__details--img" 
                            src={plusIcon} alt="Plus Icon"
                            onClick={handleSetFavorite}>
                        </img>
                    }
                </div>
                <h6 className="custom-carousel-item__details--title text-wrap">{title}</h6>
                <p className="custom-carousel-item__details--subtitle">{new Date(release_date).getFullYear()} <span className="votes"> {vote_average} / 10 Score</span></p>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
