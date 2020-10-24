import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import sun from '../images/sun.svg';
const Navbar= ()=> {
		return (
			<AppBar position='static'>
				<Toolbar style={{ display: 'flex' }}>
					<Avatar src={sun} style={{ width: '30px', height: '100%', marginRight: '12px' }} />
					<Typography variant='p'>{'WeatherCast'}</Typography>
					<Button color='inherit' style={{ marginLeft: 'auto' }} size='small' href='https://www.linkedin.com/in/sparsh-jain-87379a168/' target='_blank'>
						{'</> '}with ❤︎ by Sparsh
					</Button>
				</Toolbar>
			</AppBar>
		);
	
}
export default Navbar;