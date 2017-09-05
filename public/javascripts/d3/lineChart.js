
var dataline1 = [

     {"mes":1, "impuestoPorcentaje":20},
     {"mes":2, "impuestoPorcentaje":14},
     {"mes":3, "impuestoPorcentaje":20},
     {"mes":4, "impuestoPorcentaje":21},
     {"mes":5, "impuestoPorcentaje":15},
     {"mes":6, "impuestoPorcentaje":22},
     {"mes":7, "impuestoPorcentaje":9},
     {"mes":8, "impuestoPorcentaje":6},
     {"mes":9, "impuestoPorcentaje":23},
     {"mes":10, "impuestoPorcentaje":7},
     {"mes":11, "impuestoPorcentaje": 40},
     {"mes":12, "impuestoPorcentaje": 45},
     {"mes":13, "impuestoPorcentaje":20},
     {"mes":14, "impuestoPorcentaje":14},
     {"mes":15, "impuestoPorcentaje":20},
     {"mes":16, "impuestoPorcentaje":21},
     {"mes":17, "impuestoPorcentaje":15},
     {"mes":18, "impuestoPorcentaje":22},
     {"mes":19, "impuestoPorcentaje":9},
     {"mes":20, "impuestoPorcentaje":6},
     {"mes":21, "impuestoPorcentaje":23},
     {"mes":22, "impuestoPorcentaje":7},
     {"mes":23, "impuestoPorcentaje": 40},
     {"mes":34, "impuestoPorcentaje": 45},
     {"mes":25, "impuestoPorcentaje":20},
     {"mes":26, "impuestoPorcentaje":14},
     {"mes":27, "impuestoPorcentaje":20},
     {"mes":28, "impuestoPorcentaje":21},
     {"mes":29, "impuestoPorcentaje":15},
     {"mes":30, "impuestoPorcentaje":22},
     {"mes":31, "impuestoPorcentaje":9},
     {"mes":32, "impuestoPorcentaje":6},
     {"mes":33, "impuestoPorcentaje":23},
     {"mes":34, "impuestoPorcentaje":7},
     {"mes":35, "impuestoPorcentaje": 40},
     {"mes":36, "impuestoPorcentaje": 45}
];



var dataline2 = [

     {"mes":1, "impuestoPorcentaje":14},
     {"mes":2, "impuestoPorcentaje":19},
     {"mes":3, "impuestoPorcentaje":24},
     {"mes":4, "impuestoPorcentaje":24},
     {"mes":5, "impuestoPorcentaje":24},
     {"mes":6, "impuestoPorcentaje":27},
     {"mes":7, "impuestoPorcentaje":32},
     {"mes":8, "impuestoPorcentaje":38},
     {"mes":9, "impuestoPorcentaje":11},
     {"mes":10, "impuestoPorcentaje":25},
     {"mes":11, "impuestoPorcentaje": 40},
     {"mes":12, "impuestoPorcentaje": 45}

];


var dataline3 = [

     {"mes":1, "impuestoPorcentaje":14},
     {"mes":2, "impuestoPorcentaje":39},
     {"mes":3, "impuestoPorcentaje":24},
     {"mes":4, "impuestoPorcentaje":2},
     {"mes":5, "impuestoPorcentaje":24},
     {"mes":6, "impuestoPorcentaje":7},
     {"mes":7, "impuestoPorcentaje":32},
     {"mes":8, "impuestoPorcentaje":28},
     {"mes":9, "impuestoPorcentaje":11},
     {"mes":10, "impuestoPorcentaje":25},
     {"mes":11, "impuestoPorcentaje": 30},
     {"mes":12, "impuestoPorcentaje": 15}

];


var marginlc = { top: 0, right: 0, bottom: 0, left: 0 },
wlc = parseInt(d3.select("#barChart").style('width')),
wlc = wlc - marginlc.left - marginlc.right,        
ratioUno = 0.4,
hlc = wlc * ratioUno;



var wl = wlc - marginlc.left - marginlc.right;
var hl = hlc - marginlc.top - marginlc.bottom;

var axisPadding = 20;


var svgl = d3.select("#lineChart").append("svg")
     .attrs({
         width: wl,
         height: hl
     });




// Domain and ranges
    
    var xscalel1 = d3.scaleLinear()
      .domain([0, d3.max( dataline1, function(d){
        return d.mes;
        })
      ])
      .range([40, wl-40]);


    var yscalel1 = d3.scaleLinear()
    .domain([ 0, d3.max( dataline1, function(d){ 
        return d.impuestoPorcentaje; 
        })
    ])
    .range([hl-33,53]);



    var xscalel2 = d3.scaleLinear()
      .domain([0, d3.max( dataline2, function(d){
        return d.mes;
        })
      ])
      .range([40, wl-40]);

    var yscalel2 = d3.scaleLinear()
    .domain([ 0, d3.max( dataline2, function(d){ 
        return d.impuestoPorcentaje; 
        })
    ])
    .range([hl-33,53]);



     var xAxisf =  d3.axisBottom(xscalel1);
     var yAxisf =  d3.axisLeft(yscalel1);



// Lines

 var lineOne = d3.line()
     .x(function(d) {
          return xscalel1(d.mes);
     })
     .y(function(d) {
         return yscalel1(d.impuestoPorcentaje);
     })
     .curve(d3.curveLinear);


var lineTwo = d3.line()
     .x(function(d) {
          return xscalel2(d.mes);
     })
     .y(function(d) {
         return yscalel2(d.impuestoPorcentaje);
     })
     .curve(d3.curveMonotoneX);


var lineThree = d3.line()
     .x(function(d) {
          return xscalel2(d.mes);
     })
     .y(function(d) {
         return yscalel2(d.impuestoPorcentaje);
     })
     .curve(d3.curveLinear);






 var vis = svgl.append("path")
     .attrs({

         d: lineOne(dataline1),
         "stroke": "#19638e",
         "stroke-width": 2,
         "fill": "none"

     });


  var vis2 = svgl.append("path")
       .attrs({

           d: lineTwo(dataline2),
           "stroke": "orange",
           "stroke-width": 2,
           "fill": "none"

       });

  var vis3 = svgl.append("path")
       .attrs({

           d: lineTwo(dataline3),
           "stroke": "green",
           "stroke-width": 2,
           "fill": "none"

       });



  // Add the x Axis
  svgl.append("g")
      .style("fill", "none" )
      .style("shape-rendering", "crispEdges" )
      .style("stroke", "white" )
      .style("color", "white" )
      .attr("class" , "x axis")
      .attr("transform", "translate(0," + (hl - 30) + ")")
      .call( d3.axisBottom(xscalel1) );


  // Add the y Axis
  svgl.append("g")
      .style("fill", "none" )
      .style("shape-rendering", "crispEdges" )
      .style("stroke", "white" )
      .style("color", "white" )
      .attr("class" , "x axis")
      .attr("transform", " translate(" + (axisPadding +10) + ", 0) ")
      .call( d3.axisLeft(yscalel1) );