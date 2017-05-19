var links = [

  {source: "UX / UI", target: "HotJar", type: "suit"},
  {source: "UX / UI", target: "Formísimo", type: "suit"},
  {source: "UX / UI", target: "OptimalWorkShop", type: "resolved"},
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


        var margin = { top: 20, right: 10, bottom: 0, left: 10 },
        width = parseInt(d3.select(".spiderBox").style('width'), 10),
        width = width - margin.left - margin.right,
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
      
// DRAAG
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
 








