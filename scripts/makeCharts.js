const size=10;
const margin = {top: 10, right: 30, bottom: 30, left: 50},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;   

export default function makeChart(Goal,svgtarget,content,mygroups,mygroup,color,yheight,title,units){

    let idtarget = svgtarget.slice(1);

    document.getElementById(idtarget).innerHTML = ""; 

    let svg = d3.select(svgtarget) 
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleLinear()
    .domain(d3.extent(content, (data) => data.Year))
    .range([ 0, width ]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format(".0f")));


    let y = d3.scaleLinear()
    .domain([0, yheight])
    .range([ height, 0 ]);

    svg.append("g")
        .call(d3.axisLeft(y));           

    const sumstat = d3.nest()                             
    .key(function(d) { return d.Year;})
    .entries(content);


    const stackedData = d3.stack()
    .keys(mygroup)
    .value(function(d, key){
        return d.values[key - 1].Value
    })
    (sumstat)

    svg
        .selectAll("layers")
        .data(stackedData)
        .enter()
        .append("path")
        .style("fill", function(d) { name = mygroups[d.key-1];  return color(name); })
        .attr("d", d3.area()
              .x(function(d, i) { return x(d.data.key); })  
              .y0(function(d) { return y(d[0]); })
              .y1(function(d) { return y(d[1]); })
             )

    svg.append("g").selectAll("text")
        .data(Goal)
        .enter()
        .append("text")
        .attr("x", function(d) {
        return x(d.Year) - 25
    })
        .attr("y", function(d) {
        return y(d.Value) - 5
    })
        .attr("fill", "black")
        .text(function(d) {
        return d.Text
    });

    svg.selectAll("labelcolors")
        .data(mygroups)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return color(d)})

    svg.selectAll("labels")
        .data(mygroups)
        .enter()
        .append("text")
        .attr("x", 10 + size*1.2)
        .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return color(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle") 

    svg.append("path")
        .datum(Goal)
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
              .x(function(d) { return x(d.Year) })
              .y(function(d) { return y(d.Value) })
             )
}