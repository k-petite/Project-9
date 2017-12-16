var ctx = "traffic";
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        // Chart.defaults.global.legend: [display: 'false'],
        datasets: [{
            label: 'none',
            data: [50, 100, 175, 125, 225, 100, 100],
            backgroundColor: [
                '#e2e4f6'
            ],
        }]
    },
    options: {
      legend: {
         display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var ctx = "daily-traffic";
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        // Chart.defaults.global.legend: [display: 'false'],
        datasets: [{
            label: 'none',
            data: [50, 100, 175, 125, 225, 100, 100],
            backgroundColor: [
                '#7276bf',
                '#7276bf',
                '#7276bf',
                '#7276bf',
                '#7276bf',
                '#7276bf',
                '#7276bf',
            ],
        }]
    },
    options: {
      legend: {
         display: false
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
