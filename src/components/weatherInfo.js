import React, { Component } from 'react';
import { Grid, Card, CardHeader, Typography, CardContent, Avatar, CardMedia } from '@material-ui/core';
import rain from '../images/rain.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import thermometer from '../images/thermometer.png';
import date from '../images/date.png';

export default class WeatherInfo extends Component {
	getDate (dt) {
		let x = new Date(dt * 1000).toUTCString();
		return x.slice(0, x.length - 18);
	}
	getTime (dt) {
		let x = new Date(new Date(dt * 1000).toUTCString()).toLocaleTimeString();
		return x;
	}
	render () {
		const weather = this.props.weather;
		return (
			<Grid
				container
				spacing={2}
				flexGrow={1}
				style={{
					backgroundColor : 'rgba(0,0,0,.4)',
					borderRadius    : '12px',
					marginTop       : '32px',
					marginLeft      : 'auto',
					marginRight     : 'auto',
					padding         : '18px',
					maxWidth        : '90vw',
					alignContent    : 'center'
				}}
				justify='center'
				alignContent='center'>
				<Grid container direction='column' justify='center' alignContent='center' xs={12} md={8} item>
					<Card
						style={{
							display         : 'flex',
							maxWidth        : '100%',
							minWidth        : '90%',
							padding         : '12px',
							marginLeft      : 'auto',
							marginRight     : 'auto',
							borderRadius    : '12px',
							backgroundColor : 'rgba(0,0,0,.3)',
							color           : 'white'
						}}
						m={3}
						p={3}>
						<CardMedia
							component='img'
							image={date}
							style={{
								marginTop    : 'auto',
								marginBottom : 'auto',
								marginLeft   : '10%',
								width        : '100%',
								maxWidth     : '50px',
								height       : 'auto',
								maxHeight    : '50px'
							}}
						/>
						<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							{/* <Avatar src={date} /> */}
							<Typography variant='h5' style={{ fontFamily: 'Raleway' }}>
								{this.getDate(weather.dt)}
							</Typography>
						</CardContent>
					</Card>
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
							alt='Weather logo'
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
							style={{ width: '100%', maxWidth: '280px', height: 'auto', margin: 'auto' }}
						/>
						<CardContent>
							<Typography variant='h6' style={{ textAlign: 'center' }}>
								{weather.weather[0].description}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid container justify='center' alignItems='center' xs={12} md={6} item>
					<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
						<Card
							style={{
								backgroundColor : 'rgba(255,255,255,.5)',
								minWidth        : '90%',
								marginLeft      : 'auto',
								marginRight     : 'auto',
								margin          : '6px',
								padding         : '2px',
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
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									<Typography variant='h6' style={{ textAlign: 'center' }}>
										{weather.temp.max} °C
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
								marginLeft      : 'auto',
								marginRight     : 'auto',
								margin          : '6px',
								padding         : '2px',
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
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									<Typography variant='h6' style={{ textAlign: 'center' }}>
										{weather.rain ? weather.rain : '?'} mm
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
								marginLeft      : 'auto',
								marginRight     : 'auto',
								margin          : '6px',
								padding         : '2px',
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
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
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
								marginLeft      : 'auto',
								marginRight     : 'auto',
								margin          : '6px',
								padding         : '2px',
								borderRadius    : '14px'
							}}>
							<CardHeader
								avatar={<Avatar src={sunrise} />}
								title='Sunset'
								style={{
									textAlign       : 'center',
									backgroundColor : 'rgba(0,0,0,.4)',
									borderRadius    : '12px',
									color           : 'white'
								}}
							/>
							<div style={{ display: 'flex' }}>
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									<Typography variant='h6' style={{ textAlign: 'center' }}>
										{this.getTime(weather.sunrise)}
									</Typography>
								</CardContent>
							</div>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
