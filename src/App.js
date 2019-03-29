import React from 'react';
import ReactDOM from 'react-dom';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8225b0b2b8048bfd55d8be4d29f6fab1';

class App extends React.Component {
    state = {
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: null
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ''
          });
        } else {
          this.setState({
            temperature: null,
            city: null,
            country: null,
            humidity: null,
            description: null,
            error: 'Please enter the values'
          });
        }
    };
    render() {
        return (
            <div>
              <Titles/>
              <Form getWeather={this.getWeather}/>
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
        );
    }
};

export default App;