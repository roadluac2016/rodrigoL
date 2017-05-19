// var dataPie = [10, 20, 100];
/*
var dataPie = [
    {"nombre":"Perseverance",       "valor":30},
    {"nombre":"sociability",       "valor":20},
    {"nombre":"curiosity",      "valor":80}

  ]; 

        var marginPie = { top: 0, right: 0, bottom: 0, left: 0 },
        widthPie = parseInt(d3.select("#pieChart").style('width'), 10),
        widthPie = widthPie - marginPie.left - marginPie.right,
        //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
        ratioPie = 0.42,
        heightPie = widthPie * ratioPie;
        radius = Math.min(widthPie, heightPie) / 2;



var color = d3.scaleOrdinal()
    .range(["#98abc5", "#8a89a6", "#7b6888"]);

var arc = d3.arc()
    .outerRadius(radius - 12)
    .innerRadius(30);

var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.valor; })(data);

var svgPie = d3.select("#pieChart").append("svg")
    .attr("width", widthPie)
    .attr("height", heightPie)
      .append("g")
      .attr("transform", "translate(" + widthPie / 4 + "," + heightPie / 2 + ")");

  var g = svgPie.selectAll(".arc")
      .data(pie(dataPie)
        .enter().append("g")
          .attr("class", "arc");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .text(function(d) { return d.data; });





*/















var dataPie = [
  {"letter":"q","presses":1},
  {"letter":"w","presses":2},
  {"letter":"e","presses":2}
];
console.log(dataPie);


        var marginPie = { top: 0, right: 0, bottom: 0, left: 0 },
        widthPie = parseInt(d3.select("#pieChart").style('width'), 10),
        widthPie = widthPie - marginPie.left - marginPie.right,
        //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
        ratioPie = 0.82,
        heightPie = widthPie * ratioPie;
        radius = Math.min(widthPie, heightPie) / 2;

 /*       
var width = 300,
  height = 300,
  radius = Math.min(width, height) / 2;
  */

var color = d3.scaleOrdinal()
  .range(["rgba(44, 147, 232, 0.4)","rgba(201, 201, 201, 0.3)","rgba(234, 217, 88, 0.3)"]);
  
var pielabels = d3.pie()
  .value(function(d) { return d.presses; })(dataPie);
  
var arclabels = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0)
  .innerRadius(30);
  
var labelArclabels = d3.arc()
  .outerRadius(radius - 40)
  .innerRadius(radius - 40);  

var svglabels = d3.select("#pieChart")
  .append("svg")
  .attr("width", widthPie)
  .attr("height", heightPie)
    .append("g")
    .attr("transform", "translate(" + widthPie/2 + "," + heightPie/2 +")"); // Moving the center point

var g = svglabels.selectAll("arc")
  .data(pielabels)
  .enter().append("g")
  .attr("class", "arc");
  
g.append("path")
  .attr("d", arclabels)
  .style("fill", function(d) { 
                    return color(d.data.letter);
        })
  .on("mouseover", function(d,i){
          d3.select(this).style("fill","yellow");
        })
  .on("mouseout", function(d,i){
          d3.select(this).style("fill", color(i));
      });
  
g.append("text")
  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
  .text(function(d) { return d.dataPie.letter;}) 
  .style("fill", "#fff");


















