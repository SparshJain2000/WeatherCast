import React, { Component } from 'react'

import CanvasJSReact from '../charts/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Charts extends Component {
    constructor(props){
        super(props);
    }
    render() {
		const options = {
            animationEnabled: true,
            animationDuration: 2000,
            zoomEnabled: true,
            backgroundColor: "rgba(255,255,255,.3)",
			title:{
                text: "Temperature for next 7 days",
                padding:10
			},
			axisX:{
                valueFormatString: "DD MMM",
                margin:10
			},
			axisY: {
                title: "Temperature (in °C)",
                margin:20,
                includeZero: false,
			},
			data: [{
                // type: "area",
                type: "splineArea",
				xValueFormatString: "DD MMM",
                yValueFormatString: "## °C",
                color: "#f50057",
				dataPoints: this.props.tempArray
			}]
		}
        
        const options2 = {
            animationEnabled: true,
            animationDuration: 2000,
            zoomEnabled: true,
            backgroundColor: "rgba(255,255,255,.3)",
			title:{
                text: "Temperature for next 7 days",
                padding:10
			},
			axisX:{
                valueFormatString: "DD MMM",
                margin:10
			},
			axisY: {
                title: "Temperature (in °C)",
                margin:20,
                includeZero: false,
			},
			data: [{
                // type: "area",
                type: "splineArea",
				xValueFormatString: "DD MMM",
                yValueFormatString: "## °C",
                color: "#4657bb",
				dataPoints: this.props.rainArray
			}]
		}
		
		return (
            <div>
		<div style={{margin:'24px'}}>
			<CanvasJSChart options = {options} />
		</div>
        <div style={{margin:'24px'}}>
			<CanvasJSChart options = {options2} />
		</div>
        </div>
		);
	}
}
