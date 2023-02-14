// HARDCODED WANTS AND NEEDS CHART

  const WantsNeedsChart = document.getElementById('wnChart'); new Chart(WantsNeedsChart, {
    type: 'doughnut',
    data: {
      labels: ['Needs 50%', 'Wants 30%', 'Savings 20%'],
      datasets: [{
        label: 'Budgeting',
        data: [50, 30, 20],
        backgroundColor: ['rgb(27, 154, 170)', 'rgb(239, 71, 111)', 'rgb(6, 214, 160)'],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      tooltips: {
        enabled: true
      },
      legend: {
        position: 'top'
      },
      layout: {
        padding: {
          left: 0,
          right: 0
        }
      }
    }
  })


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
// var BudgetOBJ = {
//   "Entertainment": [],
//   "Utilities": [],
//   "Food": [],
//   "Other": []
// };

// function updateCharts() {
//   expenseGroups = []
//   expenseTotals = []

//   budjutOBJ.transactions.forEach((transaction) => {
//     var { category, amount } = transaction
//     var index = expenseGroups.indexOf(category)

//     if (index === -1) {
//       expenseGroups.push(category)
//       expenseTotals.push(Number(amount))
//     } else {
//       expenseTotals[index] += Number(amount)
//     }
//   })
// }

// var expensesDoughnutChart = new Chart(doughnut.getContext('2d'), {
//     type: 'doughnut',
//     data: {
//       labels: ['Entertainment', 'Food', 'Utilities', 'Other'],
//       datasets: [{
//         label: 'Total Expenses',
//         data: expenseTotals,
//         backgroundColor: [
//           'rgb(255, 99, 132)',
//           'rgb(54, 162, 235)',
//           'rgb(255, 206, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(153, 102, 255)',
//           'rgb(225, 50, 64)',
//           'rgb(64, 159, 64)'
//         ]
//       }]
//     },
//     options: {
//       responsive: true,
//       animation: {
//         onComplete: function() {
//           isChartRendered = true
//         }
//       },
//       tooltips: {
//         enabled: true
//       },
//       legend: {
//         position: 'top'
//       },
//       layout: {
//         padding: {
//           left: 0,
//           right: 0
//         }
//       }
//     }
//   })

  // calculate income groups for pie chart
  // var incomeGroup = BudgetOBJ.incomeGroup
  // var income      = BudgetOBJ.income

  // var temp = {}
  // incomeGroup.forEach((value, index) => {
  //   temp.hasOwnProperty(value) ? temp[value]+=parseInt(income[index]) : temp[value]=parseInt(income[index])
  // })

  // incomeGroup = Object.keys(temp)
  // income = Object.values(temp)
  

  // var arr = incomeGroup
  // var newArr = arr.map(element => {
  //   return element.toUpperCase()
  // })
  // incomeGroup = newArr

// find checkbook data based on user and sum each category

// BELOW IS CHART EXAMPLE WE HAD

// const checkbooks = { checkbooks }
// console.log(checkbooks)
// const ctx = document.getElementById('myChart'); new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Entertainment', 'Food', 'Utilities', 'Other'],
//     datasets: [{
//       label: 'Total Expenses',
//       data: [],
//       backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
//       hoverOffset: 4
//     }]
//   },
//   options: {
//     responsive: true,
//     animation: {
//       onComplete: function() {
//         isChartRendered = true
//       }
//     },
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


