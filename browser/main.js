const Chart = require('chart.js');
let ctx1 = document.getElementById('radar');
let ctx2 = document.getElementById('polar');
let ctx3 = document.getElementById('line');
let ctx4 = document.getElementById('bar');
let ctx5 = document.getElementById('pie');

let myRadarChart = new Chart(ctx1, {
  type: 'radar',
  data: {
    labels: ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "NODEJS"],
    datasets: [
      {
        label: "Dataset #1",
        data: [75, 30, 70, 65, 65],
        backgroundColor: "rgba(250, 160, 25, 0.62)",
        borderColor: "rgba(34, 116, 162, 0.63)",
        pointBackgroundColor: 'rgba(21, 17, 227, 0.48)',
        pointBorderColor: "#FFF",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(17, 111, 180, 0.63)"
      }
    ]
  },
  options: {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

let myPolarChart = new Chart(ctx2, {
  type: 'polarArea',
  data: {
    labels: ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "NODEJS"],
    datasets: [
      {
        label: "Dataset #2",
        data: [75, 30, 70, 65, 65],
        backgroundColor: [
          "rgba(21, 205, 11, 0.74)",
          "rgba(213, 174, 11, 0.82)",
          "rgba(223, 202, 13, 0.81)",
          "rgba(48, 162, 34, 0.74)",
          "rgba(24, 186, 84, 0.68)"
        ],
        borderColor: "rgba(203, 204, 199, 0.63)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(142, 176, 235, 0.77)",
        hoverBorderColor: 2,
        hoverBorderWidth: "#FFF"
      }
    ]
  },
  options: {
    responsive: true,
    scale: {
      ticks: {
        min: 0,
        max: 100
      }
    },
    elements: {
      arc: {
          borderColor: "#000"
      }
    }
  }
});

let myLineChart = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "NODEJS"],
    datasets: [
      {
        label: "Dataset #3",
        data: [75, 30, 70, 65, 65],
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(11, 170, 117, 0.66)",
        borderColor: "rgba(77, 130, 66, 0.84)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJointStyle: "miter",
        pointBorderColor: "rgba(24, 162, 17, 0.71)",
        pointBackgroundColor: "rgba(102, 177, 18, 0.78)",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(148, 193, 21, 0.83)",
        pointHoverBorderColor: "rgba(164, 159, 18, 0.76)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      }
    ]
  },
  options: {
    responsive: true,
    // scales: {
    //   xAxes: [
    //     {
    //       type: 'linear',
    //       position: 'bottom'
    //     }
    //   ],
    //   ticks: {
    //     min: 0,
    //     max: 100
    //   }
    // }
  }
});

let myBarChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "NODEJS"],
    datasets: [
      {
        label: "Dataset #4",
        data: [75, 30, 70, 65, 65],
        backgroundColor: [
          "rgba(21, 205, 11, 0.74)",
          "rgba(213, 174, 11, 0.82)",
          "rgba(223, 202, 13, 0.81)",
          "rgba(48, 162, 34, 0.74)",
          "rgba(24, 186, 84, 0.68)"
        ],
        borderColor: "rgba(203, 27, 27, 0.69)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(125, 131, 123, 0.57)",
        hoverBorderColor: "rgb(230, 174, 79)"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100
          }
        }
      ]
    },
  }
});

let myPieChart = new Chart(ctx5, {
  type: 'pie',
  data: {
    labels: ["C++", "JAVA", "JAVASCRIPT", "PYTHON", "NODEJS"],
    datasets: [
      {
        label: "Dataset #5",
        data: [75, 30, 70, 65, 65],
        backgroundColor: [
          "rgba(21, 205, 11, 0.74)",
          "rgba(213, 174, 11, 0.82)",
          "rgba(223, 202, 13, 0.81)",
          "rgba(48, 162, 34, 0.74)",
          "rgba(24, 186, 84, 0.68)"
        ],
        hoverBackgroundColor: [
          "rgba(137, 203, 143, 0.89)",
          "rgba(237, 233, 145, 0.87)",
          "rgba(230, 240, 120, 0.64)",
          "rgba(153, 231, 117, 0.85)",
          "rgba(135, 231, 168, 0.85)"
        ],
        borderColor: "#FFF",
        borderWidth: 2,
        hoverBorderColor: "rgba(126, 124, 123, 0.71)",
        hoverBorderWidth: 2
      }
    ]
  },
  animation:{
    animateScale:true
  },
  options: {
    responsive: true,
    ticks: {
      min: 0,
      max: 100
    }
  }
});
