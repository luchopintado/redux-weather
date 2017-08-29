import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table class="table table-hover">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function mapStateToProps ({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);
