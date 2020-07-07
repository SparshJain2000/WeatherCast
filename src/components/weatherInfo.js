import React, { Component } from 'react';
import { Button, Grid, Paper, Card, Typography, CardContent, Avatar } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange, orange } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faWind,
	faTemperatureHigh,
	faCloudRain,
	faCloudSun,
	faLowVision,
	faMapMarkerAlt,
	faSun
} from '@fortawesome/free-solid-svg-icons';
import rain from '../images/rain.png';
import fog from '../images/fog.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import thermometer from '../images/thermometer.png';
import haze from '../images/haze.png';
import wind from '../images/wind.png';
import clouds from '../images/clouds.png';
import date from '../images/date.png';

export default class WeatherInfo extends Component {
	constructor (props) {
		super(props);
	}
	getDate (dt) {
		let x = new Date(dt * 1000).toUTCString();
		return x.slice(0, x.length - 13);
	}
	getTime (dt) {
		let x = new Date(new Date(dt * 1000).toUTCString()).toLocaleTimeString();
		// return x.slice(x.length - 13, x.length);
		return x;
	}
	render () {
		const weather = this.props.weather;
		return (
			<Grid
				container
				spacing={1}
				flexGrow={1}
				style={{
					backgroundColor : 'rgba(0,0,0,.4)',
					borderRadius    : '12px',
					margin          : '5vw',
					padding         : '16px',
					maxWidth        : '90vw'
				}}>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
					<Card style={{ minWidth: '70%', padding: '24px' }} m={5} p={5}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar src={date} />
							<Typography variant='h4'>{this.getDate(weather.dt)}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center	' }}>
							<Avatar src={thermometer} />
							<Typography variant='h6'>{weather.temp.max}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							{/* <FontAwesomeIcon icon={faWind} /> */}
							<Avatar src={wind} />
							<Typography variant='h6'>{weather.wind_speed}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar src={rain} />
							<Typography variant='h6'>{weather.humidity}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar src={clouds} />
							<Typography variant='h6'>{weather.clouds}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar src={sunset} />
							<Typography variant='h6'>{this.getTime(weather.sunset)}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
					<Card style={{ minWidth: '80%' }}>
						<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
							<Avatar src={sunrise} />
							<Typography variant='h6'>{this.getTime(weather.sunrise)}</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	}
}
