export default function co2graphs(generation){
    document.getElementById("genCO2Area").innerHTML = "";
    const margin = {top: 10, right: 30, bottom: 30, left: 50},
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;    
    const radius = Math.min(width, height) / 2 - margin;

    makeChart();

    function makeChart(){

        const gengroups = ["Coal", "Natural Gas", "Nuclear", "Hydropower", "Solar", "Wind","Petroleum", "Biomass", "Geothermal", "Other"] // list of group names
        const gengroup = [1,2,3,4,5,6,7,8,9,10] // list of group names
        const color = d3.scaleOrdinal()
        .domain(gengroups)
        .range(['#2A2A2A','#FF8B00','#AF00FF','#007EFF','#FFF300','#49EDFF','#DD0000','#207900','#6B5A00','#AFACAC']);

        let svg = d3.select("#genCO2Area")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

        let pie = d3.pie()
        .value(function(d) {return d.Value; })
        let data_ready = pie(d3.entries(generation))

        svg
            .selectAll('slices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                  .innerRadius(0)
                  .outerRadius(radius)
                 )
            .attr('fill', function(d){ return(color(d.data.key)) })
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)

    }





}   