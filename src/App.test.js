import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

it('renders withot chrashing', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
});
