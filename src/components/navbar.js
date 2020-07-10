import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import sun from '../images/sun.svg';
export default class Navbar extends Component {
	render () {
		return (
			<AppBar position='static'>
				<Toolbar style={{ display: 'flex' }}>
					<Avatar src={sun} style={{ width: '30px', height: '100%', marginRight: '12px' }} />
					<Typography variant='h6'>{'W'}</Typography>
					<Button color='inherit' style={{ marginLeft: 'auto' }}>
						{'</> '}with ❤︎ by Sparsh
					</Button>
				</Toolbar>
			</AppBar>
		);
	}
}
