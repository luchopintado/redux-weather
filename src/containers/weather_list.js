import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather (cityData) {
        if (!cityData) {
            return null;
        }

        const cityName = cityData.city.name;
        const {lat, lon} = cityData.city.coord;
        let tempArray = [];
        let pressureArray = [];
        let humidityArray = [];

        cityData.list.forEach(obj => {
            tempArray.push(obj.main.temp - 273.15);
            pressureArray.push(obj.main.pressure);
            humidityArray.push(obj.main.humidity);
        });

        return (
            <tr key={`tr-city-${cityName}`}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={tempArray} color="orange" units="°C"/></td>
                <td><Chart data={pressureArray} color="green" units="hPA"/></td>
                <td><Chart data={humidityArray} color="blue" units="%"/></td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover">
                <colgroup>
                    <col width="10%"/>
                    <col width="30%"/>
                    <col width="30%"/>
                    <col width="30%"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.weather.map(this.renderWeather)
                    }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps ({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);
