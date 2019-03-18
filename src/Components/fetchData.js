import React, { Component } from 'react';

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            timezone: '',
            isLoaded: false,
            error: null,
            sunrise: ''
        }

        this.onClick = this.onClick.bind(this); 
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            // console.log(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            console.log(lat, long)
            this.setState({
                isLoaded: true
            })


            fetch('https://cors.io/?https://api.darksky.net/forecast/7cb29df97dd4e2a6850670bf6dc173b6/' + lat + ',' + long)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.setState({
                        items: res.currently,
                        timezone: res.timezone,
                        sunrise: res.daily.data[0].sunriseTime
                    })
                    console.log(this.state.timezone)
                })
        })
    }

    onClick() {
        console.log(this);
    }

    render() {
        return (

            <div>
                <h2 onClick={this.onClick} >You are in {this.state.timezone}</h2>
                <p>Temperature: {this.state.items.temperature}</p>
                <p>Wind Speed: {this.state.items.windSpeed}</p>
                <p>Wind Gust: {this.state.items.windGust}</p>
                <p>Sunrise {this.state.sunrise} </p>
            </div>
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