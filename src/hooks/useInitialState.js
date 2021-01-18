import React, { useState, useEffect } from 'react';

const useInitialState = (apiUrl) => {

    const [ movies, setMovies ] = useState({results: []});
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = '3b5665a24250c4eb35a70fe710a1c683';
    const url = baseUrl + apiUrl + '&api_key=' + apiKey;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);
    return movies;
};

export default useInitialState;
