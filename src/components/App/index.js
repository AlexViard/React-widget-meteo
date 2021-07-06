import './index.scss';
import PropTypes from 'prop-types';

function App({weatherCode, open, city, celsius, handlerSubmit, inputValue, handlerChange}) {
  const formHandlerSubmit = (e) => {
    e.preventDefault();
    handlerSubmit();
  }
  const inputHandlerChange = (e) => {
    handlerChange(e.target.value);
  }

  return (
    <div className="app">
      <form onSubmit={formHandlerSubmit}>
        <input placeholder="Entrer une ville" className="app-input" onChange={inputHandlerChange} type="text" value={inputValue} />
      </form>
      {open && (
        <div className="app-content">
          <div className="app-container">
            <p className="app-city">{city}</p>
            <p className="app-celsius">{Math.round(celsius)} °C</p>
          </div>

          <div className="app-img">
          
            <img className="app-img-size" src={`http://openweathermap.org/img/wn/${weatherCode}@2x.png`}
            alt="Meteo" />
          </div>
          
        </div>
      )}
    </div>
  );
}

App.propTypes = {
  city: PropTypes.string,
  celsius: PropTypes.number, 
  open: PropTypes.bool,
};

App.defaultProps = {
  city: '',
  celsius: null,
  open: false,
};

export default App;
