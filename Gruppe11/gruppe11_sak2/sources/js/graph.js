var config = {
    type: 'line',
    data: {
        labels: ['Mars','April','Mai','Juni','Juli','August','September', 'Oktober'],
        datasets: [{
            label: 'Medlemsskap',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [800,770,760,750,750,740,730,730,720],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Nedgang i medlemsskap for evo'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 400,
                    max: 1000
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

