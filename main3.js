Highcharts.chart('container3', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Projects'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Projects'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} projects</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
        name: 'Java',
        data: [10,5,5,2,5,8,7,8,6,5,4,5]
    
      }, {
        name: 'Angular',
        data: [5,8,7,9,8,7,2,1,3,5,7,8]
    
      }, {
        name: 'Node',
        data: [8,7,9,7,8,5,2,1,3,3,2,3]
    
      }, {
        name: 'Android',
        data: [10,11,12,7,5,6,3,4,7,2,5,8]
    
      }]
  });