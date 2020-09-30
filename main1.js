Highcharts.chart('container1', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Projects On',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'blue'
          }
        },
        startAngle: -180,
        endAngle: 180,
        center: ['50%', '65%'],
        size: '80%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Projects on',
      innerSize: '75%',
      data: [
        ['Java', 120],
        ['Angular',105],
        ['Node',96],
        ['Android',129]
      
        
      ]
    }]
  });
  