import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './index.css'

// import 'https://code.highcharts.com/css/highcharts.css';

function Dashboard({ options }) {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		</div >
	)
}

export default Dashboard