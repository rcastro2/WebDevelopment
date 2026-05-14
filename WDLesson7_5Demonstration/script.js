let data;
let math = ["Math",79.0,80.0,79.9,78.8,73.4,77.2,74.5,78.7,76.8 ]
let english = ["English",79.7,78.8,81.6,80.6,82.3,77.4,79.5,78.6,77.9]
let science = ["Science",78.0,81.5,81.6,81.6,82.2,82.4,81.3,80.1,78.2]
let social = ["Social Studies",95.0,80.6,80.8,81.5,81.8,80.6,81.1,80.9,80.6,81.3]

let course_count = [
  ["Math",3737],
  ["English",3761],
  ["Science",3504],
  ["Social Studies",3780]
]

function exploringCharts(){
  let chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      type:"pie"
    }
  });
}


function lineChart(){
  let data = [math,english];
  displayChart(data, "chart", "line");
}
function barChart(){
  let data = [math,english];
  displayChart(data, "chart", "bar");
}
function pieChart(){
  displayChart(course_count, "chart", "pie");
}

