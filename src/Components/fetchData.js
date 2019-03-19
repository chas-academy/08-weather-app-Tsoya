import React, { Component } from 'react';
import './styles.css';

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            timezone: '',
            isLoaded: false,
            error: null,
            sunrise: '',
            sunset: '',
            temperature: '',
            isFar: false,
            tempforweek: ''
        }

        this.onClick = this.onClick.bind(this);
        this.onClick1 = this.onClick1.bind(this);
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(position)


            fetch('https://cors.io/?https://api.darksky.net/forecast/7cb29df97dd4e2a6850670bf6dc173b6/' + lat + ',' + long)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.setState({
                        items: res.currently,
                        timezone: res.timezone,
                        sunrise: new Date(res.daily.data[0].sunriseTime * 1000),
                        sunset: new Date(res.daily.data[0].sunsetTime * 1000),
                        isLoaded: true,
                        temperature: res.currently.temperature,
                        tempforweek: res.daily.data,
                        isFar: true

                    })
                    
                    // dateSunrise.toISOISOString();
                    console.log(this.state.tempforweek);
                    // FIX DATE FOR SUNRISE AND SUNSET
                })
        })


    }

    onClick() {
        this.setState({
            isFar: false
        })

    }

    onClick1() {
        this.setState({
            isFar: true
        })
    }

    render() {
        return (

            (this.state.isLoaded) ? (
                <div>
                    <div className="todaysWeather">
                        <h2>Weather for: {this.state.timezone}</h2>
                        <button onClick={this.onClick}>Celcius</button>
                        <button onClick={this.onClick1}>Farenheit</button>
                        <h3>Todays weather</h3>

                        {(this.state.isFar) ? (
                            <p>Temperature: {this.state.temperature} Farenheit</p>
                        ) : (
                                <p>Temperature: {Math.floor((this.state.temperature -32) / 1.8)} Celcius</p>
                            )}


                        <p>Wind Speed: {this.state.items.windSpeed} MPH</p>
                        <p>Wind Gust: {this.state.items.windGust} MPH</p>
                        <p>Sunrise: {this.state.sunrise.toString()} </p>
                        <p>Sunset: {this.state.sunset.toString()} </p>

                    </div>

                    <hr />

                        

                    <div className="weekoverview">

                        <div className="overview">
                            <h2>Weather for {new Date(this.state.tempforweek[1].time * 1000).toString()} </h2>
                            <h3>Short overview</h3>
                            <p>{this.state.tempforweek[1].summary} </p>

                            {(this.state.isFar) ? (
                                <p>Temperature: {this.state.tempforweek[1].temperatureLow} Farenheit</p>
                            ) : (
                                    <p>Temperature: {Math.floor((this.state.tempforweek[1].temperatureLow -32) / 1.8)} Celcius</p>
                                )}
                        </div>

                        <div className="overview">
                            <h2>Weather for {new Date(this.state.tempforweek[2].time * 1000).toString()} </h2>
                            <h3>Short overview</h3>
                            <p>{this.state.tempforweek[2].summary} </p>

                            {(this.state.isFar) ? (
                                <p>Temperature: {this.state.tempforweek[2].temperatureLow} Farenheit</p>
                            ) : (
                                    <p>Temperature: {Math.floor((this.state.tempforweek[2].temperatureLow -32) / 1.8)} Celcius</p>
                                )}
                        </div>

                        <div className="overview">
                            <h2>Weather for {new Date(this.state.tempforweek[3].time * 1000).toString()} </h2>
                            <h3>Short overview</h3>
                            <p>{this.state.tempforweek[3].summary} </p>

                            {(this.state.isFar) ? (
                                <p>Temperature: {this.state.tempforweek[3].temperatureLow} Farenheit</p>
                            ) : (
                                    <p>Temperature: {Math.floor((this.state.tempforweek[3].temperatureLow -32) / 1.8)} Celcius</p>
                                )}
                        </div>

                        <div className="overview">
                            <h2>Weather for {new Date(this.state.tempforweek[4].time * 1000).toString()} </h2>
                            <h3>Short overview</h3>
                            <p>{this.state.tempforweek[4].summary} </p>

                            {(this.state.isFar) ? (
                                <p>Temperature: {this.state.tempforweek[4].temperatureLow} Farenheit</p>
                            ) : (
                                    <p>Temperature: {Math.floor((this.state.tempforweek[4].temperatureLow -32) / 1.8)} Celcius</p>
                                )}
                        </div>

                        <div className="overview">
                            <h2>Weather for {new Date(this.state.tempforweek[5].time * 1000).toString()} </h2>
                            <h3>Short overview</h3>
                            <p>{this.state.tempforweek[5].summary} </p>

                            {(this.state.isFar) ? (
                                <p>Temperature: {this.state.tempforweek[5].temperatureLow} Farenheit</p>
                            ) : (
                                    <p>Temperature: {Math.floor((this.state.tempforweek[5].temperatureLow -32) / 1.8)} Celcius</p>
                                )}
                        </div>

                    </div>




                </div>


            ) : (
                    <div>
                        <p>hej</p>
                    </div>
                )

        )
    }
}



export default Fetch;

