import makeCharts from './makeCharts.js';

export default function createCharts(generation, rescomm, industry, transportation,genCO2, resCO2, indCO2, transCO2, allCO2, cumuCO2, co2target) {   

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



    const yheight = 10000;
    const transyheight = 5000;
    const co2height = 5000;


    makeCharts(resGoal,"#resArea",resContent,resgroups,resgroup,rescolor,yheight );
    makeCharts(indGoal,"#indArea",indContent,indgroups,indgroup,indcolor,yheight );
    makeCharts(transGoal,"#transArea",transContent,transgroups,transgroup,transcolor,transyheight );
    makeCharts(genGoal,"#genArea",genContent,gengroups,gengroup,gencolor,yheight );
    makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allArea",allContent,allgroups,allgroup,allcolor,20000);

    makePieChart();

    switch(co2target){
        case "gen":
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",genCO2,gengroups,gengroup,gencolor,co2height);
            break;
        case "res":
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",resCO2,resgroups,resgroup,rescolor,co2height );
            break;
        case "ind":
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",indCO2,indgroups,indgroup,indcolor,co2height );
            break;
        case "trans":
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",transCO2,transgroups,transgroup,transcolor,co2height);
            break;
        case "all":   
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",allCO2,allgroups,allgroup,allcolor,10000);
            break;
        default:
            makeCharts({"Year":2018,"Name":"Goal","Value":0},"#allCO2Area",allCO2,allgroups,allgroup,allcolor,10000);
            break;
            
    }

    //makePieChart();
    function makePieChart(){

        document.getElementById("pieCO2").innerHTML = ""; 
        
        const margin = {top: 10, right: 50, bottom: 30, left: 50},
              width = 460 - margin.left - margin.right,
              height = 400 - margin.top - margin.bottom;  
        const radius = 175; 

        let arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

        let svg = d3.select("#pieCO2")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        let pie = d3.pie()  
        .value(function(d) {return d.value; })

        let data_ready = pie(d3.entries(cumuCO2))

        svg
            .selectAll('slices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                  .innerRadius(0)
                  .outerRadius(radius)
                 )
            .attr('fill', function(d){ return(allcolor(d.data.key+1)) })
            .attr("stroke", "black")
            .style("stroke-width", "1px")
            .style("opacity", 1.0)

        /*svg
            .selectAll('slices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d){ return d.data.key})
            .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
            .style("text-anchor", "middle")
            .style("font-size", 17)*/ //Pie Chart Labels, but they get messy

    }



}
