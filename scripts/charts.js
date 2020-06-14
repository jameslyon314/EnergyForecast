export default function createCharts(generation, rescomm, industry, transportation) {   
    document.getElementById("genArea").innerHTML = "";
    document.getElementById("resArea").innerHTML = "";
    document.getElementById("indArea").innerHTML = "";
    document.getElementById("transArea").innerHTML = "";


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
                                        {"Year":rescomm[0][i],"Source":"Gas","Value":rescomm[2][i]},
                                        {"Year":rescomm[0][i],"Source":"Solar","Value":rescomm[7][i]},
                                        {"Year":rescomm[0][i],"Source":"Wind","Value":rescomm[8][i]},
                                        {"Year":rescomm[0][i],"Source":"Pet","Value":rescomm[3][i]},
                                        {"Year":rescomm[0][i],"Source":"Bio","Value":rescomm[4][i]},
                                        {"Year":rescomm[0][i],"Source":"Geo","Value":rescomm[5][i]},
                                        {"Year":rescomm[0][i],"Source":"Coal","Value":rescomm[1][i]},
                                        {"Year":rescomm[0][i],"Source":"Nuke","Value":rescomm[6][i]},
                                        {"Year":rescomm[0][i],"Source":"Other","Value":rescomm[10][i]}]);
    };    

    let indContent = new Array(0);
    for (let i= 0; i<33; i++){
        indContent = indContent.concat([{"Year":industry[0][i],"Source":"Grid","Value":industry[10][i]},
                                        {"Year":industry[0][i],"Source":"Gas","Value":industry[2][i]},
                                        {"Year":industry[0][i],"Source":"Pet","Value":industry[3][i]},
                                        {"Year":industry[0][i],"Source":"Solar","Value":industry[8][i]},
                                        {"Year":industry[0][i],"Source":"Wind","Value":industry[9][i]},
                                        {"Year":industry[0][i],"Source":"Bio","Value":industry[4][i]},
                                        {"Year":industry[0][i],"Source":"Geo","Value":industry[5][i]},
                                        {"Year":industry[0][i],"Source":"Coal","Value":industry[1][i]},
                                        {"Year":industry[0][i],"Source":"Nuke","Value":industry[7][i]},
                                        {"Year":industry[0][i],"Source":"Hydro","Value":industry[6][i]},
                                        {"Year":industry[0][i],"Source":"Other","Value":industry[11][i]}]);
    };    

    let transContent = new Array(0);
    for (let i= 0; i<33; i++){
        transContent = transContent.concat([{"Year":transportation[0][i],"Source":"Pet","Value":transportation[2][i]},
                                            {"Year":transportation[0][i],"Source":"Gas","Value":transportation[1][i]},
                                            {"Year":transportation[0][i],"Source":"Grid","Value":transportation[6][i]},
                                            {"Year":transportation[0][i],"Source":"Bio","Value":transportation[3][i]},
                                            {"Year":transportation[0][i],"Source":"Solar","Value":transportation[5][i]},
                                            {"Year":transportation[0][i],"Source":"Nuke","Value":transportation[4][i]},
                                            {"Year":transportation[0][i],"Source":"Other","Value":transportation[7][i]}]);
    };    


    let resGoal = new Array(0);
    for (let i= 0; i<33; i++){
        resGoal = resGoal.concat([{"Year":2018+i,"Name":"Goal","Value":2262+1800}]);
    }
    resGoal[32].Text = "Goal Line";

    const margin = {top: 10, right: 30, bottom: 30, left: 50},
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;                   

    let ressvg = d3.select("#resArea") 
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    let resx = d3.scaleLinear()
    .domain(d3.extent(resContent, (data) => data.Year))
    .range([ 0, width ]);

    ressvg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(resx));

    let resy = d3.scaleLinear()
    .domain([0, 10000])
    .range([ height, 0 ]);

    ressvg.append("g")
        .call(d3.axisLeft(resy));           

    const ressumstat = d3.nest()                             
    .key(function(d) { return d.Year;})
    .entries(resContent);

    const resmygroups = ["Electricty", "Natural Gas", "Solar", "Wind", "Petroleum", "Biomass","Geothermal", "Coal", "Nuclear", "Other"] // list of group names
    const resmygroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const resstackedData = d3.stack()
    .keys(resmygroup)
    .value(function(d, key){
        return d.values[key - 1].Value
    })
    (ressumstat)

    const rescolor = d3.scaleOrdinal()
    .domain(resmygroups)
    .range(['#D4EA61','#FF8B00','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#2A2A2A','#AF00FF','#AFACAC'])

    ressvg
        .selectAll("layers")
        .data(resstackedData)
        .enter()
        .append("path")
        .style("fill", function(d) { name = resmygroups[d.key-1];  return rescolor(name); })
        .attr("d", d3.area()
              .x(function(d, i) { return resx(d.data.key); })  
              .y0(function(d) { return resy(d[0]); })
              .y1(function(d) { return resy(d[1]); })
             )

    ressvg.append("g").selectAll("text")
        .data(resGoal)
        .enter()
        .append("text")
        .attr("x", function(d) {
        return resx(d.Year) - 25
    })
        .attr("y", function(d) {
        return resy(d.Value) - 5
    })
        .attr("fill", "black")
        .text(function(d) {
        return d.Text
    });

    const size = 10
    ressvg.selectAll("labelcolors")
        .data(resmygroups)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return rescolor(d)})

    ressvg.selectAll("labels")
        .data(resmygroups)
        .enter()
        .append("text")
        .attr("x", 10 + size*1.2)
        .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return rescolor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle") 

    ressvg.append("path")
        .datum(resGoal)
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
              .x(function(d) { return resx(d.Year) })
              .y(function(d) { return resy(d.Value) })
             )


    //end rescomm

    let indGoal = new Array(0);
    indGoal = indGoal.concat([{"Year":2018,"Name":"Goal","Value":3800}]);
    for (let i= 1; i<33; i++){
        indGoal = indGoal.concat([{"Year":2018+i,"Name":"Goal","Value":((3800-4996)/(2050-2018)**2)*((2018+i - 2050)**2)+4996}]);
    }
    indGoal[32].Text = "Goal Line";

    let indsvg = d3.select("#indArea") 
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    let indx = d3.scaleLinear()
    .domain(d3.extent(indContent, (data) => data.Year))
    .range([ 0, width ]);

    indsvg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(indx));

    let indy = d3.scaleLinear()
    .domain([0, 10000])
    .range([ height, 0 ]);

    indsvg.append("g")
        .call(d3.axisLeft(indy));           

    const indsumstat = d3.nest()                             
    .key(function(d) { return d.Year;})
    .entries(indContent);

    const indmygroups = ["Electricity", "Natural Gas", "Petroleum", "Solar", "Wind", "Biomass", "Geothermal", "Coal", "Nuclear", "Hydropower","Other"] // list of group names
    const indmygroup = [1,2,3,4,5,6,7,8,9,10,11] // list of group named
    const indstackedData = d3.stack()
    .keys(indmygroup)
    .value(function(d, key){
        return d.values[key - 1].Value
    })
    (indsumstat)

    const indcolor = d3.scaleOrdinal()
    .domain(indmygroups)
    .range(['#D4EA61','#FF8B00','#DD0000','#FFF300','#49EDFF','#207900','#6B5A00','#2A2A2A','#AF00FF','#007EFF','#AFACAC'])

    indsvg
        .selectAll("layers")
        .data(indstackedData)
        .enter()
        .append("path")
        .style("fill", function(d) { name = indmygroups[d.key-1];  return indcolor(name); })
        .attr("d", d3.area()
              .x(function(d, i) { return indx(d.data.key); })  
              .y0(function(d) { return indy(d[0]); })
              .y1(function(d) { return indy(d[1]); })
             )

    indsvg.selectAll("labelcolors")
        .data(indmygroups)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return indcolor(d)})

    indsvg.selectAll("labels")
        .data(indmygroups)
        .enter()
        .append("text")
        .attr("x", 10 + size*1.2)
        .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return indcolor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle") 

    indsvg.append("path")
        .datum(indGoal)
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
              .x(function(d) { return indx(d.Year) })
              .y(function(d) { return indy(d.Value) })
             )

    indsvg.append("g").selectAll("text")
        .data(indGoal)
        .enter()
        .append("text")
        .attr("x", function(d) {
        return indx(d.Year) - 25
    })
        .attr("y", function(d) {
        return indy(d.Value) - 5
    })
        .attr("fill", "black")
        .text(function(d) {
        return d.Text
    });

    //end industry

    let transGoal = new Array(0);
    for (let i= 0; i<33; i++){
        transGoal = transGoal.concat([{"Year":2018+i,"Name":"Goal","Value":(0.01016*(2018+i-2018)**2 - 0.4031*(2018+i-2018)+28)*293*0.21}]);
    }   
        transGoal[32].Text = "Goal Line";

    let transsvg = d3.select("#transArea") 
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    let transx = d3.scaleLinear()
    .domain(d3.extent(transContent, (data) => data.Year))
    .range([ 0, width ]);

    transsvg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(transx));

    let transy = d3.scaleLinear()
    .domain([0, 4000])
    .range([ height, 0 ]);

    transsvg.append("g")
        .call(d3.axisLeft(transy));           

    const transsumstat = d3.nest()                             
    .key(function(d) { return d.Year;})
    .entries(transContent);

    const transmygroups = ["Petroleum", "Natural Gas or Hydrogen",  "Electricity", "Biomass", "Solar", "Nuclear", "Other"] // list of group names
    const transmygroup = [1,2,3,4,5,6,7] // list of group names
    const transstackedData = d3.stack()
    .keys(transmygroup)
    .value(function(d, key){
        return d.values[key - 1].Value
    })
    (transsumstat)

    const transcolor = d3.scaleOrdinal()
    .domain(transmygroups)
    .range(['#DD0000','#FF8B00','#D4EA61','#207900','#FFF300','#AF00FF','#AFACAC'])

    transsvg
        .selectAll("layers")
        .data(transstackedData)
        .enter()
        .append("path")
        .style("fill", function(d) { name = transmygroups[d.key-1];  return transcolor(name); })
        .attr("d", d3.area()
              .x(function(d, i) { return transx(d.data.key); })  
              .y0(function(d) { return transy(d[0]); })
              .y1(function(d) { return transy(d[1]); })
             )

    transsvg.selectAll("labelcolors")
        .data(transmygroups)
        .enter()
        .append("rect")
        .attr("x", 10)
        .attr("y", function(d,i){ return 10 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
        .attr("width", size)
        .attr("height", size)
        .style("fill", function(d){ return transcolor(d)})

    transsvg.selectAll("labels")
        .data(transmygroups)
        .enter()
        .append("text")
        .attr("x", 10 + size*1.2)
        .attr("y", function(d,i){ return 10 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return transcolor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle") 

    transsvg.append("path")
        .datum(transGoal)
        .attr("fill", "none")
        .attr("stroke", "#000000")
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
              .x(function(d) { return transx(d.Year) })
              .y(function(d) { return transy(d.Value) })
             )
    
        transsvg.append("g").selectAll("text")
        .data(transGoal)
        .enter()
        .append("text")
        .attr("x", function(d) {
        return transx(d.Year) - 25
    })
        .attr("y", function(d) {
        return transy(d.Value) - 5
    })
        .attr("fill", "black")
        .text(function(d) {
        return d.Text
    });

    // end transportation
    {
        let genGoal = new Array(0);
        for (let i= 0; i<33; i++){
            genGoal = genGoal.concat([{"Year":2018+i,"Name":"Goal","Value":( (4178 + ((5400-4178)/32 * (2018+i-2018)) - 404) 
                                                                            +(rescomm[9][i] - rescomm[9][0]/4047 * resGoal[i].Value)/0.65
                                                                            +(industry[10][i] - industry[10][0]/3789 * indGoal[i].Value)/0.5
                                                                            +(transportation[6][i] - transportation[6][0]/1744 * transGoal[i].Value)/0.7
                                                                           )}]); //EIA line, plus ratio'd difference
        }
        genGoal[32].Text = "Goal Line";

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
        svg.append("g").selectAll("text")
        .data(genGoal)
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

    } //generation
}
