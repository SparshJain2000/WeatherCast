import React, { Component } from 'react';

import CanvasJSReact from '../charts/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Charts extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		const dayTemp = this.props.tempArray.map((data) => {
			return { x: data.x, y: data.y.day };
		});
		const nightTemp = this.props.tempArray.map((data) => {
			return { x: data.x, y: data.y.night };
		});
		const windSpeed = this.props.windArray.map((data) => {
			return { x: data.x, y: data.y.speed };
		});
		// console.log(this.props.windArra);
		const windDir = this.props.windArray.map((data) => {
			return { x: data.x, y: data.y.dir };
		});
		const options = {
			animationEnabled  : true,
			animationDuration : 2000,
			zoomEnabled       : true,
			backgroundColor   : 'rgba(255,255,255,.3)',
			title             : {
				text    : 'Temperature for next 7 days',
				padding : 10
			},
			axisX             : {
				valueFormatString : 'DD MMM',
				margin            : 10,
				labelWrap         : true,
				crosshair         : {
					enabled         : true,
					snapToDataPoint : false
				}
			},
			axisY             : {
				title       : 'Temperature (in °C)',
				margin      : 20,
				includeZero : false,
				suffix      : '°C'
			},
			toolTip           : {
				content   : '{name}: {y}',
				fontColor : '#00695f'
			},
			data              : [
				{
					type               : 'splineArea',
					xValueFormatString : 'DD MMM',
					yValueFormatString : '## °C',
					color              : '#ff3d00',
					name               : 'day',
					dataPoints         : dayTemp
				},
				{
					type               : 'splineArea',
					xValueFormatString : 'DD MMM',
					yValueFormatString : '## °C',
					color              : '#2c387e',
					name               : 'night',
					dataPoints         : nightTemp
				}
			]
		};

		const options2 = {
			animationEnabled  : true,
			animationDuration : 2000,
			zoomEnabled       : true,
			backgroundColor   : 'rgba(255,255,255,.3)',
			title             : {
				text    : 'Rain for next 7 days',
				padding : 10
			},
			axisX             : {
				valueFormatString : 'DD MMM',
				margin            : 10,
				labelWrap         : true,
				crosshair         : {
					enabled       : true,

					labelMaxWidth : 100,
					labelWrap     : true
				}
			},
			axisY             : {
				title       : 'Rain (in mm)',
				margin      : 20,
				includeZero : false
			},
			data              : [
				{
					type               : 'splineArea',
					xValueFormatString : 'DD MMM',
					yValueFormatString : '## mm',
					color              : '#4657bb',
					dataPoints         : this.props.rainArray,
					connectNullData    : true
				}
			]
		};
		const options3 = {
			animationEnabled  : true,
			animationDuration : 2000,
			zoomEnabled       : true,
			backgroundColor   : 'rgba(255,255,255,.3)',
			title             : {
				text    : 'Wind Speed for next 7 days',
				padding : 10
			},
			toolTip           : {
				content   : '{name}: {y}',
				fontColor : '#00695f'
			},
			axisX             : {
				valueFormatString : 'DD MMM',
				margin            : 10,
				labelWrap         : true,
				crosshair         : {
					enabled       : true,
					labelMaxWidth : 100,
					labelWrap     : true
				}
			},
			axisY             : {
				title       : 'Wind Speed (in km/h)',
				margin      : 20,
				includeZero : false
			},
			data              : [
				{
					type               : 'splineArea',
					name               : 'Wind Speed',
					xValueFormatString : 'DD MMM',
					yValueFormatString : '## km/h',
					color              : '#ff1744',
					dataPoints         : windSpeed,
					connectNullData    : true
				}
			]
		};

		return (
			<div>
				<div style={{ margin: '24px' }}>
					<CanvasJSChart options={options} />
				</div>
				<div style={{ margin: '24px' }}>
					<CanvasJSChart options={options2} />
				</div>
				<div style={{ margin: '24px' }}>
					<CanvasJSChart options={options3} />
				</div>
			</div>
		);
	}
}
