export default function createCharts(generation) {   
    document.getElementById("genArea").innerHTML = "";
    
    let genContent = new Array(0);
    for (let i= 0; i<33; i++){
	genContent = genContent.concat([{"Year":generation[0][i],"Source":"Coal","Value":generation[1][i]}],
            {"Year":generation[0][i],"Source":"Gas","Value":generation[2][i]},
            {"Year":generation[0][i],"Source":"Nuke","Value":generation[7][i]},
            {"Year":generation[0][i],"Source":"Hydro","Value":generation[6][i]},
            {"Year":generation[0][i],"Source":"Solar","Value":generation[8][i]},
            {"Year":generation[0][i],"Source":"Wind","Value":generation[9][i]},
            {"Year":generation[0][i],"Source":"Pet","Value":generation[3][i]},
            {"Year":generation[0][i],"Source":"Bio","Value":generation[4][i]},
            {"Year":generation[0][i],"Source":"Geo","Value":generation[5][i]},
            {"Year":generation[0][i],"Source":"Other","Value":generation[10][i]});
    };
    
    let resContent = new Array(0);
    for (let i= 0; i<33; i++){
	resContent = resContent.concat([{"Year":rescomm[0][i],"Source":"Grid","Value":rescomm[9][i]},
            {"Year":rescomm[0][i],"Source":"Solar","Value":rescomm[7][i]},
            {"Year":rescomm[0][i],"Source":"Wind","Value":rescomm[8][i]},
            {"Year":rescomm[0][i],"Source":"Pet","Value":rescomm[3][i]},
            {"Year":rescomm[0][i],"Source":"Bio","Value":rescomm[4][i]},
            {"Year":rescomm[0][i],"Source":"Geo","Value":rescomm[5][i]},
            {"Year":rescomm[0][i],"Source":"Gas","Value":rescomm[2][i]},
            {"Year":rescomm[0][i],"Source":"Coal","Value":rescomm[1][i]}],
            {"Year":rescomm[0][i],"Source":"Nuke","Value":rescomm[6][i]},
            {"Year":rescomm[0][i],"Source":"Other","Value":rescomm[10][i]});
    };    
    
 {
    let genGoal = new Array(0);
    for (let i= 0; i<33; i++){
    genGoal = genGoal.concat([{"Year":2018+i,"Name":"Goal","Value":4178+((5400-4178)/32 * (2018+i-2018))-404}]);
    }
    
    const margin = {top: 10, right: 30, bottom: 30, left: 50},
	  width = 460 - margin.left - margin.right,
	  height = 400 - margin.top - margin.bottom;                   
    
    let svg = d3.select("#genArea") 
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform",
		      "translate(" + margin.left + "," + margin.top + ")");
    
    let x = d3.scaleLinear()
	      .domain(d3.extent(genContent, (data) => data.Year))
	      .range([ 0, width ]);
    
    svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));
    
    let y = d3.scaleLinear()
	      .domain([0, 10000])
	      .range([ height, 0 ]);
    
    svg.append("g")
       .call(d3.axisLeft(y));           
    
    const sumstat = d3.nest()                             
		      .key(function(d) { return d.Year;})
		      .entries(genContent);
    
    const mygroups = ["Coal", "Natural Gas", "Nuclear", "Hydropower", "Solar", "Wind","Petroleum", "Biomass", "Geothermal",    "Other"] // list of group names
    const mygroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const stackedData = d3.stack()
			  .keys(mygroup)
			  .value(function(d, key){
			      return d.values[key - 1].Value
			  })
    (sumstat)
    
    x = d3.scaleLinear()                     
	  .domain(d3.extent(genContent, (data) => data.Year))
	  .range([ 0, width ]);
    svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x).ticks(5));
    
    y = d3.scaleLinear()
	  .domain([0, 10000])
	  .range([ height, 0 ]);
    
    svg.append("g")
       .call(d3.axisLeft(y));
    
    const color = d3.scaleOrdinal()
		    .domain(mygroups)
		    .range(['#2A2A2A','#FF8B00','#AF00FF','#007EFF','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#AFACAC'])
    
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
    
var size = 10
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
      .datum(genGoal)
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", ("3, 3"))
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Year) })
        .y(function(d) { return y(d.Value) })
        )
    
    svg
    .append("text")
    .attr("x", width - 25)
    .attr("y", 170)
    .text("Goal")
    .style("font-size", "12px") 
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle") 

} //generation
{
    let resGoal = new Array(0);
    for (let i= 0; i<33; i++){
    resGoal = resGoal.concat([{"Year":2018+i,"Name":"Goal","Value":4178+((5400-4178)/32 * (2018+i-2018))-404}]);
    }
    
    const margin = {top: 10, right: 30, bottom: 30, left: 50},
	  width = 460 - margin.left - margin.right,
	  height = 400 - margin.top - margin.bottom;                   
    
    let svg = d3.select("#resArea") 
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform",
		      "translate(" + margin.left + "," + margin.top + ")");
    
    let x = d3.scaleLinear()
	      .domain(d3.extent(resContent, (data) => data.Year))
	      .range([ 0, width ]);
    
    svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));
    
    let y = d3.scaleLinear()
	      .domain([0, 10000])
	      .range([ height, 0 ]);
    
    svg.append("g")
       .call(d3.axisLeft(y));           
    
    const sumstat = d3.nest()                             
		      .key(function(d) { return d.Year;})
		      .entries(resContent);
    
    const mygroups = ["Coal", "Natural Gas", "Nuclear", "Hydropower", "Solar", "Wind","Petroleum", "Biomass", "Geothermal",    "Other"] // list of group names
    const mygroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const stackedData = d3.stack()
			  .keys(mygroup)
			  .value(function(d, key){
			      return d.values[key - 1].Value
			  })
    (sumstat)
    
    x = d3.scaleLinear()                     
	  .domain(d3.extent(resContent, (data) => data.Year))
	  .range([ 0, width ]);
    svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x).ticks(5));
    
    y = d3.scaleLinear()
	  .domain([0, 10000])
	  .range([ height, 0 ]);
    
    svg.append("g")
       .call(d3.axisLeft(y));
    
    const color = d3.scaleOrdinal()
		    .domain(mygroups)
		    .range(['#2A2A2A','#FF8B00','#AF00FF','#007EFF','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#AFACAC'])
    
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
    
var size = 10
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
      .datum(genGoal)
      .attr("fill", "none")
      .attr("stroke", "#000000")
      .style("stroke-dasharray", ("3, 3"))
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Year) })
        .y(function(d) { return y(d.Value) })
        )
    
    svg
    .append("text")
    .attr("x", width - 25)
    .attr("y", 170)
    .text("Goal")
    .style("font-size", "12px") 
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle") 

} //rescomm
}
