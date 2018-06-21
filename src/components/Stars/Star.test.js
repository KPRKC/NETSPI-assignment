import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import thunkMiddleware from 'redux-thunk';
import Button from '@material-ui/core/Button';
import Stars from './Stars';
import DataTable from '../common/DataTable';
import stars from '../../../public/data/stars.json';

const middewares = [thunkMiddleware];
const mockStore = configureMockStore(middewares);
const store = mockStore({ stars });

describe('Stars', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Stars store={store} />).dive().dive();
    });

    it('Render Stars Component', () => {
        expect(component).toMatchSnapshot();
    });

    it('Should render the Data table and toggle button', () => {
        expect(component.dive().dive().find(DataTable)).toHaveLength(1);
        expect(component.dive().find(Button)).toHaveLength(1);
    });

    it('Should toggle the background color of the table when click on toggle button', () => {
        expect(component.state('tableBgColor')).toBe('#ccc');
        component.dive().find(Button).simulate('click');
        expect(component.state('tableBgColor')).toBe('#ffe6e6');
        component.dive().find(Button).simulate('click');
        expect(component.state('tableBgColor')).toBe('#ccc');
    });
});