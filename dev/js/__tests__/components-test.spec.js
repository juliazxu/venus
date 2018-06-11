import React from 'react'
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import createLogger from 'redux-logger';
import promise from 'redux-promise';

import rootReducer from './../reducers/allReducers';
import {Input} from './../components/Input';
import {Output} from './../components/Output';
import {VoicePlayer} from './../components/VoicePlayer';

const logger = createLogger();

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

const middlewares = [thunk, promise, logger];
const mockStore = configureMockStore(middlewares);

// Add tests