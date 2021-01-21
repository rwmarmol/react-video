import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import FeaturedMovie from '../components/FeaturedMovie';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ isLogedIn, wilcho, myList, user }) => {
    
    const popularMovies = useInitialState('discover/movie?sort_by=popularity.desc');
    const highestRatedMovies = useInitialState('discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc');
    const kidsMovies = useInitialState('discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc');
    const newDramas = useInitialState('discover/movie?with_genres=18&primary_release_year=2020');
    const animationMovies = useInitialState('discover/movie?with_genres=16&primary_release_year=2020');
    const comedyMovies = useInitialState('discover/movie?with_genres=35&primary_release_year=2020');
    const horrorMovies = useInitialState('discover/movie?with_genres=53&primary_release_year=2020');

    return(
      <>
        <Search />
        <h1 style={{background: "#74C3E1", padding: "20px"}}>HOLA { wilcho } y USer { user }</h1>
        


        <FeaturedMovie movie="Hola soy la movie" />    
        

        { myList.length > 0 &&
            <Categories title="Favorite Movies">
                <Carousel>
                    { myList.map(item => 
                        <CarouselItem 
                            key={item.id} 
                            {...item}
                            isList />
                    )}
                </Carousel>
            </Categories>
        }

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

      </>
    )
};

const mapStateToProps = state => {
    return {
        isLogedIn: state.isLogedIn,
        wilcho: state.wilcho,
        myList: state.myList,
    }
};

export default connect(mapStateToProps, null)(Home);
