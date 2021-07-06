export const GET_WEATHER = 'GET_WEATHER';

export const getWeather = () => ({
  type: GET_WEATHER,
});

export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (data) => ({
  type: SET_WEATHER,
  data,
});

export const SET_VALUE = 'SET_VALUE';

export const setValue = (value) => ({
  type: SET_VALUE,
  value,
});

