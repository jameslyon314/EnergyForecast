export default function genCO2(generation, rescomm, industry, transportation){


    let genCoalCO2 = 1150/1146;
    let genGasCO2 = 581/1063.6;
    let genPetCO2 = 0.95;
    let genBioCO2 = 0.84;
    let genGeoCO2 = 0.038;
    let genHydroCO2 = 0.024;
    let genNukeCO2 = 0.012;
    let genSolarCO2 = 0.045;
    let genWindCO2 = 0.011;
    let genOtherCO2 = 0;

    let indCoalCO2 = 0.61;
    let indGasCO2 = .36;
    let indPetCO2 = .28;
    let indBioCO2 = .28;
    let indGeoCO2 = .038;
    let indHydroCO2 = .024;
    let indNukeCO2 = 0.012;
    let indSolarCO2 = .045;
    let indWindCO2 = 0.011;
    let indOtherCO2 = 0;

    let resCoalCO2 = 0.53;
    let resGasCO2 = 0.28;
    let resPetCO2 = 0.36;
    let resBioCO2 = .36;
    let resGeoCO2 = 0.038;
    let resNukeCO2 = 0.012;
    let resSolarCO2 = 0.045;
    let resWindCO2 = 0.011;
    let resOtherCO2 = 0;


    let transGasCO2 = .86;
    let transPetCO2 = 1.17;
    let transBioCO2 = 1.17;
    let transNukeCO2 = 0.012;
    let transSolarCO2 = 0.045;
    let transOtherCO2 = 0;


    let genCO2 = new Array(0);
    for (let i= 0; i<33; i++){
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
        allCO2 = allCO2.concat([{"Year":generation[0][i],"Source":"Coal","Value":genCO2[0] .Value+resCO2[7] .Value+indCO2[7] .Value}],
                                       {"Year":generation[0][i],"Source":"Gas","Value":genCO2[1] .Value+resCO2[1] .Value+indCO2[1] .Value+transCO2[1] .Value},
                                       {"Year":generation[0][i],"Source":"Pet","Value":genCO2[6] .Value+resCO2[4] .Value+indCO2[2] .Value+transCO2[0] .Value},
                                       {"Year":generation[0][i],"Source":"Nuke","Value":genCO2[2] .Value+resCO2[8] .Value+indCO2[8] .Value+transCO2[5] .Value},
                                       {"Year":generation[0][i],"Source":"Solar","Value":genCO2[4] .Value+resCO2[2].Value+indCO2[3] .Value+transCO2[4] .Value },
                                       {"Year":generation[0][i],"Source":"Wind","Value":genCO2[5] .Value+resCO2[3] .Value+indCO2[4] .Value},
                                       {"Year":generation[0][i],"Source":"Hydro","Value":genCO2[3] .Value+indCO2[9] .Value},
                                       {"Year":generation[0][i],"Source":"Bio","Value":genCO2[7] .Value+resCO2[5] .Value+indCO2[5] .Value+transCO2[3] .Value},
                                       {"Year":generation[0][i],"Source":"Geo","Value":genCO2[8] .Value+resCO2[6] .Value+indCO2[6] .Value},
                                       {"Year":generation[0][i],"Source":"Other","Value":genCO2[9] .Value+resCO2[9] .Value+indCO2[10] .Value+transCO2[6] .Value});
    };
    

    let CO2 = new Array(5);
    CO2[0]=genCO2;
    CO2[1]=resCO2;
    CO2[2]=indCO2;
    CO2[3]=transCO2;
    CO2[4] = allCO2;
    return CO2;

}
