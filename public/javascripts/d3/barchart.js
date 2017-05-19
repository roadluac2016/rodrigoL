var dataset = [
							{keybc:"GruntJS", 			valuebc:100},
							{keybc:"Jquery", 			valuebc:71},
							{keybc:"CSS", 			valuebc:100},
							{keybc:"Maps", 		valuebc:93},
							{keybc:"Bootstrap", 		valuebc:43},
							{keybc:"HTML", 			valuebc:20},
							{keybc:"GIT", 		valuebc:10},
							{keybc:"SEO", 			valuebc:30},
							{keybc:"D3JS",			valuebc:8}
						];   




        var marginBars = { top: 0, right: 0, bottom: 0, left: 0 },
        wbc = parseInt(d3.select("#barChart").style('width'), 10),
        wbc = wbc - marginBars.left - marginBars.right,
        //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
        ratioUno = 0.4,
        hbc = wbc * ratioUno;


var padding = 2;


var w = wbc;
var h = hbc;

var axisPaddingbc = 20;



// Domain and ranges
    
    var xscalebc = d3.scaleBand()
		.domain(dataset.map(function(entry){
			return entry.keybc;
		})) 
		.range([30,w-30]); 

	var yscalebc = d3.scaleLinear()
		.domain([0, d3.max(dataset, function (d){
			return d.valuebc;
		})])  
		.range([h-30,30 ]); 


// AXIS 

var xAxisbc =  d3.axisBottom(xscalebc);
var yAxisbc =  d3.axisLeft(yscalebc);



var linearColorScalebc = d3.scaleLinear()
						.domain([0, dataset.length])
						.range(["#f4f8f9", "#19638e"]);



var svgb = d3.select("#barChart").append("svg")
   .attr("width", w)
   .attr("height", h);

    svgb.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       		.attr("x", function(d,i){
					return xscalebc(d.keybc);
				})
			.attr("y", function(d,i){
					return yscalebc(d.valuebc);
				})
			.attr("width", function(d,i){
					return xscalebc.step()-5; 
				})
			.attr("height", function(d,i){
					return h - yscalebc(d.valuebc)-30;
				})
			.style("fill", function(d,i){
					return linearColorScalebc (i);
					//return OrdinalColorScale (i);
				})
			.on("mouseover", function(d,i){
					d3.select(this).style("fill","yellow");
				})
			.on("mousemove", function(d,i){
					
				})
			.on("mouseout", function(d,i){
					d3.select(this).style("fill", linearColorScalebc(i));
			});

	
				  // Add the x Axis
				  svgb.append("g")
				      .style("fill", "none" )
				      .style("shape-rendering", "crispEdges" )
				      .style("stroke", "transparent" )
				      .style("color", "black" ) // Definen extilos de TEXTO
				      .attr("class" , "x axis") // Definen extilos de TEXTO
				      .attr("transform", "translate(0," + (h - 30) + ")")
				      .call( d3.axisBottom(xscalebc) 

        			  );


				  // Add the y Axis
				  svgb.append("g")
				      .style("fill", "none" )
				      .style("shape-rendering", "crispEdges" )
				      .style("stroke", "transparent" ) // Definen extilos de TEXTO
				      .style("color", "black" ) // Definen extilos de TEXTO
				      .attr("class" , "x axis")
				      .attr("transform", " translate(" + (axisPaddingbc +10) + ", 0) ")
				      .call( d3.axisLeft(yscalebc) 
				      		.ticks(4)
        					.tickFormat(d3.format(".0s"))
        			   );













