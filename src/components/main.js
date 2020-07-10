import React, { Component } from 'react';
import { Button, Grid, Zoom } from '@material-ui/core';
import axios from 'axios';
import WeatherInfo from './weatherInfo';
import CurrentWeather from './currentWeather';
import Loader from 'react-loader-spinner';
import Charts from './chartComponent';

export default class Main extends Component {
	constructor (props) {
		super(props);
		this.state = {
			current      : null,
			showForecast : false,
			showCharts   : false,
			daily        : [],
			hourly       : []
		};
		this.toggleShowForecast = this.toggleShowForecast.bind(this);
		this.toggleShowCharts = this.toggleShowCharts.bind(this);
	}
	toggleShowForecast () {
		this.setState({
			showForecast : !this.state.showForecast,
			showCharts   : false
		});
	}
	toggleShowCharts () {
		this.setState({
			showCharts   : !this.state.showCharts,
			showForecast : false
		});
	}
	getDate (dt) {
		let x = new Date(dt * 1000);
		return `${x.getFullYear()},${x.getMonth()},${x.getDate()}`;
	}
	getTemperatures (daily) {
		let temp = [];
		daily.forEach((data) => {
			temp = [ ...temp, { x: new Date(this.getDate(data.dt)), y: data.temp } ];
		});
		return temp;
	}
	getWind (daily) {
		let wind = [];
		daily.forEach((data) => {
			wind = [
				...wind,
				{ x: new Date(this.getDate(data.dt)), y: { speed: data.wind_speed, dir: data.wind_deg } }
			];
		});
		return wind;
	}
	getRain (daily) {
		let rain = [];
		daily.forEach((data) => {
			rain = [ ...rain, { x: new Date(this.getDate(data.dt)), y: data.rain ? data.rain : null } ];
		});
		return rain;
	}
	componentDidMount () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const long = position.coords.longitude;
				console.log('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude);
				axios
					.get(
						`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${process
							.env.REACT_APP_API_KEY}&units=metric`
					)
					.then((resp) => {
						console.log(resp);
						this.setState({
							daily   : resp.data.daily,
							current : resp.data.current,
							hourly  : resp.data.hourly
						});
						console.log(resp.data);
					})
					.catch((err) => console.log(err));
			});
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
	}
	componentDidUpdate () {
		this.scrollToBottom();
	}
	scrollToBottom = () => {
		console.log(this.charts);
		if (this.state.showCharts || this.state.showForecast)
			this.charts.scrollIntoView({
				behavior : 'smooth'
			});
	};
	render () {
		return (
			<div
				style={{
					display        : 'flex',
					flexDirection  : 'column',
					justifyContent : 'between',
					margin         : '12px'
				}}>
				<Grid
					container
					spacing={1}
					style={{
						display       : 'flex',
						flexDirection : 'column',
						alignItems    : 'center'
					}}>
					{this.state.current ? (
						<CurrentWeather
							current={this.state.current}
							rain={
								this.state.daily[0].rain ? (
									this.state.daily[0].rain
								) : this.state.hourly[47].rain ? (
									this.state.hourly[47].rain['1h']
								) : (
									0
								)
							}
							hourly={this.state.hourly}
						/>
					) : (
						<Loader type='Bars' color='#3f51b5' height={400} width={320} />
					)}
					<div
						style={{
							display        : 'flex',
							justifyContent : 'between',
							marginTop      : '10px',
							width          : '95%'
						}}>
						<Button
							size='large'
							variant='contained'
							onClick={this.toggleShowForecast}
							style={{ margin: '8px', width: '50%', backgroundColor: '#00695f', color: 'white' }}>
							View Forecast
						</Button>
						<Button
							size='large'
							variant='contained'
							color='secondary'
							onClick={this.toggleShowCharts}
							style={{ margin: '8px', width: '50%' }}>
							View Charts
						</Button>
					</div>
				</Grid>
				<div ref={(el) => (this.charts = el)}>
					{this.state.showForecast &&
						this.state.daily.map((weather) => <WeatherInfo key={weather.dt} weather={weather} />)}

					{this.state.showCharts && (
						<Charts
							tempArray={this.getTemperatures(this.state.daily)}
							rainArray={this.getRain(this.state.daily)}
							windArray={this.getWind(this.state.daily)}
						/>
					)}
				</div>
			</div>
		);
	}
}
