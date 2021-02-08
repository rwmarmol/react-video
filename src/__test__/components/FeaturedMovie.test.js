import React from 'react';
import { mount } from 'enzyme';
import FeaturedMovie from '../../components/FeaturedMovie';

describe('<FeaturedMovie />', () => {
    
    test('Should render FeaturedMovie Correctly', () => {
        const featuredMovie = mount(<FeaturedMovie />);
        expect(featuredMovie.find('.display-2').text()).toBeDefined();
        expect(featuredMovie.find('.featured-movie-info__overview').text()).toBeDefined();
    })

})
