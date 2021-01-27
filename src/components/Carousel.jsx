import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
    <section className="custom-carousel">
        <div className="custom-carousel__container">
            { children }
        </div>
    </section>
);

export default Carousel;
