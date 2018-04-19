import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Charts';


class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return(
    <tr key={name}>
    <td>{name}</td>
    <td><Chart data={temps} color="orange" /> </td>
    <td><Chart data={pressures} color="green" /> </td>
    <td><Chart data={humidity} color="red" /> </td>
    </tr>
  )
  }
  render(){
      return(
      <table className="table table-hover">
      <thead>
      <tr>
      <th>City</th>
      <th>Temparature</th>
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

function mapStateToProps({ weather }){
  return { weather };   //{ weather} === {weather: weather} ==={weather: state.weather}
}


export default connect(mapStateToProps)(WeatherList);
