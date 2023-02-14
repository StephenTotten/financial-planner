document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
  fetch('/api/users/categories/:id')
  // save data to session
});
// creates wants and needs chart
  // const WantsNeedsChart = document.getElementById('wnChart'); new Chart(WantsNeedsChart, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Needs 50%', 'Wants 30%', 'Savings 20%'],
  //     datasets: [{
  //       label: 'Budgeting',
  //       data: [50, 30, 20],
  //       backgroundColor: ['rgb(27, 154, 170)', 'rgb(239, 71, 111)', 'rgb(6, 214, 160)'],
  //       hoverOffset: 4
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     tooltips: {
  //       enabled: true
  //     },
  //     legend: {
  //       position: 'top'
  //     },
  //     layout: {
  //       padding: {
  //         left: 0,
  //         right: 0
  //       }
  //     }
  //   }
  // })

// creates breakdown chart for user
  // const BreakdownChart = document.getElementById('myBreakdownChart'); new Chart(ctx, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Categories', 'Wants 30%', 'Savings 20%'],
  //     datasets: [{
  //       label: 'Budgeting',
  //       data: [50, 30, 20],
  //       backgroundColor: ['rgb(27, 154, 170)', 'rgb(239, 71, 111)', 'rgb(6, 214, 160)'],
  //       hoverOffset: 4
  //     }]
  //   },
  //   options: {
  //     responsive: true,
  //     tooltips: {
  //       enabled: true
  //     },
  //     legend: {
  //       position: 'top'
  //     },
  //     layout: {
  //       padding: {
  //         left: 0,
  //         right: 0
  //       }
  //     }
  //   }
  // });

