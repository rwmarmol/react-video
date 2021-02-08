import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    test('Should render Footer Correctly', () => {
        const footer = mount(<Footer />);
        expect(footer.length).toEqual(1);
    })
})

describe('Footer Snapshot', () => {
    test('Footer Component UI', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    })
})