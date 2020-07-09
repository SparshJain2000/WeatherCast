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
                padding:10,
			},
			axisX:{
                valueFormatString: "DD MMM",
                margin:10,
                labelWrap:false,
			},
			axisY: {
                title: "Temperature (in °C)",
                margin:20,
                includeZero: false,
                suffix:'°C'
			},
			data: [{
                type: "splineArea",
				xValueFormatString: "DD MMM",
                yValueFormatString: "## °C",
                color: "#00695f",
				dataPoints: this.props.tempArray
			}]
		}
        
        const options2 = {
            animationEnabled: true,
            animationDuration: 2000,
            zoomEnabled: true,
            backgroundColor: "rgba(255,255,255,.3)",
			title:{
                text: "Rain for next 7 days",
                padding:10
			},
			axisX:{
                valueFormatString: "DD MMM",
                margin:10,
                labelWrap:   true,
                crosshair:{
                    enabled:true,
                    
                    labelMaxWidth: 100,
                    labelWrap: true,
                }
			},
			axisY: {
                title: "Rain (in cm)",
                margin:20,
                includeZero: false,
			},
			data: [{
                type: "splineArea",
				xValueFormatString: "DD MMM",
                yValueFormatString: "## cm",
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
