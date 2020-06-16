export default function createCharts(generation, rescomm, industry, transportation,genCO2, resCO2, indCO2, transCO2, allCO2) {   
    document.getElementById("genArea").innerHTML = ""; 
    document.getElementById("resArea").innerHTML = "";
    document.getElementById("indArea").innerHTML = "";
    document.getElementById("transArea").innerHTML = "";
    document.getElementById("genCO2Area").innerHTML = "";
    document.getElementById("resCO2Area").innerHTML = "";
    document.getElementById("indCO2Area").innerHTML = "";
    document.getElementById("transCO2Area").innerHTML = "";
    document.getElementById("allCO2Area").innerHTML = "";
    document.getElementById("allArea").innerHTML = "";

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
    let resGoal = new Array(0);
    for (let i= 0; i<33; i++){
        resGoal = resGoal.concat([{"Year":2018+i,"Name":"Goal","Value":2262+1800}]);
    }
    resGoal[32].Text = "Goal Line";
    const resgroups = ["Electricty", "Natural Gas", "Solar", "Wind", "Petroleum", "Biomass","Geothermal", "Coal", "Nuclear", "Other"] // list of group names
    const resgroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const rescolor = d3.scaleOrdinal()
    .domain(resgroups)
    .range(['#D4EA61','#FF8B00','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#2A2A2A','#AF00FF','#AFACAC']);




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
    let indGoal = new Array(0);
    indGoal = indGoal.concat([{"Year":2018,"Name":"Goal","Value":3800}]);
    for (let i= 1; i<33; i++){
        indGoal = indGoal.concat([{"Year":2018+i,"Name":"Goal","Value":((3800-4996)/(2050-2018)**2)*((2018+i - 2050)**2)+4996}]);
    }
    indGoal[32].Text = "Goal Line";
    const indgroups = ["Electricity", "Natural Gas", "Petroleum", "Solar", "Wind", "Biomass", "Geothermal", "Coal", "Nuclear", "Hydropower","Other"] // list of group names
    const indgroup = [1,2,3,4,5,6,7,8,9,10,11] // list of group named
    const indcolor = d3.scaleOrdinal()
    .domain(indgroups)
    .range(['#D4EA61','#FF8B00','#DD0000','#FFF300','#49EDFF','#207900','#6B5A00','#2A2A2A','#AF00FF','#007EFF','#AFACAC']);




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
    let transGoal = new Array(0);
    for (let i= 0; i<33; i++){
        transGoal = transGoal.concat([{"Year":2018+i,"Name":"Goal","Value":(0.01016*(2018+i-2018)**2 - 0.4031*(2018+i-2018)+28)*293*0.21}]);
    }   
    transGoal[32].Text = "Goal Line";
    const transgroups = ["Petroleum", "Natural Gas or Hydrogen",  "Electricity", "Biomass", "Solar", "Nuclear", "Other"] // list of group names
    const transgroup = [1,2,3,4,5,6,7] // list of group names
    const transcolor = d3.scaleOrdinal()
    .domain(transgroups)
    .range(['#DD0000','#FF8B00','#D4EA61','#207900','#FFF300','#AF00FF','#AFACAC']);

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
    let genGoal = new Array(0);
    for (let i= 0; i<33; i++){
        genGoal = genGoal.concat([{"Year":2018+i,"Name":"Goal","Value":( (4178 + ((5400-4178)/32 * (2018+i-2018)) - 404) 
                                                                        +(rescomm[9][i] - rescomm[9][0]/4047 * resGoal[i].Value)/0.65
                                                                        +(industry[10][i] - industry[10][0]/3789 * indGoal[i].Value)/0.5
                                                                        +(transportation[6][i] - transportation[6][0]/1744 * transGoal[i].Value)/0.7
                                                                       )}]); //EIA line, plus ratio'd difference
    }
    genGoal[32].Text = "Goal Line";
    const gengroups = ["Coal", "Natural Gas", "Nuclear", "Hydropower", "Solar", "Wind","Petroleum", "Biomass", "Geothermal", "Other"] // list of group names
    const gengroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const gencolor = d3.scaleOrdinal()
    .domain(gengroups)
    .range(['#2A2A2A','#FF8B00','#AF00FF','#007EFF','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#AFACAC']);


    let allContent = new Array(0);
    for (let i= 0; i<33; i++){
        allContent = allContent.concat([{"Year":generation[0][i],"Source":"Coal","Value":generation[1][i]+rescomm[1][i]+industry[1][i]}],
                                       {"Year":generation[0][i],"Source":"Gas","Value":generation[2][i]+rescomm[2][i]+industry[2][i]+transportation[1][i]},
                                       {"Year":generation[0][i],"Source":"Pet","Value":generation[3][i]+rescomm[3][i]+industry[3][i]+transportation[2][i]},
                                       {"Year":generation[0][i],"Source":"Nuke","Value":generation[7][i]+rescomm[6][i]+industry[7][i]+transportation[7][i]},
                                       {"Year":generation[0][i],"Source":"Solar","Value":generation[8][i]+transportation[5][i]+rescomm[7][i]+industry[8][i]},
                                       {"Year":generation[0][i],"Source":"Wind","Value":generation[9][i]+rescomm[8][i]+industry[9][i]},
                                       {"Year":generation[0][i],"Source":"Hydro","Value":generation[6][i]+industry[6][i]},
                                       {"Year":generation[0][i],"Source":"Bio","Value":generation[4][i]+rescomm[4][i]+industry[4][i]+transportation[3][i]},
                                       {"Year":generation[0][i],"Source":"Geo","Value":generation[5][i]+rescomm[5][i]+industry[5][i]},
                                       {"Year":generation[0][i],"Source":"Other","Value":generation[10][i]+rescomm[10][i]+industry[11][i]+transportation[7][i]});
    };
    const allgroups = ["Coal", "Natural Gas","Petroleum", "Nuclear","Solar","Wind", "Hydropower","Biomass", "Geothermal", "Other"] // list of group names
    const allgroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
    const allcolor = d3.scaleOrdinal()
    .domain(allgroups)
    .range(['#2A2A2A','#FF8B00','#DD0000','#AF00FF','#FFF300','#49EDFF','#007EFF','#207900','#6B5A00','#AFACAC']);

    const size=10;
    const yheight = 10000;
    const transyheight = 5000;
    const co2height = 5000;
    const margin = {top: 10, right: 30, bottom: 30, left: 50},
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;   

    makeChart(resGoal,"#resArea",resContent,resgroups,resgroup,rescolor,yheight );
    makeChart(indGoal,"#indArea",indContent,indgroups,indgroup,indcolor,yheight );
    makeChart(transGoal,"#transArea",transContent,transgroups,transgroup,transcolor,transyheight );
    makeChart(genGoal,"#genArea",genContent,gengroups,gengroup,gencolor,yheight );
    makeChart({"Year":2018,"Name":"Goal","Value":0},"#allArea",allContent,allgroups,allgroup,allcolor,20000)

    makeChart({"Year":2018,"Name":"Goal","Value":0},"#genCO2Area",genCO2,gengroups,gengroup,gencolor,co2height );
    makeChart({"Year":2018,"Name":"Goal","Value":0},"#resCO2Area",resCO2,resgroups,resgroup,rescolor,co2height );
    makeChart({"Year":2018,"Name":"Goal","Value":0},"#indCO2Area",indCO2,indgroups,indgroup,indcolor,co2height );
    makeChart({"Year":2018,"Name":"Goal","Value":0},"#transCO2Area",transCO2,transgroups,transgroup,transcolor,co2height);
    makeChart({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",allCO2,allgroups,allgroup,allcolor,10000);


    function makeChart(Goal,svgtarget,content,mygroups,mygroup,color,yheight,title,units){

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
}

