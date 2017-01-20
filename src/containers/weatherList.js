import React , { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/googleMaps';


class WeatherList extends Component  {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const hum   = cityData.list.map(weather => weather.main.humidity);
    const {lon , lat}  = cityData.city.coord;


    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={press} color="orange" units="hPa"/></td>
        <td><Chart data={hum} color="black" units="%"/></td>
      </tr>
    );
  }
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect (mapStateToProps)(WeatherList);
