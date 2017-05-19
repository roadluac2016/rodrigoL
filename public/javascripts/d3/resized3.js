// ______ resize function

        function resizeResp(){
			        d3.select("svg").remove();
			        d3.select("svg").remove();
			        d3.select("svg").remove();
















		//________________________________________ BAR CHART!
					var dataset = [
							{keybc:"GruntJS", 			valuebc:100},
							{keybc:"Jquery", 			valuebc:71},
							{keybc:"CSS", 			valuebc:100},
							{keybc:"Maps API", 		valuebc:93},
							{keybc:"Bootstrap", 		valuebc:43},
							{keybc:"HTML", 			valuebc:20},
							{keybc:"GIT", 		valuebc:10},
							{keybc:"SEO", 			valuebc:30},
							{keybc:"D3JS",			valuebc:8}
						];  




					        var marginBars = { top: 10, right: 10, bottom: 10, left: 10 },
					        wbc = parseInt(d3.select("#barChart").style('width'), 10),
					        wbc = wbc - marginBars.left - marginBars.right,
					        //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
					        ratio = 0.4,
					        hbc = wbc * ratio;


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
					      .call( d3.axisBottom(xscalebc) );


					  // Add the y Axis
					  svgb.append("g")
					      .style("fill", "none" )
					      .style("shape-rendering", "crispEdges" )
					      .style("stroke", "transparent" ) // Definen extilos de TEXTO
					      .style("color", "black" ) // Definen extilos de TEXTO
					      .attr("class" , "x axis")
					      .attr("transform", " translate(" + (axisPaddingbc +10) + ", 0) ")
					      .call( d3.axisLeft(yscalebc) );




























		//_________________________________________ SPIDER CHART

	              var links = [

	                {source: "UX / UI", target: "Posicionamiento  SEO /SEM", type: "suit"},
	                {source: "UX / UI", target: "Social Media", type: "suit"},
	                {source: "UX / UI", target: "E-mailing", type: "suit"},
	                {source: "UX / UI", target: "Goolge Analytics", type: "resolved"},
	                {source: "UX / UI", target: "Career", type: "licensing"},

	                
	                {source: "Front end Development", target: "Grunt JS", type: "resolved"},
	                {source: "Front end Development", target: "HTML 5", type: "suit"},
	                {source: "Front end Development", target: "CSS3", type: "suit"},
	                {source: "Front end Development", target: "D3.js", type: "suit"},
	                {source: "Front end Development", target: "Bootstrap", type: "suit"},
	                {source: "Front end Development", target: "Jquery", type: "suit"},
	                {source: "Front end Development", target: "GIT", type: "suit"},
	                {source: "Front end Development", target: "Google Maps API", type: "suit"},
	                {source: "Front end Development", target: "SEO", type: "suit"},
	                {source: "SEO", target: "MetaData Structures", type: "suit"},
	                {source: "Front end Development", target: "Career", type: "licensing"},


	                {source: "Design", target: "Photoshop", type: "suit"},
	                {source: "Design", target: "Illusrtator", type: "suit"},
	                {source: "Design", target: "Image Magik", type: "suit"},
	                {source: "Design", target: "Career", type: "licensing"},

	                {source: "Marketing", target: "Career", type: "licensing"},
	                {source: "Marketing", target: "Google AdWords", type: "licensing"},
	               
	              ];

	              var nodes = {};


	              links.forEach(function(link) {
	                link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
	                link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
	              });


	                      var marginSpider = { top: 0, right: 0, bottom: 0, left: 0 },
	                      width = parseInt(d3.select(".spiderBox").style('width'), 10),
	                      width = width - marginSpider.left - marginSpider.right,
	                      //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
	                      ratio = 0.5,
	                      height = width * ratio+10;



	              var simulation = d3.forceSimulation(nodes)
	                  .nodes(d3.values(nodes))
	                  .force("link", d3.forceLink(links).distance(65))          
	                  .force("charge", d3.forceManyBody().strength(-90))
	                  //.force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2))
	                 // .force("x", d3.forceX().strength(0.002))
	                 // .force("y", d3.forceY().strength(0.002))               
	                 .force("center", d3.forceCenter( width /2, height/2 ))
	                  .on("tick", tick);
	                //  .restart();


	              var svg = d3.select(".spiderBox").append("svg")
	                  .attr("width", width)
	                  .attr("height", height);


	              svg.append("defs").selectAll("marker")
	                  .data(["suit", "licensing", "resolved"])
	                  .enter()
	                    .append("marker")
	                    .attr("id", function(d,i) { return d; })
	                    .attr("viewBox", "0 -5 100 100")
	                    .attr("refX", 1)
	                    .attr("refY", -1.5)
	                    .attr("markerWidth", 2)
	                    .attr("markerHeight", 2)
	                    .attr("orient", "auto")
	                  .append("path")
	                  .attr("d", "M0,-5L10,0L0,5");



	              var path = svg.append("g").selectAll("path")
	                  .data(links)
	                  .enter()
	                    .append("path")
	                    .attr("class", function(d,i) { 
	                                    return "link " + d.type; 
	                                  })
	                    .attr("marker-end", function(d,i) { 
	                                    return "url(#" + d.type + ")"; 
	                                  });


	              var circle = svg.append("g").selectAll("circle")
	                  .data(simulation.nodes())
	                  .enter()
	                    .append("circle")
	                    .classed("circle", true)
	                    .attr("r", 6.5)
	                      .call(d3.drag()
	                      .on("start", dragstarted)
	                      .on("drag", dragged)
	                      .on("end", dragended));
	                    //.call(simulation.drag)
	                    
	              // DRAAAAAAAAAAAAAAAAAAG
	              function dragstarted() {
	                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	                d3.event.subject.fx = d3.event.subject.x;
	                d3.event.subject.fy = d3.event.subject.y;
	              }
	              function dragged() {
	                d3.event.subject.fx = d3.event.x;
	                d3.event.subject.fy = d3.event.y;
	              }
	              function dragended() {
	                if (!d3.event.active) simulation.alphaTarget(0);
	                d3.event.subject.fx = null;
	                d3.event.subject.fy = null;
	              }
	             

	              var text = svg.append("g").selectAll("text")
	                .data(simulation.nodes())
	                .enter().append("text")
	                  .attr("x", 11)
	                  .attr("y", ".2em")
	                  .text(function(d,i) { 
	                    return d.name; 
	                  });


	              // Use elliptical arc path segments to doubly-encode directionality.
	              function tick() {
	                path.attr("d", linkArc);
	                circle.attr("transform", transform);
	                text.attr("transform", transform);

	              }

	              function linkArc(d,i) {
	                var dx = d.target.x - d.source.x,
	                    dy = d.target.y - d.source.y,
	                    dr = Math.sqrt(dx * dx + dy * dy);
	                return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;

	              }

	              function transform(d) {
	                return "translate(" + d.x + "," + d.y + ")";
	              }





















	    // _____________________________________________ Pie Chart

				var dataPie = [
				  {"letter":"q","presses":1},
				  {"letter":"w","presses":2},
				  {"letter":"e","presses":2}
				];


			    var marginPie = { top: 0, right: 0, bottom: 0, left: 0 },
		        widthPie = parseInt(d3.select("#pieChart").style('width'), 10),
		        widthPie = widthPie - marginPie.left - marginPie.right,
		        //ratio doesn't always have to be perfect, just about the ratio between the height and width--so that it won't resize based on a height larger than the container
		        ratioPie = 0.82,
		        heightPie = widthPie * ratioPie;
		        radius = Math.min(widthPie, heightPie) / 2;

				var color = d3.scaleOrdinal()
				  .range(["#2C93E8","rgba(201, 201, 201, 0.3)","rgba(234, 217, 88, 0.3)"]);
				  
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
				        });
				  
				g.append("text")
				  .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
				  .text(function(d) { return d.dataPie.letter;}) 
				  .style("fill", "#fff")
				  .on("mouseover", function(d,i){
					          d3.select(this).style("fill","yellow");
					        })
				  .on("mouseout", function(d,i){
					          d3.select(this).style("fill", color(i));
					      });



        } /*-- Rezise function End */


        d3.select(window).on('resize', resizeResp);