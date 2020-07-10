import React, { Component } from 'react';
import rain from '../images/rain.png';
import fog from '../images/fog.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import thermometer from '../images/thermometer.png';
import haze from '../images/haze.png';
import wind from '../images/wind.png';
import Loader from 'react-loader-spinner';
import clouds from '../images/clouds.png';
import date from '../images/date.png';
import CanvasJSReact from '../charts/canvasjs.react';
import {
	Button,
	CardHeader,
	Grid,
	Paper,
	Card,
	Typography,
	CardContent,
	Avatar,
	Zoom,
	CardMedia,
	CardActionArea
} from '@material-ui/core';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
// const getDate=(dt)=> {
// 	let x = new Date(dt * 1000);
// 	return `${x.getFullYear()},${x.getMonth()},${x.getDate()}`;
// }
const Chart = ({ hourly }) => {
	const tempHourly = hourly.map((data) => {
		return { x: data.dt * 1000, y: data.temp };
	});
	const feelsLike = hourly.map((data) => {
		return { x: data.dt * 1000, y: data.feels_like };
	});
	const options = {
		animationEnabled  : true,
		animationDuration : 2000,
		zoomEnabled       : true,
		backgroundColor   : 'rgba(255,255,255,.4)',
		title             : {
			text    : 'Temperature for next 7 days',
			padding : 10
		},
		axisX             : {
			valueFormatString : 'DD MMM h:mm',
			margin            : 10,
			labelWrap         : false
		},
		axisY             : {
			title       : 'Temperature (in °C)',
			margin      : 20,
			includeZero : false,
			suffix      : '°C'
		},
		data              : [
			{
				type               : 'spline',
				xValueFormatString : 'H:mm DD MMM',
				showInLegend       : true,
				legendText         : 'Temperature',

				yValueFormatString : '## °C',
				color              : '#2c387e',
				xValueType         : 'dateTime',
				dataPoints         : tempHourly
			},
			{
				type               : 'spline',
				xValueFormatString : 'H:mm DD MMM',
				showInLegend       : true,
				legendText         : 'Feels Like',
				yValueFormatString : '## °C',
				color              : '#aa2e25',
				xValueType         : 'dateTime',
				dataPoints         : feelsLike
			}
		]
	};

	return <CanvasJSChart options={options} />;
};
export default class CurrentWeather extends Component {
	constructor (props) {
		super(props);
		this.state = {
			weather  : this.props.current,
			showMore : false
		};
		this.showToggle = this.showToggle.bind(this);
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
	showToggle () {
		this.setState({
			showMore : !this.state.showMore
		});
	}
	render () {
		const weather = this.state.weather;
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
							marginTop       : '12px',
							padding         : '12px',
							maxWidth        : '90vw',
							height          : 'fit-content'
						}}>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
							<Typography
								variant='h5'
								style={{ textAlign: 'center', color: 'white', fontFamily: 'Merienda One' }}>
								Today's weather
							</Typography>
						</Grid>
						<Grid container justify='center' alignItems='center' xs={12} md={6} item>
							<Card
								variant='outlined'
								style={{
									borderRadius    : '16px',
									backgroundColor : 'rgba(255,255,255,.4)',
									width           : '100%',
									display         : 'flex',
									flexDirection   : 'column',
									alignContent    : 'center'
								}}>
								<img
									src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
									style={{ width: '100%', maxWidth: '256px', height: 'auto', margin: 'auto' }}
								/>
								<CardContent>
									<Typography variant='h6' style={{ textAlign: 'center' }}>
										{weather.weather[0].description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container justify='center' alignItems='center' xs={12} md={6} item spacing={1}>
							<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px'
									}}>
									<CardHeader
										avatar={<Avatar src={thermometer} />}
										title='Temperature'
										style={{
											textAlign       : 'center',
											backgroundColor : 'rgba(0,0,0,.4)',
											borderRadius    : '12px',
											color           : 'white'
										}}
									/>
									<div style={{ display: 'flex' }}>
										<CardContent
											style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
											{/* <Avatar src={thermometer} /> */}
											<Typography variant='h6' style={{ textAlign: 'center' }}>
												{weather.temp} °C
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							{/* <Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							
							<Card style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',padding:'12px',color:'white',borderRadius:'14px' }}>
								<CardMedia
									component='img'
									image={wind}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/>
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									<Typography variant='h6'>{weather.wind_speed} km/h</Typography>
								</CardContent>
							</Card>
						</Grid> */}
							<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px'
									}}>
									<CardHeader
										avatar={<Avatar src={rain} />}
										title='Rain'
										style={{
											textAlign       : 'center',
											backgroundColor : 'rgba(0,0,0,.4)',
											borderRadius    : '12px',
											color           : 'white'
										}}
									/>

									<div style={{ display: 'flex' }}>
										{/* <CardMedia
									component='img'
									image={rain}
									style={{
										width    : '100%',
										maxWidth : '70px',
										height   : 'auto'
									}}
								/> */}

										<CardContent
											style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
											{/* <Avatar src={rain} /> */}
											<Typography variant='h6' style={{ textAlign: 'center' }}>
												{this.props.rain} %
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							{/* <Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',padding:'12px',color:'white',borderRadius:'14px' }}>
								<CardMedia
									component='img'
									image={clouds}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/>

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									
									<Typography variant='h6'>{weather.clouds} %</Typography>
								</CardContent>
							</Card>
						</Grid> */}
							<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px'
									}}>
									<CardHeader
										avatar={<Avatar src={sunset} />}
										title='Sunset'
										style={{
											textAlign       : 'center',
											backgroundColor : 'rgba(0,0,0,.4)',
											borderRadius    : '12px',
											color           : 'white'
										}}
									/>
									<div style={{ display: 'flex' }}>
										{/* <CardMedia
									component='img'
									image={sunset}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

										<CardContent
											style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
											{/* <Avatar src={sunset} /> */}
											<Typography variant='h6' style={{ textAlign: 'center' }}>
												{this.getTime(weather.sunset)}
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px'
									}}>
									<CardHeader
										avatar={<Avatar src={sunrise} />}
										title='Sunrise'
										style={{
											textAlign       : 'center',
											backgroundColor : 'rgba(0,0,0,.4)',
											borderRadius    : '12px',
											color           : 'white'
										}}
									/>

									<div style={{ display: 'flex' }}>
										{/* <CardMedia
									component='img'
									image={sunrise}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

										<CardContent
											style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
											{/* <Avatar src={sunrise} /> */}
											<Typography variant='h6' style={{ textAlign: 'center' }}>
												{this.getTime(weather.sunrise)}
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
						</Grid>
						<Grid xs={12} container style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
							<Button
								variant='contained'
								size='large'
								style={{
									minWidth        : '95%',
									borderRadius    : '12px',
									backgroundColor : '#00695f',
									color           : 'white'
								}}
								onClick={this.showToggle}>
								View More
							</Button>
						</Grid>
						{this.state.showMore && (
							<Zoom in={this.state.showMore} timeout={1500}>
								<Grid
									xs={12}
									container
									style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
									<Chart hourly={this.props.hourly} style={{ borderRadius: '12px' }} />
								</Grid>
							</Zoom>
						)}
					</Grid>
				) : (
					<Loader
						type='Audio'
						color='#3f51b5'
						height={150}
						width={150}
						// timeout={1000} //1 secs
					/>
				)}
			</div>

			// )
		);
	}
}
