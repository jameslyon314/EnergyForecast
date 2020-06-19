export default function genCO2(generation, rescomm, industry, transportation){

    let CCS = document.getElementById("CCS_var").checked;
    let CCSYear = document.getElementById("CCSYear_var").value;
    let CCSFactor=1;
    let CCSIndFactor = 1;
    if (!CCS){
        CCSFactor=1;
    }
    else{
        CCSFactor=0.2;
        CCSIndFactor=0.6;
    }

    let genCoalCO2 = 1150/1146;
    let genGasCO2 = 581/1063.6;
    let genPetCO2 = 0.95;
    let genBioCO2 = 0.25;
    let genGeoCO2 = 0.038;
    let genHydroCO2 = 0.024;
    let genNukeCO2 = 0.012;
    let genSolarCO2 = 0.045;
    let genWindCO2 = 0.011;
    let genOtherCO2 = 0;

    let indCoalCO2 = 0.61;
    let indGasCO2 = .36;
    let indPetCO2 = .28;
    let indBioCO2 = .28*.56;
    let indGeoCO2 = .038;
    let indHydroCO2 = .024;
    let indNukeCO2 = 0.012;
    let indSolarCO2 = .045;
    let indWindCO2 = 0.011;
    let indOtherCO2 = 0;

    let resCoalCO2 = 0.53;
    let resGasCO2 = 0.28;
    let resPetCO2 = 0.36;
    let resBioCO2 = 0.36*.56;
    let resGeoCO2 = 0.038;
    let resNukeCO2 = 0.012;
    let resSolarCO2 = 0.045;
    let resWindCO2 = 0.011;
    let resOtherCO2 = 0;


    let transGasCO2 = .86;
    let transPetCO2 = 1.17;
    let transBioCO2 = 1.17*0.82;
    let transNukeCO2 = 0.012;
    let transSolarCO2 = 0.045;
    let transOtherCO2 = 0;


    let genCO2 = new Array(0);
    for (let i= 0; i<33; i++){
        if(generation[0][i] >= CCSYear && CCS){
            genCO2 = genCO2.concat([{"Year":generation[0][i],"Source":"Coal","Value":generation[1][i]*genCoalCO2*CCSFactor},
                                    {"Year":generation[0][i],"Source":"Gas","Value":generation[2][i]*genGasCO2*CCSFactor},
                                    {"Year":generation[0][i],"Source":"Nuke","Value":generation[7][i]*genNukeCO2},
                                    {"Year":generation[0][i],"Source":"Hydro","Value":generation[6][i]*genHydroCO2},
                                    {"Year":generation[0][i],"Source":"Solar","Value":generation[8][i]*genSolarCO2},
                                    {"Year":generation[0][i],"Source":"Wind","Value":generation[9][i]*genWindCO2},
                                    {"Year":generation[0][i],"Source":"Pet","Value":generation[3][i]*genPetCO2*CCSFactor},
                                    {"Year":generation[0][i],"Source":"Bio","Value":generation[4][i]*genBioCO2*CCSFactor},
                                    {"Year":generation[0][i],"Source":"Geo","Value":generation[5][i]*genGeoCO2*CCSFactor},
                                    {"Year":generation[0][i],"Source":"Other","Value":generation[10][i]*genOtherCO2}]);
        }
        else{
            genCO2 = genCO2.concat([{"Year":generation[0][i],"Source":"Coal","Value":generation[1][i]*genCoalCO2},
                                    {"Year":generation[0][i],"Source":"Gas","Value":generation[2][i]*genGasCO2},
                                    {"Year":generation[0][i],"Source":"Nuke","Value":generation[7][i]*genNukeCO2},
                                    {"Year":generation[0][i],"Source":"Hydro","Value":generation[6][i]*genHydroCO2},
                                    {"Year":generation[0][i],"Source":"Solar","Value":generation[8][i]*genSolarCO2},
                                    {"Year":generation[0][i],"Source":"Wind","Value":generation[9][i]*genWindCO2},
                                    {"Year":generation[0][i],"Source":"Pet","Value":generation[3][i]*genPetCO2},
                                    {"Year":generation[0][i],"Source":"Bio","Value":generation[4][i]*genBioCO2},
                                    {"Year":generation[0][i],"Source":"Geo","Value":generation[5][i]*genGeoCO2},
                                    {"Year":generation[0][i],"Source":"Other","Value":generation[10][i]*genOtherCO2}]);
        }
    };

    let resCO2 = new Array(0);
    for (let i= 0; i<33; i++){
        resCO2 = resCO2.concat([{"Year":rescomm[0][i],"Source":"Grid","Value":rescomm[9][i]*0},
                                {"Year":rescomm[0][i],"Source":"Gas","Value":rescomm[2][i]*resGasCO2},
                                {"Year":rescomm[0][i],"Source":"Solar","Value":rescomm[7][i]*resSolarCO2},
                                {"Year":rescomm[0][i],"Source":"Wind","Value":rescomm[8][i]*resWindCO2},
                                {"Year":rescomm[0][i],"Source":"Pet","Value":rescomm[3][i]*resPetCO2},
                                {"Year":rescomm[0][i],"Source":"Bio","Value":rescomm[4][i]*resBioCO2},
                                {"Year":rescomm[0][i],"Source":"Geo","Value":rescomm[5][i]*resGeoCO2},
                                {"Year":rescomm[0][i],"Source":"Coal","Value":rescomm[1][i]*resCoalCO2},
                                {"Year":rescomm[0][i],"Source":"Nuke","Value":rescomm[6][i]*resNukeCO2},
                                {"Year":rescomm[0][i],"Source":"Other","Value":rescomm[10][i]*resOtherCO2}]);
    }

    let indCO2 = new Array(0);
    for (let i= 0; i<33; i++){
        if(industry[0][i] >= CCSYear && CCS){
            indCO2 = indCO2.concat([{"Year":industry[0][i],"Source":"Grid","Value":industry[10][i]*0},
                                    {"Year":industry[0][i],"Source":"Gas","Value":industry[2][i]*indGasCO2*CCSIndFactor},
                                    {"Year":industry[0][i],"Source":"Pet","Value":industry[3][i]*indPetCO2*CCSIndFactor},
                                    {"Year":industry[0][i],"Source":"Solar","Value":industry[8][i]*indSolarCO2},
                                    {"Year":industry[0][i],"Source":"Wind","Value":industry[9][i]*indWindCO2},
                                    {"Year":industry[0][i],"Source":"Bio","Value":industry[4][i]*indBioCO2*CCSIndFactor},
                                    {"Year":industry[0][i],"Source":"Geo","Value":industry[5][i]*indGeoCO2*CCSIndFactor},
                                    {"Year":industry[0][i],"Source":"Coal","Value":industry[1][i]*indCoalCO2*CCSIndFactor},
                                    {"Year":industry[0][i],"Source":"Nuke","Value":industry[7][i]*indNukeCO2},
                                    {"Year":industry[0][i],"Source":"Hydro","Value":industry[6][i]*indHydroCO2},
                                    {"Year":industry[0][i],"Source":"Other","Value":industry[11][i]*indOtherCO2}]);
        }
        else{
                        indCO2 = indCO2.concat([{"Year":industry[0][i],"Source":"Grid","Value":industry[10][i]*0},
                                    {"Year":industry[0][i],"Source":"Gas","Value":industry[2][i]*indGasCO2},
                                    {"Year":industry[0][i],"Source":"Pet","Value":industry[3][i]*indPetCO2},
                                    {"Year":industry[0][i],"Source":"Solar","Value":industry[8][i]*indSolarCO2},
                                    {"Year":industry[0][i],"Source":"Wind","Value":industry[9][i]*indWindCO2},
                                    {"Year":industry[0][i],"Source":"Bio","Value":industry[4][i]*indBioCO2},
                                    {"Year":industry[0][i],"Source":"Geo","Value":industry[5][i]*indGeoCO2},
                                    {"Year":industry[0][i],"Source":"Coal","Value":industry[1][i]*indCoalCO2},
                                    {"Year":industry[0][i],"Source":"Nuke","Value":industry[7][i]*indNukeCO2},
                                    {"Year":industry[0][i],"Source":"Hydro","Value":industry[6][i]*indHydroCO2},
                                    {"Year":industry[0][i],"Source":"Other","Value":industry[11][i]*indOtherCO2}]);
        }
    }

    let transCO2 = new Array(0);
    for (let i= 0; i<33; i++){
        transCO2 = transCO2.concat([{"Year":transportation[0][i],"Source":"Pet","Value":transportation[2][i]*transPetCO2},
                                    {"Year":transportation[0][i],"Source":"Gas","Value":transportation[1][i]*transGasCO2},
                                    {"Year":transportation[0][i],"Source":"Grid","Value":transportation[6][i]*0},
                                    {"Year":transportation[0][i],"Source":"Bio","Value":transportation[3][i]*transBioCO2},
                                    {"Year":transportation[0][i],"Source":"Solar","Value":transportation[5][i]*transSolarCO2},
                                    {"Year":transportation[0][i],"Source":"Nuke","Value":transportation[4][i]*transNukeCO2},
                                    {"Year":transportation[0][i],"Source":"Other","Value":transportation[7][i]*transOtherCO2}]);
    }

    let allCO2 = new Array(0);
    for (let i= 0; i<33; i++){
        allCO2 = allCO2.concat([{"Year":generation[0][i],"Source":"Coal","Value":genCO2[10*i+0].Value + resCO2[10*i+7].Value + indCO2[11*i+7].Value},
                                {"Year":generation[0][i],"Source":"Gas","Value":genCO2[10*i+1].Value + resCO2[10*i+1].Value + indCO2[11*i+1].Value + transCO2[7*i+1].Value},
                                {"Year":generation[0][i],"Source":"Pet","Value":genCO2[10*i+6].Value + resCO2[10*i+4].Value + indCO2[11*i+2].Value + transCO2[7*i+0].Value},
                                {"Year":generation[0][i],"Source":"Nuke","Value":genCO2[10*i+2].Value + resCO2[10*i+8].Value + indCO2[11*i+8].Value + transCO2[7*i+5].Value},
                                {"Year":generation[0][i],"Source":"Solar","Value":genCO2[10*i+4].Value + resCO2[10*i+2].Value+indCO2[11*i+3].Value + transCO2[7*i+4].Value},
                                {"Year":generation[0][i],"Source":"Wind","Value":genCO2[10*i+5].Value + resCO2[10*i+3].Value + indCO2[11*i+4].Value},
                                {"Year":generation[0][i],"Source":"Hydro","Value":genCO2[10*i+3].Value + indCO2[11*i+9].Value},
                                {"Year":generation[0][i],"Source":"Bio","Value":genCO2[10*i+7].Value + resCO2[10*i+5].Value + indCO2[11*i+5].Value + transCO2[7*i+3].Value},
                                {"Year":generation[0][i],"Source":"Geo","Value":genCO2[10*i+8].Value + resCO2[10*i+6].Value + indCO2[11*i+6].Value},
                                {"Year":generation[0][i],"Source":"Other","Value":genCO2[10*i+9].Value + resCO2[10*i+9].Value + indCO2[11*i+10].Value + transCO2[7*i+6].Value}]);
    };

    let cumuCO2 = {"Coal":0,"NaturalGas":0,"Petroleum":0,"Nuclear":0,"Solar":0,"Wind":0,"Hydropower":0,"Biomass":0,"Geothermal":0,"Other":0}

    for(let j=0; j<33; j++){
        cumuCO2.Coal = cumuCO2.Coal + allCO2[10*j+0].Value;
        cumuCO2.NaturalGas = cumuCO2.NaturalGas + allCO2[10*j+1].Value;
        cumuCO2.Petroleum = cumuCO2.Petroleum + allCO2[10*j+2].Value;
        cumuCO2.Nuclear = cumuCO2.Nuclear + allCO2[10*j+3].Value;
        cumuCO2.Solar = cumuCO2.Solar + allCO2[10*j+4].Value;
        cumuCO2.Wind = cumuCO2.Wind + allCO2[10*j+5].Value;
        cumuCO2.Hydropower = cumuCO2.Hydropower + allCO2[10*j+6].Value;
        cumuCO2.Biomass = cumuCO2.Biomass + allCO2[10*j+7].Value;
        cumuCO2.Geothermal = cumuCO2.Geothermal + allCO2[10*j+8].Value;
        cumuCO2.Other = cumuCO2.Other + allCO2[10*j+9].Value;    
    }


    let genTotalCO2 =  {"Coal":0,"NaturalGas":0,"Nuclear":0,"Hydropower":0,"Solar":0,"Wind":0,"Petroleum":0,"Biomass":0,"Geothermal":0,"Other":0};
    let resTotalCO2 =  {"NaturalGas":0,"Solar":0,"Wind":0,"Petroleum":0,"Biomass":0,"Geothermal":0,"Coal":0,"Nuclear":0,"Other":0}
    let indTotalCO2 =  {"NaturalGas":0,"Petroleum":0,"Solar":0,"Wind":0,"Biomass":0,"Geothermal":0,"Coal":0,"Nuclear":0,"Hydropower":0,"Other":0}
    let transTotalCO2 =  {"Petroleum":0,"NaturalGas":0,"Biomass":0,"Nuclear":0,"Solar":0,"Other":0}

    for (let i=0; i<33;i++){
        genTotalCO2.Coal = genTotalCO2.Coal + genCO2[i*10+0];
        genTotalCO2.NaturalGas = genTotalCO2.NaturalGas + genCO2[i*10+1];
        genTotalCO2.Nuclear = genTotalCO2.Nuclear + genCO2[i*10+2];
        genTotalCO2.Hydropower = genTotalCO2.Hydropower + genCO2[i*10+3];
        genTotalCO2.Solar = genTotalCO2.Solar + genCO2[i*10+4];
        genTotalCO2.Wind = genTotalCO2.Wind + genCO2[i*10+5];
        genTotalCO2.Petroleum = genTotalCO2.Petroleum + genCO2[i*10+6];
        genTotalCO2.Biomass = genTotalCO2.Biomass + genCO2[i*10+7];
        genTotalCO2.Geothermal = genTotalCO2.Geothermal + genCO2[i*10+8];
        genTotalCO2.Other = genTotalCO2.Other + genCO2[i*10+9];

        resTotalCO2.NaturalGas = resTotalCO2.NaturalGas + resCO2[i*10+1];
        resTotalCO2.Solar = resTotalCO2.Solar + resCO2[i*10+2];
        resTotalCO2.Wind = resTotalCO2.Wind + resCO2[i*10+3];
        resTotalCO2.Petroleum = resTotalCO2.Petroleum + resCO2[i*10+4];
        resTotalCO2.Biomass = resTotalCO2.Biomass + resCO2[i*10+5];
        resTotalCO2.Geothermal = resTotalCO2.Geothermal + resCO2[i*10+6];
        resTotalCO2.Coal = resTotalCO2.Coal + resCO2[i*10+7];
        resTotalCO2.Nuclear = resTotalCO2.Nuclear + resCO2[i*10+8];
        resTotalCO2.Other = resTotalCO2.Other + resCO2[i*10+9];

        indTotalCO2.NaturalGas = indTotalCO2.NaturalGas + indCO2[10*i+1];
        indTotalCO2.Petroleum = indTotalCO2.Petroleum + indCO2[10*i+2];
        indTotalCO2.Solar = indTotalCO2.Solar + indCO2[10*i+3];
        indTotalCO2.Wind = indTotalCO2.Wind + indCO2[10*i+4];
        indTotalCO2.Biomass = indTotalCO2.Biomass + indCO2[10*i+5];
        indTotalCO2.Geothermal = indTotalCO2.Geothermal + indCO2[10*i+6];
        indTotalCO2.Coal = indTotalCO2.Coal + indCO2[10*i+7];
        indTotalCO2.Nuclear = indTotalCO2.Nuclear + indCO2[10*i+8];
        indTotalCO2.Hydropower = indTotalCO2.Hydropower + indCO2[10*i+9];
        indTotalCO2.Other = indTotalCO2.Other + indCO2[10*i+10];

        transTotalCO2.Petroleum = transTotalCO2.Petroleum + transCO2[10*i+0];
        transTotalCO2.NaturalGas = transTotalCO2.NaturalGas + transCO2[10*i+1];
        transTotalCO2.Biomass = transTotalCO2.Biomass + transCO2[10*i+3];
        transTotalCO2.Nuclear = transTotalCO2.Nuclear + transCO2[10*i+4];
        transTotalCO2.Solar = transTotalCO2.Solar + transCO2[10*i+5];
        transTotalCO2.Other = transTotalCO2.Other + transCO2[10*i+6];

    }//theres always a better way, but I'm not smart

    let CO2Icicle = {
        "name": "All Emissions",
        "children": [
            {
                "name": "Electricity Generation",
                "children": [{"name": "Coal", "value": genTotalCO2.Coal},
                             {"name": "Natural Gas", "value": genTotalCO2.NaturalGas},
                             {"name": "Nuclear", "value": genTotalCO2.Nuclear},
                             {"name": "Hydropower", "value": genTotalCO2.Hydropower},
                             {"name": "Solar", "value": genTotalCO2.Solar},
                             {"name": "Wind", "value": genTotalCO2.Wind},
                             {"name": "Petroleum", "value": genTotalCO2.Petroleum},
                             {"name": "Biomass", "value": genTotalCO2.Biomass},
                             {"name": "Geothermal", "value": genTotalCO2.Geothermal},
                             {"name": "Other", "value": genTotalCO2.Other}
                            ]
            },
            {
                "name": "Residential and Commercial",
                "children": [{"name": "Coal", "value": resTotalCO2.Coal},
                             {"name": "Natural Gas", "value": resTotalCO2.NaturalGas},
                             {"name": "Nuclear", "value": resTotalCO2.Nuclear},
                             {"name": "Solar", "value": resTotalCO2.Solar},
                             {"name": "Wind", "value": resTotalCO2.Wind},
                             {"name": "Petroleum", "value": resTotalCO2.Petroleum},
                             {"name": "Biomass", "value": resTotalCO2.Biomass},
                             {"name": "Geothermal", "value": resTotalCO2.Geothermal},
                             {"name": "Other", "value": resTotalCO2.Other}
                            ]
            },
            {
                "name": "Industrial",
                "children": [{"name": "Coal", "value": indTotalCO2.Coal},
                             {"name": "Natural Gas", "value": indTotalCO2.NaturalGas},
                             {"name": "Nuclear", "value": indTotalCO2.Nuclear},
                             {"name": "Hydropower", "value": indTotalCO2.Hydropower},
                             {"name": "Solar", "value": indTotalCO2.Solar},
                             {"name": "Wind", "value": indTotalCO2.Wind},
                             {"name": "Petroleum", "value": indTotalCO2.Petroleum},
                             {"name": "Biomass", "value": indTotalCO2.Biomass},
                             {"name": "Geothermal", "value": indTotalCO2.Geothermal},
                             {"name": "Other", "value": indTotalCO2.Other},

                            ]
            },
            {
                "name": "Transportation",
                "children": [{"name": "Natural Gas", "value": genTotalCO2.NaturalGas},
                             {"name": "Nuclear", "value": genTotalCO2.Nuclear},
                             {"name": "Solar", "value": genTotalCO2.Solar},
                             {"name": "Petroleum", "value": genTotalCO2.Petroleum},
                             {"name": "Biomass", "value": genTotalCO2.Biomass},
                             {"name": "Other", "value": genTotalCO2.Other},
                            ]
            }
        ]
    }

    let CO2 = new Array(5);
    CO2[0]=genCO2;
    CO2[1]=resCO2;
    CO2[2]=indCO2;
    CO2[3]=transCO2;
    CO2[4] = allCO2;
    CO2[5] = cumuCO2;

    let totalMass = (cumuCO2.Coal + cumuCO2.NaturalGas + cumuCO2.Petroleum + cumuCO2.Nuclear + cumuCO2.Solar + cumuCO2.Biomass + cumuCO2.Wind + cumuCO2.Hydropower + cumuCO2.Geothermal + cumuCO2.Other).toFixed(0);
    let initialMass = 0;
    let finalMass = 0;
    for (let i=0; i<10; i++){
        initialMass = initialMass + allCO2[i].Value;
        finalMass = finalMass + allCO2[320+i].Value;
    }

    document.getElementById("TotalCO2").innerHTML = "Cumulative CO2 emissions: " + totalMass + " MMmT"; 
    document.getElementById("Reduction").innerHTML = "2050 CO2 Emissions are " + (100-finalMass/initialMass*100).toFixed(1) + " percent lower than 2018"; 
    document.getElementById("Petrol").innerHTML = "Petroleum: " + (cumuCO2.Petroleum).toFixed(0) + "("+ (100*cumuCO2.Petroleum / totalMass).toFixed(1) +" % of total)";
    document.getElementById("Coal").innerHTML = "Coal: " + (cumuCO2.Coal).toFixed(0) + "("+ (100*cumuCO2.Coal / totalMass).toFixed(1) +" % of total)";
    document.getElementById("NaturalGas").innerHTML = "Natural Gas: " + (cumuCO2.NaturalGas).toFixed(0) + "("+ (100*cumuCO2.NaturalGas / totalMass).toFixed(1) +" % of total)";
    document.getElementById("Biomass").innerHTML = "Biomass: " + (cumuCO2.Biomass).toFixed(0) + "("+ (100*cumuCO2.Biomass / totalMass).toFixed(1) +" % of total)";


    return CO2;

}
