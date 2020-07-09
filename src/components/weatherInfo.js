import React, { Component } from 'react';
import { Button, Grid, Paper, Card, CardHeader,Typography, CardContent, Avatar, CardMedia } from '@material-ui/core';
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
		return x.slice(0, x.length - 18);
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
				spacing={2}
				flexGrow={1}
				style={{
					backgroundColor : 'rgba(0,0,0,.4)',
					borderRadius    : '12px',
					marginTop       : '32px',
					marginLeft		:"auto",
					marginRight		:'auto',
					padding         : '18px',
					maxWidth        : '90vw',
					alignContent:'center'
				}}>
				<Grid container  justify='center' alignItems='center' xs={12} md={6}  item>
							<Card variant='outlined' style={{borderRadius:'16px',backgroundColor:'rgba(255,255,255,.4)',width:'100%',display:'flex',flexDirection:'column',alignContent:'center'}}>
								<img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}  style={{ width: '100%', maxWidth: '280px', height: 'auto',margin:'auto' }}/>
								<CardContent>
									<Typography variant='h6' style={{ textAlign: 'center' }}>{weather.weather[0].description}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container  justify='center' alignItems='center' xs={12} md={6} item spacing={2}>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
					<Card
						style={{
							display         : 'flex',
							minWidth        : '70%',
							padding         : '12px',
							marginLeft:'auto',marginRight:'auto',
							borderRadius:'12px',
							backgroundColor : 'rgba(255,255,255,.3)'
						}}
						m={3}
						p={3}>
						<CardMedia
							component='img'
							image={date}
							style={{ marginTop:'auto',marginBottom:'auto',marginLeft: '15%', width: '100%', maxWidth: '50px', height: 'auto',maxHeight:'50px' }}
						/>
						<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
							{/* <Avatar src={date} /> */}
							<Typography variant='h5'>{this.getDate(weather.dt)}</Typography>
						</CardContent>
					</Card>
				</Grid>
					<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
						
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'2px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={thermometer}/>} title="Temperature" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px',color:'white'}} />
							<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={thermometer}
									style={{ width: '100%', maxWidth: '80px', height: 'auto' }}
								/> */}
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={thermometer} /> */}
									<Typography variant='h6' style={{ textAlign: 'center' }}>{weather.temp.max} °C</Typography>
								</CardContent>
							</div>
								
							</Card>
						</Grid>
				
								<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'2px',borderRadius:'14px' }}>
						<CardHeader avatar={<Avatar src={rain}/>} title="Rain" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px',color:'white'}} />

								<div style={{display: 'flex' }}>

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={rain} /> */}
									<Typography variant='h6' style={{ textAlign: 'center' }}>{weather.rain?weather.rain:'?'} mm</Typography>
								</CardContent>
								</div>
							</Card>
						</Grid>
			
			<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'2px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={sunset}/>} title="Sunset" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px',color:'white'}} />
								<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={sunset}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={sunset} /> */}
									<Typography variant='h6' style={{ textAlign: 'center' }}>{this.getTime(weather.sunset)}</Typography>
								</CardContent>
								</div>
							</Card>
						</Grid>
				<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'2px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={sunrise}/>} title="Sunset" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px',color:'white'}} />
								<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={sunset}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={sunset} /> */}
									<Typography variant='h6' style={{ textAlign: 'center' }}>{this.getTime(weather.sunrise)}</Typography>
								</CardContent>
								</div>
							</Card>
						</Grid>
			</Grid>
			</Grid>
		);
	}
}
