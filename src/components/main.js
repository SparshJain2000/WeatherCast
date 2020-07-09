import React, { Component } from 'react';
import { Button, Grid, Paper, Card, Typography, CardContent, Avatar } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange, orange } from '@material-ui/core/colors';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WeatherInfo from './weatherInfo';
import CurrentWeather from './currentWeather';
import {
	faWind,
	faTemperatureHigh,
	faCloudRain,
	faCloudSun,
	faLowVision,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import sun from '../images/sun.svg';
// const theme =
export default class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
			key      : 'aasdsa',
			temp     : '',
			feelLike : '',
			wind     : '',
			humidity : '',
			clouds   : '',
			uvi      : '',
			current  : null,
			show     : false,
			daily    : []
		};
		this.toggleShow = this.toggleShow.bind(this);
		// this.getTheme = this.getTheme.bind(this);
	}
	// getTheme() {
	//     return createMuiTheme({
	//         palette: {
	//             type: "dark",
	//             primary: {
	//                 main: orange[500],
	//             },
	//             secondary: {
	//                 main: deepOrange[500],
	//             },
	//         },
	//     });
	// }
	toggleShow () {
		this.setState({
			show : !this.state.show
		});
	}
	componentDidMount () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const long = position.coords.longitude;
				console.log('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude);
				axios
					.get(
						`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${process
							.env.REACT_APP_API_KEY}&units=metric`
					)
					.then((resp) => {
						console.log(resp);
						this.setState({
							daily   : resp.data.daily,
							current : resp.data.current
						});
						console.log(this.state.current);
					})
					.catch((err) => console.log(err));
			});
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
	}
	render () {
		return (
			// <ThemeProvider theme={this.getTheme()}>
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between', margin: '12px' }}>
				<Grid
					container
					spacing={1}
					style={{
						display       : 'flex',
						flexDirection : 'column',
						alignItems    : 'center'
					}}>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						{' '}
						<Avatar src={sun} style={{ width: '45px', height: '100%', marginRight: '10px' }} />
						<Typography variant='h3'>Weather</Typography>
					</div>
					{this.state.current ? <CurrentWeather current={this.state.current} /> : <p>No</p>}
					<Button
						size='large'
						variant='contained'
						color='secondary'
						onClick={this.toggleShow}
						style={{ marginTop: '24px', width: '80%' }}>
						View More
					</Button>
				</Grid>
				{this.state.show &&
					this.state.daily.map((weather) => <WeatherInfo key={weather.dt} weather={weather} />)}
			</div>
			// </ThemeProvider>
		);
	}
}
