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
	Button,CardHeader,
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
							marginTop       : '12px',
							padding         : '12px',
							maxWidth        : '90vw',
							height          : 'fit-content'
						}}>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} item>
							<Typography variant='h4' style={{ textAlign: 'center', color: 'white' }}>
								Today's weather
							</Typography>
						</Grid>
						<Grid container  justify='center' alignItems='center' xs={12} md={6} item>
							<Card variant='outlined' style={{borderRadius:'16px',backgroundColor:'rgba(255,255,255,.4)',width:'100%',display:'flex',flexDirection:'column',alignContent:'center'}}>
								<img  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}  style={{ width: '100%', maxWidth: '280px', height: 'auto',margin:'auto' }}/>
								<CardContent>
									<Typography variant='h6' style={{textAlign:"center"}}>{weather.weather[0].description}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid container  justify='center' alignItems='center' xs={12} md={6} item spacing={1}>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
						
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'8px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={thermometer}/>} title="Temperature" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px'}} />
							<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={thermometer}
									style={{ width: '100%', maxWidth: '80px', height: 'auto' }}
								/> */}
								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={thermometer} /> */}
									<Typography variant='h6'>{weather.temp} °C</Typography>
								</CardContent>
							</div>
								
							</Card>
						</Grid>
						{/* <Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							
							<Card style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',padding:'12px',borderRadius:'14px' }}>
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
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'8px',borderRadius:'14px' }}>
						<CardHeader avatar={<Avatar src={rain}/>} title="Rain" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px'}} />

								<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={rain}
									style={{
										width    : '100%',
										maxWidth : '70px',
										height   : 'auto'
									}}
								/> */}

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={rain} /> */}
									<Typography variant='h6'>{weather.humidity} %</Typography>
								</CardContent>
								</div>
							</Card>
						</Grid>
						{/* <Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '85%',padding:'12px',borderRadius:'14px' }}>
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
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'8px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={sunset}/>} title="Sunset" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px'}} />
								<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={sunset}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={sunset} /> */}
									<Typography variant='h6'>{this.getTime(weather.sunset)}</Typography>
								</CardContent>
								</div>
							</Card>
						</Grid>
						<Grid container direction='column' justify='center' alignItems='center' xs={12} md={6} item>							
							<Card style={{  backgroundColor: 'rgba(255,255,255,.5)', minWidth: '90%',padding:'8px',borderRadius:'14px' }}>
							<CardHeader avatar={<Avatar src={sunrise}/>} title="Sunrise" style={{textAlign:'center',backgroundColor:'rgba(0,0,0,.4)',borderRadius:'12px'}} />

								<div style={{display: 'flex' }}>
								{/* <CardMedia
									component='img'
									image={sunrise}
									style={{ width: '100%', maxWidth: '70px', height: 'auto' }}
								/> */}

								<CardContent style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
									{/* <Avatar src={sunrise} /> */}
									<Typography variant='h6'>{this.getTime(weather.sunrise)}</Typography>
								</CardContent>
								</div>
							</Card>
							
						</Grid>
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
