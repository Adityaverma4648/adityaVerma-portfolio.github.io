var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#54004e",
  "#970097",
  "#f7bfff",
  "#d580ff",
  "#cd48ff"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels:xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Skills"
    }
  }
});