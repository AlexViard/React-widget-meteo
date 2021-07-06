import { connect } from 'react-redux';
import App from '../../components/App';

import {
    getWeather,
    setValue,
} from '../../actions';

const mapStateToProps = (state) => ({
  city: state.city,
  celsius: state.celsius,
  inputValue: state.inputValue,
  open: state.open,
  weatherCode: state.weatherCode,
});

const mapDispatchToProps = (dispatch) => ({
  handlerSubmit: () => {dispatch(getWeather())},
  handlerChange: (value) => {dispatch(setValue(value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);