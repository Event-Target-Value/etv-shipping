import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import Modal from '../client/src/components/ModalOne.jsx';
import Recoms from '../client/src/components/Recoms.jsx';

describe('<App />', () => {
   it('React App functional and correctly rendering', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
   });
});

describe('<Modal />', () => {
  it('Modal functional and correctly rendering', () => {
   const wrapper = shallow(
     <Modal />
   );
   expect(wrapper).toMatchSnapshot();
  });
});

