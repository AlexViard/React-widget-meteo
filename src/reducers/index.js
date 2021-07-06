import {
    SET_WEATHER,
    SET_VALUE,
} from '../actions';

const initialState = {
  city: '',
  celsius: null,
  inputValue: '',
  open: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
      case SET_WEATHER: 
        return {
            ...state,
            city: state.inputValue,
            celsius: action.data.main.temp,
            inputValue: '',
            open: true,
            weatherCode: action.data.weather[0].icon,
        }
      case SET_VALUE: 
        return {
            ...state,
            inputValue: action.value,
        }
    default:
      return state;
  }
};

export default reducer;
