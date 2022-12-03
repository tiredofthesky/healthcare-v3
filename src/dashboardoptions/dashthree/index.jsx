import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

  const options = {
    title: {
      text: '$ 25,000',
      align: 'left',
      verticalAlign: 'top'
    },
    chart: {
      styledMode: false
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      borderWidth: 0,
      showInLegend: "false"
    },
    xAxis: {
      categories: ['25 July', '26 July', '27 July', '28 July', '29 July', '30 July', '31 July']
    },
    yAxis: {
      title: {
			text: ''
		},
      labels: {
        formatter: function () {
          return this.value + "$";
        }
      }
    },
    tooltip: {
      borderRadius: 4,
      borderWidth: 3,
      boxShadow: '0px 0px 8px rgba(16, 30, 115, 0.12)'
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
      series: [
        {
          name: '',
          type: "spline",
          data: [250, 130, 150, 270, 200, 110, 300],
          color: "#FAC032",
            stops: [
              [0, Highcharts.getOptions().colors[6]],
              [1, Highcharts.color(Highcharts.getOptions().colors[6]).setOpacity(0).get('rgba')]
            ]
          }
      ]
    };

export default options;