/* eslint-disable import/no-anonymous-default-export */
import api from '../api';
import {
    GET_WEATHER,
    setWeather,
} from '../actions';

// const API_KEY = 'd46d6a86a587f6c3dd0c9dbd1ba48c0f';

export default (store) => (next) => (action) => {
    switch (action.type) {
        case GET_WEATHER: {
            const { inputValue } = store.getState();
            api.get(`weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                console.log(response);
                store.dispatch(setWeather(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
            return next(action);
        }
        default:
            return next(action);
    }
};
