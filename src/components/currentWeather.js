import React, { Component } from 'react';
import rain from '../images/rain.png';
import fog from '../images/fog.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import thermometer from '../images/thermometer.png';
import haze from '../images/haze.png';
import wind from '../images/wind.png';
import clouds from '../images/clouds.png';
import date from '../images/date.png';
import {
	Button,
	Grid,
	Paper,
	Card,
	Typography,
	CardContent,
	Avatar,
	CardMedia,
	CardActionArea
} from '@material-ui/core';

export default class CurrentWeather extends Component {
	constructor (props) {
		super(props);
		this.state = {
			weather : this.props.current
		};
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
		const weather = this.state.weather;
		console.log(weather);
		// return <div>hello</div>;
		return (
			<div>
				{weather ? (
					<Grid
						container
						spacing={1}
						flexGrow={1}
						style={{
							backgroundColor : 'rgba(0,0,0,.4)',
							borderRadius    : '12px',
							margin          : '5vw',
							padding         : '16px',
							maxWidth        : '90vw',
							height          : 'fit-content'
						}}>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
							<Typography variant='h1'>Today's weather</Typography>

							<Card
								style={{
									backgroundColor : 'rgba(255,255,255,.5)',
									minWidth        : '70%',
									padding         : '24px',
									display         : 'flex'
								}}
								m={5}
								p={5}>
								{/* <CardMedia component='img' image={date} width='151'/> */}
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Avatar src={date} />
									<Typography variant='h4'>{this.getDate(weather.dt)}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center	' }}>
									<Avatar src={thermometer} />
									<Typography variant='h6'>{weather.temp}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									{/* <FontAwesomeIcon icon={faWind} /> */}
									<Avatar src={wind} />
									<Typography variant='h6'>{weather.wind_speed}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Avatar src={rain} />
									<Typography variant='h6'>{weather.humidity}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Avatar src={clouds} />
									<Typography variant='h6'>{weather.clouds}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Avatar src={sunset} />
									<Typography variant='h6'>{this.getTime(weather.sunset)}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{ backgroundColor: 'rgba(255,255,255,.5)', minWidth: '80%' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Avatar src={sunrise} />
									<Typography variant='h6'>{this.getTime(weather.sunrise)}</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				) : (
					<p>No</p>
				)}
			</div>

			// )
		);
	}
}
