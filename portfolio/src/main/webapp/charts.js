google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = google.visualization.arrayToDataTable([
        ['Video', 'Views (Billions)'],
        ['Despacito', 6.66],
        ['Shape of You', 4.65],
        ['See You Again', 4.44],
        ['Masha and the Bear – Recipe for Disaster', 4.23],
      ]);

  const options = {
    'title': 'Most viewed YouTube videos',
    'width':600,
    'height':400
  };

  const chart = new google.visualization.BarChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}
