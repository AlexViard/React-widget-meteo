/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
// Import du reducer
import reducer from '../reducers';
// Ajout du middleware meteo
import weather from '../middlewares/weather';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            weather,
        ),
    ),
);

export default store;
