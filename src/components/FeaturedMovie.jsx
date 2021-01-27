import React from 'react';
import '../assets/styles/components/FeaturedMovie.scss';

const FeaturedMovie = ( props ) => {
    const { title, overview, backdrop_path, vote_average } = props;

    const backgroundImage = 'https://image.tmdb.org/t/p/w1280' + backdrop_path;
    
    return (
        <div className="featured-movie container-fluid px-0" style={{background: "url("+ backgroundImage +")"}}>
           <div className="featured-movie-info row m-0 p-4 py-md-5 mb-4 align-items-end">
                <div className="col-md-6 px-0">
                    <h1 className="display-2">{title}</h1>
                    <h6 className="text-success"><span class="badge rounded-pill bg-dark">{(vote_average * 100)/10}% Match</span></h6>
                    <p className="lead my-3 featured-movie-info__overview">{overview}</p>
                    <button type="button" className="btn btn-light btn-lg me-2"><i class="bi-alarm"></i>Large button</button>
                    <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovie;
