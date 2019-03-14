import React, {Component} from 'react';


class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

    }

    async componentDidMount() {
        const apiKey = '7cb29df97dd4e2a6850670bf6dc173b6';
        const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+ apiKey+ '/37.8267,-122.4233';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.currently.temperature);

    }
    
    render() {


        return(
        
        <div>hej</div>
        )
        



    }
}

export default Fetch;