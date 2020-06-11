export function genCO2(){
    let genCO2 = new Array(11)
    for (let i = 0; i < 11; i++){
 	genCO2[i] = new Array(33); 
    }
    for (let i = 0; i < 33; i++){
 	generation[0][i] = 2018+i;
    }
    
    let genCoalCO2 = 0;
    let genGasCO2 = 0;
    let genPetCO2 = 0;
    let genBioCO2 = 0;
    let genGeoCO2 = 0;
    let genHydroCO2 = 0;
    let genNukeCO2 = 0;
    let genSolarCO2 = 0;
    let genWindCO2 = 0;
    let genOtherCO2 = 0;
    
    for (let i = 0; i < 33; i++){
 	genCO2[1][i] = generation[1][i]*genCoalCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[2][i] = generation[2][i]*genGasCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[3][i] = generation[3][i]*genPetCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[4][i] = generation[4][i]*genBioCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[5][i] = generation[5][i]*genGeoCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[6][i] = generation[6][i]*genHydroCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[7][i] = generation[7][i]*genNukeCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[8][i] = generation[8][i]*genSolarCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[9][i] = generation[9][i]*genWindCO2;
    }
    for (let i = 0; i < 33; i++){
 	genCO2[10][i] = generation[10][i]*genOtherCO2;
    }
}

function indCO2(){
    let indCO2 = new Array(11)
    for (let i = 0; i < 11; i++){
 	indCO2[i] = new Array(33); 
    }
    for (let i = 0; i < 33; i++){
 	inderation[0][i] = 2018+i;
    }
    
    let indCoalCO2 = 0;
    let indGasCO2 = 0;
    let indPetCO2 = 0;
    let indBioCO2 = 0;
    let indGeoCO2 = 0;
    let indHydroCO2 = 0;
    let indNukeCO2 = 0;
    let indSolarCO2 = 0;
    let indWindCO2 = 0;
    let indOtherCO2 = 0;
    
    for (let i = 0; i < 33; i++){
 	indCO2[1][i] = industry[1][i]*indCoalCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[2][i] = industry[2][i]*indGasCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[3][i] = industry[3][i]*indPetCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[4][i] = industry[4][i]*indBioCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[5][i] = industry[5][i]*indGeoCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[6][i] = industry[6][i]*indHydroCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[7][i] = industry[7][i]*indNukeCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[8][i] = industry[8][i]*indSolarCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[9][i] = industry[9][i]*indWindCO2;
    }
    for (let i = 0; i < 33; i++){
 	indCO2[10][i] = industry[10][i]*indOtherCO2;
    }
}

export function resCO2(){
    let resCO2 = new Array(11)
    for (let i = 0; i < 11; i++){
 	resCO2[i] = new Array(33); 
    }
    for (let i = 0; i < 33; i++){
 	reseration[0][i] = 2018+i;
    }
    
    let resCoalCO2 = 0;
    let resGasCO2 = 0;
    let resPetCO2 = 0;
    let resBioCO2 = 0;
    let resGeoCO2 = 0;
    let resHydroCO2 = 0;
    let resNukeCO2 = 0;
    let resSolarCO2 = 0;
    let resWindCO2 = 0;
    let resOtherCO2 = 0;
    
    for (let i = 0; i < 33; i++){
 	resCO2[1][i] = rescomm[1][i]*resCoalCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[2][i] = rescomm[2][i]*resGasCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[3][i] = rescomm[3][i]*resPetCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[4][i] = rescomm[4][i]*resBioCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[5][i] = rescomm[5][i]*resGeoCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[6][i] = rescomm[6][i]*resHydroCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[7][i] = rescomm[7][i]*resNukeCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[8][i] = rescomm[8][i]*resSolarCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[9][i] = rescomm[9][i]*resWindCO2;
    }
    for (let i = 0; i < 33; i++){
 	resCO2[10][i] = rescomm[10][i]*resOtherCO2;
    }
}

export function transCO2(){
    let transCO2 = new Array(11)
    for (let i = 0; i < 11; i++){
 	transCO2[i] = new Array(33); 
    }
    for (let i = 0; i < 33; i++){
 	transeration[0][i] = 2018+i;
    }
    
    let transCoalCO2 = 0;
    let transGasCO2 = 0;
    let transPetCO2 = 0;
    let transBioCO2 = 0;
    let transGeoCO2 = 0;
    let transHydroCO2 = 0;
    let transNukeCO2 = 0;
    let transSolarCO2 = 0;
    let transWindCO2 = 0;
    let transOtherCO2 = 0;
    
    for (let i = 0; i < 33; i++){
 	transCO2[1][i] = transportation[1][i]*transCoalCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[2][i] = transportation[2][i]*transGasCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[3][i] = transportation[3][i]*transPetCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[4][i] = transportation[4][i]*transBioCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[5][i] = transportation[5][i]*transGeoCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[6][i] = transportation[6][i]*transHydroCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[7][i] = transportation[7][i]*transNukeCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[8][i] = transportation[8][i]*transSolarCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[9][i] = transportation[9][i]*transWindCO2;
    }
    for (let i = 0; i < 33; i++){
 	transCO2[10][i] = transportation[10][i]*transOtherCO2;
    }
}
