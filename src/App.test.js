import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Stars from './components/Stars';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('render App Component', () => {
    expect(component).toMatchSnapshot();
    expect(component.find(Stars)).toHaveLength(1);
  });
});