import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const App = () => {
    
    const popularMovies = useInitialState('discover/movie?sort_by=popularity.desc');
    const highestRatedMovies = useInitialState('discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc');
    const kidsMovies = useInitialState('discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc');
    const newDramas = useInitialState('discover/movie?with_genres=18&primary_release_year=2020');
    const animationMovies = useInitialState('discover/movie?with_genres=16&primary_release_year=2020');
    const comedyMovies = useInitialState('discover/movie?with_genres=35&primary_release_year=2020');
    const horrorMovies = useInitialState('discover/movie?with_genres=53&primary_release_year=2020');

    return(
      <div className="App">
        <Header />
        <Search />

        <Categories title="Popular Movies">
          <Carousel>
           { popularMovies.results.map(item => 
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>

        <Categories title="Highest Rated Movies">
          <Carousel>
           { highestRatedMovies.results.map(item => 
              <CarouselItem key={item.id} {...item} />
           )}
          </Carousel>
        </Categories>
       
        <Categories title="Popular Dramas">
          <Carousel>
           { newDramas.results.map(item => 
              <CarouselItem key={item.id} {...item} />
           )}
          </Carousel>
        </Categories>    
       
        <Categories title="Comedies">
          <Carousel>
           { comedyMovies.results.map(item => 
              <CarouselItem key={item.id} {...item} />
           )}
          </Carousel>
        </Categories>
       
        <Categories title="Horror Movies">
          <Carousel>
           { horrorMovies.results.map(item => 
              <CarouselItem key={item.id} {...item} />
           )}
          </Carousel>
        </Categories>
       
        <Categories title="For Kids">
          <Carousel>
           { animationMovies.results.map(item => 
              <CarouselItem key={item.id} {...item} />
           )}
          </Carousel>
        </Categories>
       
        <Footer/>
      </div>
    )
};

export default App;
