import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import CanvasJSReact from '../charts/canvasjs.react';
import rain from '../images/rain.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import thermometer from '../images/thermometer.png';

import { Button, CardHeader, Grid, Card, Typography, CardContent, Avatar, Zoom } from '@material-ui/core';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Chart = ({ hourly }) => {
	const tempHourly = hourly.map((data) => {
		return { x: data.dt * 1000, y: data.temp, weather: data.weather[0].main };
	});
	const feelsLike = hourly.map((data) => {
		return { x: data.dt * 1000, y: data.feels_like, weather: data.weather[0].main };
	});
	const options = {
		animationEnabled  : true,
		animationDuration : 2000,
		zoomEnabled       : true,
		backgroundColor   : 'rgba(255,255,255,.4)',
		title             : {
			text    : 'Temperature for next 48 hours',
			padding : 10
		},
		axisX             : {
			valueFormatString : 'DD MMM H:mm',
			margin            : 10,
			labelWrap         : true,
			crosshair         : {
				enabled         : true,
				snapToDataPoint : false
			}
		},
		toolTip           : {
			content   : '{name}: {y} <hr/>weather:{weather}',
			fontColor : '#00695f'
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
				name               : 'Temperature',
				yValueFormatString : '## °C',
				color              : '#2c387e',
				xValueType         : 'dateTime',
				dataPoints         : tempHourly
			},
			{
				type               : 'spline',
				xValueFormatString : 'H:mm DD MMM',
				showInLegend       : true,
				name               : 'feels like',
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
							marginTop       : '4px',
							padding         : '12px',
							maxWidth        : '90vw',
							height          : 'fit-content'
						}}>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
							<Typography
								variant='h5'
								style={{ textAlign: 'center', color: 'white', fontFamily: 'Lobster' }}>
								Current weather
							</Typography>
						</Grid>
						<Grid container justify='center' alignItems='center' xs={12} md={6} item>
							<Card
								style={{
									borderRadius    : '16px',
									backgroundColor : 'rgba(255,255,255,.5)',
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
									<Typography variant='h4' style={{ textAlign: 'center' }}>
										{weather.weather[0].main} : {weather.weather[0].description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container justify='center' alignItems='center' xs={12} md={6} item>
							<Grid
								container
								direction='column'
								justify='between'
								alignItems='center'
								xs={12}
								md={6}
								item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px',
										marginLeft      : 'auto',
										marginRight     : 'auto',
										margin          : '6px'
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
											<Typography variant='p' style={{ textAlign: 'center' }}>
												{weather.temp} °C
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							{/* <Grid container direction='column' justify='between' alignItems='center' xs={12} md={6} item>
							
							<Card style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',pad9ng:'12px',color:'white',borderRadius:'14px' }}>
								<CardMedia
									component='img'
									image={wind}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/>
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									<Typography variant='p'>{weather.wind_speed} km/h</Typography>
								</CardContent>
							</Card>
						</Grid> */}
							<Grid
								container
								direction='column'
								justify='between'
								alignItems='center'
								xs={12}
								md={6}
								item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px',
										marginLeft      : 'auto',
										marginRight     : 'auto',
										margin          : '6px'
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
											<Typography variant='p' style={{ textAlign: 'center' }}>
												{this.props.rain} mm
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							{/* <Grid container direction='column' justify='between' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',pad90ng:'12px',color:'white',borderRadius:'14px' }}>
								<CardMedia
									component='img'
									image={clouds}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/>

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									
									<Typography variant='p'>{weather.clouds} %</Typography>
								</CardContent>
							</Card>
						</Grid> */}
							<Grid
								container
								direction='column'
								justify='between'
								alignItems='center'
								xs={12}
								md={6}
								item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px',
										marginLeft      : 'auto',
										marginRight     : 'auto',
										margin          : '6px'
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
											<Typography variant='p' style={{ textAlign: 'center' }}>
												{this.getTime(weather.sunset)}
											</Typography>
										</CardContent>
									</div>
								</Card>
							</Grid>
							<Grid
								container
								direction='column'
								justify='between'
								alignItems='center'
								xs={12}
								md={6}
								item>
								<Card
									style={{
										backgroundColor : 'rgba(255,255,255,.5)',
										minWidth        : '90%',
										padding         : '8px',
										borderRadius    : '14px',
										marginLeft      : 'auto',
										marginRight     : 'auto',
										margin          : '6px'
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
											<Typography variant='p' style={{ textAlign: 'center' }}>
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
									backgroundColor : '#3f51b5',
									color           : 'white',
									marginLeft      : 'auto',
									marginRight     : 'auto',
									margin          : '0px'
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
									style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
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
