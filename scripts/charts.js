export default function createCharts(generation) {   // honestly mainly copying from https://www.d3-graph-gallery.com/graph/stackedarea_basic.html
    document.getElementById("area").innerHTML = "";
    
    let content = new Array(0);
    for (let i= 0; i<33; i++){
	content = content.concat([{"Year":generation[0][i],"Source":"Other","Value":generation[10][i]}],
				 {"Year":generation[0][i],"Source":"Wind","Value":generation[9][i]},
				 {"Year":generation[0][i],"Source":"Solar","Value":generation[8][i]},
				 {"Year":generation[0][i],"Source":"Nuke","Value":generation[7][i]},
				 {"Year":generation[0][i],"Source":"Hydro","Value":generation[6][i]},
				 {"Year":generation[0][i],"Source":"Geo","Value":generation[5][i]},
				 {"Year":generation[0][i],"Source":"Bio","Value":generation[4][i]},
				 {"Year":generation[0][i],"Source":"Pet","Value":generation[3][i]},
				 {"Year":generation[0][i],"Source":"Gas","Value":generation[2][i]},
				 {"Year":generation[0][i],"Source":"Coal","Value":generation[1][i]});
    };
    let theGoal = new Array(0);
    theGoal = theGoal.concat([{"Year":2018,"Name":"Goal","Value":8000},{"Year":2050,"Name":"Goal","Value":8000}]);

    
    const margin = {top: 10, right: 30, bottom: 30, left: 50},
	  width = 460 - margin.left - margin.right,
	  height = 400 - margin.top - margin.bottom;                   //i get these 4 blocks
    
    let svg = d3.select("#area")
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
       .call(d3.axisBottom(x));
    
    let y = d3.scaleLinear()
	      .domain([0, 10000])
	      .range([ height, 0 ]);
    
    svg.append("g")
       .call(d3.axisLeft(y));           
    
    const sumstat = d3.nest()                             //this is the stuff i'm not sure whats going on about
		      .key(function(d) { return d.Year;})
		      .entries(content);
    
    const mygroups = ["Coal", "Gas", "Pet", "Bio", "Geo", "Hydro", "Nuke", "Solar", "Wind", "Other"] // list of group names
    const mygroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const stackedData = d3.stack()
			  .keys(mygroup)
			  .value(function(d, key){
			      return d.values[key - 1].Value
			  })
    (sumstat)
    
    x = d3.scaleLinear()                      //(but i do get these two)
	  .domain(d3.extent(content, (data) => data.Year))
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
		    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
    
    svg
		    .selectAll("mylayers")
		    .data(stackedData)
		    .enter()
		    .append("path")
		    .style("fill", function(d) { name = mygroups[d.key-1];  return color(name); })
		    .attr("d", d3.area()
				 .x(function(d, i) { return x(d.data.key); })   //should this be content, not data? throws errors with either
				 .y0(function(d) { return y(d[0]); })
				 .y1(function(d) { return y(d[1]); })
		    )


}
