
// dummy data
import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

// example doughnut chart
  new Chart(
    document.getElementById('doughnut-chart'),
    {
      type: 'doughnut',
      labels: [
        'Green',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: data,
        backgroundColor: [
          'rgb(6, 214, 160)',
          'rgb(27, 154, 170)',
          'rgb(255, 196, 61)'
        ],
        hoverOffset: 4
      }]
    }
  );

// example radar chart
  new Chart(
    document.getElementById('radar-chart'),
    {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    }
  )
})();
 