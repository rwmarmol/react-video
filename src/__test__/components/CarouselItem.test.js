import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CarouselItem from '../../components/CarouselItem';

describe('<CarouselItem />', () => {
    
    test('Should render FeaturedMovie Correctly', () => {
        const carouselItem = shallow(
            <ProviderMock>
                <CarouselItem />
            </ProviderMock>,
        );
        expect(carouselItem.length).toEqual(1);
    })

})
