/*Highcharts*/
Highcharts.chart('container2', {

    title: {
      text: 'Projects done on  between 2010-2016'
    },
  
  
    yAxis: {
      title: {
        text: 'Number of Projects'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
      }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: [{
        name: 'Java',
        data: [20,11,15,18,15,20,21]
      }, {
        name: 'AngularJs',
        data: [11,20,18,15,17,10,14]
      }, {
        name: 'NodeJs',
        data: [10,11,14,13,18,11,19]
      }, {
        name: 'Android',
        data: [21,20,11,18,17,20,22]
      }],
responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});