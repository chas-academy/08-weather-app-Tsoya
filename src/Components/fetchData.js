import React, {Component} from 'react';

class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            error: null
        }

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
        

        fetch('https://cors.io/?https://api.darksky.net/forecast/7cb29df97dd4e2a6850670bf6dc173b6/'+ lat + ',' + long)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.log(this.state.isLoaded)
        })
    
        })


    


    }

    render() {
            return (    

                <div>
                    <p> hej </p> 
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