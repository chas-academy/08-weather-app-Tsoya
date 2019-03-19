import React, { Component } from 'react';

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
            isFar: true,
        }

        this.onClick = this.onClick.bind(this);
        this.onClick1 = this.onClick1.bind(this);
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude;
            const long = position.coords.longitude;



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
                    })
                    // dateSunrise.toISOISOString();
                    console.log();
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
                    <h2>Weather for: {this.state.timezone}</h2>
                    <button onClick={this.onClick}>Celcius</button>
                    <button onClick={this.onClick1}>Farenheit</button>
                    <h3>Todays weather</h3>

                    {(this.state.isFar) ? (
                        <p>Temperature: {this.state.temperature} Farenheit</p>
                    ) : (
                        <p>Temperature: {Math.round((this.state.temperature) - 32 * 5 / 9)} Celcius</p>
                    )}


                    <p>Wind Speed: {this.state.items.windSpeed} MPH</p>
                    <p>Wind Gust: {this.state.items.windGust} MPH</p>
                    <p>Sunrise: {this.state.sunrise.toString()} </p>
                    <p>Sunset: {this.state.sunset.toString()} </p>
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




        // async function Api() {
        //     const apiKey = '7cb29df97dd4e2a6850670bf6dc173b6';
        //     const Baseurl = 'https://cors.io/?https://api.darksky.net/forecast/'+ apiKey+ '/' + lat + ',' + long;

        //     fetch(Baseurl)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(this);
        //         this.setState({
        //             items: res.currently
        //         })
        //        console.log(res); 

        //     });

        //     }

        //     Api(); 