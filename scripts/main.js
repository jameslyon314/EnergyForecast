import runGeneration from './generators.js';
import industry from './industry.js';

function init() {
    window.fullInitialization = fullInitialization;
    fullInitialization();
}
init();

function fullInitialization() {
    const generated = runGeneration();
    console.log('generated:', generated);
    // const gs1 = JSON.stringify(generation);
    // console.log(generation);
    
    const ind = industry();
    console.log('industry:', ind);
     /* rescomm();
     * transportation(); 
     * genCO2();
     * indCO2();
     * resCO2();
     * transCO2(); 
     * createCharts(); */
}

/* function rescomm() {
 *     var rescomm = new Array(11);
 *     for (var i = 0; i < 11; i++){
 * 	rescomm[i] = new Array(33); 
 *     }
 * 
 *     for (var i = 0; i < 33; i++){
 * 	rescomm[0][i] = 2018+i;
 *     }
 * 
 *     var resCoali = 4;
 *     rescomm[1][0] = resCoali;
 *     var resCoalf = +document.getElementById("resCoalf_var").value;
 *     rescomm[1][32] = resCoalf;
 *     var resCoalm = +document.getElementById("resCoalm_var").value;
 *     var resCoalTau = 6.4;
 *     var resCoalCutoff = +document.getElementById("resCoalCutoff_var").value;; //1 for true, 0 for false
 *     var resCoalYear = +document.getElementById("resCoalYear_var").value;;
 * 
 *     if (resCoalm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resCoali, resCoalf, i, resCoalCutoff, resCoalYear, resCoalTau);
 * 	    rescomm[1][i] = answer;	
 * 	}
 *     } else if (resCoalm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resCoali, resCoalf, i, resCoalCutoff, resCoalYear);
 * 	    rescomm[1][i] = answer;
 * 	}
 *     } else if (resCoalm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resCoali, resCoalf, i, resCoalCutoff, resCoalYear);
 * 	    rescomm[1][i] = answer;
 * 	}
 *     } else if (resCoalm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resCoali, resCoalf, i, resCoalCutoff, resCoalYear);
 * 	    rescomm[1][i] = answer;
 * 	}
 *     } else if (resCoalm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resCoali, resCoalf, i, resCoalCutoff, resCoalYear, resCoalTau);
 * 	    rescomm[1][i] = answer;
 * 	}
 *     } else if (resCoalm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[1][i] = resCoali;
 * 	}
 *     }
 * 
 *     var resGasi = 1668;
 *     rescomm[2][0] = resGasi;
 *     var resGasf = +document.getElementById("resGasf_var").value;
 *     rescomm[2][32] = resGasf;
 *     var resGasm = +document.getElementById("resGasm_var").value;
 *     var resGasTau = 6.4;
 *     var resGasCutoff = +document.getElementById("resGasCutoff_var").value;; //1 for true, 0 for false
 *     var resGasYear = +document.getElementById("resGasYear_var").value;;
 * 
 *     if (resGasm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resGasi, resGasf, i, resGasCutoff, resGasYear, resGasTau);
 * 	    rescomm[2][i] = answer;	
 * 	}
 *     } else if (resGasm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resGasi, resGasf, i, resGasCutoff, resGasYear);
 * 	    rescomm[2][i] = answer;
 * 	}
 *     } else if (resGasm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resGasi, resGasf, i, resGasCutoff, resGasYear);
 * 	    rescomm[2][i] = answer;
 * 	}
 *     } else if (resGasm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resGasi, resGasf, i, resGasCutoff, resGasYear);
 * 	    rescomm[2][i] = answer;
 * 	}
 *     } else if (resGasm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resGasi, resGasf, i, resGasCutoff, resGasYear, resGasTau);
 * 	    rescomm[2][i] = answer;
 * 	}
 *     } else if (resGasm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[2][i] = resGasi;
 * 	}
 *     }
 * 
 *     var resPeti = 345;
 *     rescomm[3][0] = resPeti;
 *     var resPetf = +document.getElementById("resPetf_var").value;
 *     rescomm[3][32] = resPetf;
 *     var resPetm = +document.getElementById("resPetm_var").value;
 *     var resPetTau = 6.4;
 *     var resPetCutoff = +document.getElementById("resPetCutoff_var").value;; //1 for true, 0 for false
 *     var resPetYear = +document.getElementById("resPetYear_var").value;;
 * 
 *     if (resPetm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resPeti, resPetf, i, resPetCutoff, resPetYear, resPetTau);
 * 	    rescomm[3][i] = answer;	
 * 	}
 *     } else if (resPetm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resPeti, resPetf, i, resPetCutoff, resPetYear);
 * 	    rescomm[3][i] = answer;
 * 	}
 *     } else if (resPetm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resPeti, resPetf, i, resPetCutoff, resPetYear);
 * 	    rescomm[3][i] = answer;
 * 	}
 *     } else if (resPetm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resPeti, resPetf, i, resPetCutoff, resPetYear);
 * 	    rescomm[3][i] = answer;
 * 	}
 *     } else if (resPetm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resPeti, resPetf, i, resPetCutoff, resPetYear, resPetTau);
 * 	    rescomm[3][i] = answer;
 * 	}
 *     } else if (resPetm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[3][i] = resPeti;
 * 	}
 *     }
 * 
 *     var resBioi = 128;
 *     rescomm[4][0] = resBioi;
 *     var resBiof = +document.getElementById("resBiof_var").value;
 *     rescomm[4][32] = resBiof;
 *     var resBiom = +document.getElementById("resBiom_var").value;
 *     var resBioTau = 6.4;
 *     var resBioCutoff = +document.getElementById("resBioCutoff_var").value;; //1 for true, 0 for false
 *     var resBioYear = +document.getElementById("resBioYear_var").value;;
 * 
 *     if (resBiom == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resBioi, resBiof, i, resBioCutoff, resBioYear, resBioTau);
 * 	    rescomm[4][i] = answer;	
 * 	}
 *     } else if (resBiom == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resBioi, resBiof, i, resBioCutoff, resBioYear);
 * 	    rescomm[4][i] = answer;
 * 	}
 *     } else if (resBiom == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resBioi, resBiof, i, resBioCutoff, resBioYear);
 * 	    rescomm[4][i] = answer;
 * 	}
 *     } else if (resBiom == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resBioi, resBiof, i, resBioCutoff, resBioYear);
 * 	    rescomm[4][i] = answer;
 * 	}
 *     } else if (resBiom == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resBioi, resBiof, i, resBioCutoff, resBioYear, resBioTau);
 * 	    rescomm[4][i] = answer;
 * 	}
 *     } else if (resBiom == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[4][i] = resBioi;
 * 	}
 *     }
 * 
 *     var resGeoi = 11;
 *     rescomm[5][0] = resGeoi;
 *     var resGeof = +document.getElementById("resGeof_var").value;
 *     rescomm[5][32] = resGeof;
 *     var resGeom = +document.getElementById("resGeom_var").value;
 *     var resGeoTau = 6.4;
 *     var resGeoCutoff = +document.getElementById("resGeoCutoff_var").value;; //1 for true, 0 for false
 *     var resGeoYear = +document.getElementById("resGeoYear_var").value;;
 * 
 *     if (resGeom == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resGeoi, resGeof, i, resGeoCutoff, resGeoYear, resGeoTau);
 * 	    rescomm[5][i] = answer;	
 * 	}
 *     } else if (resGeom == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resGeoi, resGeof, i, resGeoCutoff, resGeoYear);
 * 	    rescomm[5][i] = answer;
 * 	}
 *     } else if (resGeom == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resGeoi, resGeof, i, resGeoCutoff, resGeoYear);
 * 	    rescomm[5][i] = answer;
 * 	}
 *     } else if (resGeom == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resGeoi, resGeof, i, resGeoCutoff, resGeoYear);
 * 	    rescomm[5][i] = answer;
 * 	}
 *     } else if (resGeom == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resGeoi, resGeof, i, resGeoCutoff, resGeoYear, resGeoTau);
 * 	    rescomm[5][i] = answer;
 * 	}
 *     } else if (resGeom == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[5][i] = resGeoi;
 * 	}
 *     }
 * 
 *     var resNukei = 0;
 *     rescomm[6][0] = resNukei;
 *     var resNukef = +document.getElementById("resNukef_var").value;
 *     rescomm[6][32] = resNukef;
 *     var resNukem = +document.getElementById("resNukem_var").value;
 *     var resNukeTau = 6.4;
 *     var resNukeCutoff = +document.getElementById("resNukeCutoff_var").value;; //1 for true, 0 for false
 *     var resNukeYear = +document.getElementById("resNukeYear_var").value;;
 * 
 *     if (resNukem == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resNukei, resNukef, i, resNukeCutoff, resNukeYear, resNukeTau);
 * 	    rescomm[6][i] = answer;	
 * 	}
 *     } else if (resNukem == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resNukei, resNukef, i, resNukeCutoff, resNukeYear);
 * 	    rescomm[6][i] = answer;
 * 	}
 *     } else if (resNukem == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resNukei, resNukef, i, resNukeCutoff, resNukeYear);
 * 	    rescomm[6][i] = answer;
 * 	}
 *     } else if (resNukem == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resNukei, resNukef, i, resNukeCutoff, resNukeYear);
 * 	    rescomm[6][i] = answer;
 * 	}
 *     } else if (resNukem == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resNukei, resNukef, i, resNukeCutoff, resNukeYear, resNukeTau);
 * 	    rescomm[6][i] = answer;
 * 	}
 *     } else if (resNukem == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[6][i] = resNukei;
 * 	}
 *     }
 * 
 *     var resSolari = 42;
 *     rescomm[7][0] = resSolari;
 *     var resSolarf = +document.getElementById("resSolarf_var").value;
 *     rescomm[7][32] = resSolarf;
 *     var resSolarm = +document.getElementById("resSolarm_var").value;
 *     var resSolarTau = 6.4;
 *     var resSolarCutoff = +document.getElementById("resSolarCutoff_var").value;; //1 for true, 0 for false
 *     var resSolarYear = +document.getElementById("resSolarYear_var").value;;
 * 
 *     if (resSolarm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resSolari, resSolarf, i, resSolarCutoff, resSolarYear, resSolarTau);
 * 	    rescomm[7][i] = answer;	
 * 	}
 *     } else if (resSolarm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resSolari, resSolarf, i, resSolarCutoff, resSolarYear);
 * 	    rescomm[7][i] = answer;
 * 	}
 *     } else if (resSolarm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resSolari, resSolarf, i, resSolarCutoff, resSolarYear);
 * 	    rescomm[7][i] = answer;
 * 	}
 *     } else if (resSolarm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resSolari, resSolarf, i, resSolarCutoff, resSolarYear);
 * 	    rescomm[7][i] = answer;
 * 	}
 *     } else if (resSolarm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resSolari, resSolarf, i, resSolarCutoff, resSolarYear, resSolarTau);
 * 	    rescomm[7][i] = answer;
 * 	}
 *     } else if (resSolarm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[7][i] = resSolari;
 * 	}
 *     }
 * 
 *     var resWindi = 0;
 *     rescomm[8][0] = resWindi;
 *     var resWindf = +document.getElementById("resWindf_var").value;
 *     rescomm[8][32] = resWindf;
 *     var resWindm = +document.getElementById("resWindm_var").value;
 *     var resWindTau = 6.4;
 *     var resWindCutoff = +document.getElementById("resWindCutoff_var").value;; //1 for true, 0 for false
 *     var resWindYear = +document.getElementById("resWindYear_var").value;;
 * 
 *     if (resWindm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resWindi, resWindf, i, resWindCutoff, resWindYear, resWindTau);
 * 	    rescomm[8][i] = answer;	
 * 	}
 *     } else if (resWindm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resWindi, resWindf, i, resWindCutoff, resWindYear);
 * 	    rescomm[8][i] = answer;
 * 	}
 *     } else if (resWindm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resWindi, resWindf, i, resWindCutoff, resWindYear);
 * 	    rescomm[8][i] = answer;
 * 	}
 *     } else if (resWindm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resWindi, resWindf, i, resWindCutoff, resWindYear);
 * 	    rescomm[8][i] = answer;
 * 	}
 *     } else if (resWindm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resWindi, resWindf, i, resWindCutoff, resWindYear, resWindTau);
 * 	    rescomm[8][i] = answer;
 * 	}
 *     } else if (resWindm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[8][i] = resWindi;
 * 	}
 *     }
 *     
 *     var resGridi = 1847;
 *     rescomm[9][0] = resGridi;
 *     var resGridf = +document.getElementById("resGridf_var").value;
 *     rescomm[9][32] = resGridf;
 *     var resGridm = +document.getElementById("resGridm_var").value;
 *     var resGridTau = 6.4;
 *     var resGridCutoff = +document.getElementById("resGridCutoff_var").value;; //1 for true, 0 for false
 *     var resGridYear = +document.getElementById("resGridYear_var").value;;
 * 
 *     if (resGridm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resGridi, resGridf, i, resGridCutoff, resGridYear, resGridTau);
 * 	    rescomm[9][i] = answer;	
 * 	}
 *     } else if (resGridm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resGridi, resGridf, i, resGridCutoff, resGridYear);
 * 	    rescomm[9][i] = answer;
 * 	}
 *     } else if (resGridm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resGridi, resGridf, i, resGridCutoff, resGridYear);
 * 	    rescomm[9][i] = answer;
 * 	}
 *     } else if (resGridm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resGridi, resGridf, i, resGridCutoff, resGridYear);
 * 	    rescomm[9][i] = answer;
 * 	}
 *     } else if (resGridm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resGridi, resGridf, i, resGridCutoff, resGridYear, resGridTau);
 * 	    rescomm[9][i] = answer;
 * 	}
 *     } else if (resGridm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[9][i] = resGridi;
 * 	}
 *     }
 * 
 *     var resOtheri = 0;
 *     rescomm[10][0] = resOtheri;
 *     var resOtherf = +document.getElementById("resOtherf_var").value;
 *     rescomm[10][32] = resOtherf;
 *     var resOtherm = +document.getElementById("resOtherm_var").value;
 *     var resOtherTau = 6.4;
 *     var resOtherCutoff = +document.getElementById("resOtherCutoff_var").value;; //1 for true, 0 for false
 *     var resOtherYear = +document.getElementById("resOtherYear_var").value;;
 * 
 *     if (resOtherm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(resOtheri, resOtherf, i, resOtherCutoff, resOtherYear, resOtherTau);
 * 	    rescomm[10][i] = answer;	
 * 	}
 *     } else if (resOtherm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(resOtheri, resOtherf, i, resOtherCutoff, resOtherYear);
 * 	    rescomm[10][i] = answer;
 * 	}
 *     } else if (resOtherm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(resOtheri, resOtherf, i, resOtherCutoff, resOtherYear);
 * 	    rescomm[10][i] = answer;
 * 	}
 *     } else if (resOtherm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(resOtheri, resOtherf, i, resOtherCutoff, resOtherYear);
 * 	    rescomm[10][i] = answer;
 * 	}
 *     } else if (resOtherm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(resOtheri, resOtherf, i, resOtherCutoff, resOtherYear, resOtherTau);
 * 	    rescomm[10][i] = answer;
 * 	}
 *     } else if (resOtherm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    rescomm[10][i] = resOtheri;
 * 	}
 *     }
 * 
 *     var sourceRescomm = +document.getElementById("sourceRescomm_var").value;
 *     var yearRescomm = 	+document.getElementById("yearRescomm_var").value - 2018;	
 *     var rescommValue = rescomm[sourceRescomm][yearRescomm];
 *     document.getElementById("outputRescomm").innerHTML = "Energy (GWe): " + rescommValue;	
 * }
 * 
 * function transportation() {
 *     var transportation = new Array(8);
 *     for (var i = 0; i < 8; i++){
 * 	transportation[i] = new Array(33); 
 *     }
 * 
 *     for (var i = 0; i < 33; i++){
 * 	transportation[0][i] = 2018+i;
 *     }
 * 
 *     var transGasi = 54;
 *     transportation[1][0] = transGasi;
 *     var transGasf = +document.getElementById("transGasf_var").value;
 *     transportation[1][32] = transGasf;
 *     var transGasm = +document.getElementById("transGasm_var").value;
 *     var transGasTau = 6.4;
 *     var transGasCutoff = +document.getElementById("transGasCutoff_var").value;; //1 for true, 0 for false
 *     var transGasYear = +document.getElementById("transGasYear_var").value;;
 * 
 *     if (transGasm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transGasi, transGasf, i, transGasCutoff, transGasYear, transGasTau);
 * 	    transportation[1][i] = answer;	
 * 	}
 *     } else if (transGasm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transGasi, transGasf, i, transGasCutoff, transGasYear);
 * 	    transportation[1][i] = answer;
 * 	}
 *     } else if (transGasm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transGasi, transGasf, i, transGasCutoff, transGasYear);
 * 	    transportation[1][i] = answer;
 * 	}
 *     } else if (transGasm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transGasi, transGasf, i, transGasCutoff, transGasYear);
 * 	    transportation[1][i] = answer;
 * 	}
 *     } else if (transGasm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transGasi, transGasf, i, transGasCutoff, transGasYear, transGasTau);
 * 	    transportation[1][i] = answer;
 * 	}
 *     } else if (transGasm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[1][i] = transGasi;
 * 	}
 *     }
 * 
 *     var transPeti = 1600;
 *     transportation[2][0] = transPeti;
 *     var transPetf = +document.getElementById("transPetf_var").value;
 *     transportation[2][32] = transPetf;
 *     var transPetm = +document.getElementById("transPetm_var").value;
 *     var transPetTau = 6.4;
 *     var transPetCutoff = +document.getElementById("transPetCutoff_var").value;; //1 for true, 0 for false
 *     var transPetYear = +document.getElementById("transPetYear_var").value;;
 * 
 *     if (transPetm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transPeti, transPetf, i, transPetCutoff, transPetYear, transPetTau);
 * 	    transportation[2][i] = answer;	
 * 	}
 *     } else if (transPetm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transPeti, transPetf, i, transPetCutoff, transPetYear);
 * 	    transportation[2][i] = answer;
 * 	}
 *     } else if (transPetm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transPeti, transPetf, i, transPetCutoff, transPetYear);
 * 	    transportation[2][i] = answer;
 * 	}
 *     } else if (transPetm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transPeti, transPetf, i, transPetCutoff, transPetYear);
 * 	    transportation[2][i] = answer;
 * 	}
 *     } else if (transPetm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transPeti, transPetf, i, transPetCutoff, transPetYear, transPetTau);
 * 	    transportation[2][i] = answer;
 * 	}
 *     } else if (transPetm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[2][i] = transPeti;
 * 	}
 *     }
 * 
 *     var transBioi = 88;
 *     transportation[3][0] = transBioi;
 *     var transBiof = +document.getElementById("transBiof_var").value;
 *     transportation[3][32] = transBiof;
 *     var transBiom = +document.getElementById("transBiom_var").value;
 *     var transBioTau = 6.4;
 *     var transBioCutoff = +document.getElementById("transBioCutoff_var").value;; //1 for true, 0 for false
 *     var transBioYear = +document.getElementById("transBioYear_var").value;;
 * 
 *     if (transBiom == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transBioi, transBiof, i, transBioCutoff, transBioYear, transBioTau);
 * 	    transportation[3][i] = answer;	
 * 	}
 *     } else if (transBiom == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transBioi, transBiof, i, transBioCutoff, transBioYear);
 * 	    transportation[3][i] = answer;
 * 	}
 *     } else if (transBiom == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transBioi, transBiof, i, transBioCutoff, transBioYear);
 * 	    transportation[3][i] = answer;
 * 	}
 *     } else if (transBiom == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transBioi, transBiof, i, transBioCutoff, transBioYear);
 * 	    transportation[3][i] = answer;
 * 	}
 *     } else if (transBiom == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transBioi, transBiof, i, transBioCutoff, transBioYear, transBioTau);
 * 	    transportation[3][i] = answer;
 * 	}
 *     } else if (transBiom == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[3][i] = transBioi;
 * 	}
 *     }
 * 
 *     var transNukei = 0;
 *     transportation[4][0] = transNukei;
 *     var transNukef = +document.getElementById("transNukef_var").value;
 *     transportation[4][32] = transNukef;
 *     var transNukem = +document.getElementById("transNukem_var").value;
 *     var transNukeTau = 6.4;
 *     var transNukeCutoff = +document.getElementById("transNukeCutoff_var").value;; //1 for true, 0 for false
 *     var transNukeYear = +document.getElementById("transNukeYear_var").value;;
 * 
 *     if (transNukem == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transNukei, transNukef, i, transNukeCutoff, transNukeYear, transNukeTau);
 * 	    transportation[4][i] = answer;	
 * 	}
 *     } else if (transNukem == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 * 	    transportation[4][i] = answer;
 * 	}
 *     } else if (transNukem == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 * 	    transportation[4][i] = answer;
 * 	}
 *     } else if (transNukem == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 * 	    transportation[4][i] = answer;
 * 	}
 *     } else if (transNukem == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transNukei, transNukef, i, transNukeCutoff, transNukeYear, transNukeTau);
 * 	    transportation[4][i] = answer;
 * 	}
 *     } else if (transNukem == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[4][i] = transNukei;
 * 	}
 *     }
 * 
 *     var transSolari = 0;
 *     transportation[5][0] = transSolari;
 *     var transSolarf = +document.getElementById("transSolarf_var").value;
 *     transportation[5][32] = transSolarf;
 *     var transSolarm = +document.getElementById("transSolarm_var").value;
 *     var transSolarTau = 6.4;
 *     var transSolarCutoff = +document.getElementById("transSolarCutoff_var").value;; //1 for true, 0 for false
 *     var transSolarYear = +document.getElementById("transSolarYear_var").value;;
 * 
 *     if (transSolarm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transSolari, transSolarf, i, transSolarCutoff, transSolarYear, transSolarTau);
 * 	    transportation[5][i] = answer;	
 * 	}
 *     } else if (transSolarm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 * 	    transportation[5][i] = answer;
 * 	}
 *     } else if (transSolarm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 * 	    transportation[5][i] = answer;
 * 	}
 *     } else if (transSolarm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 * 	    transportation[5][i] = answer;
 * 	}
 *     } else if (transSolarm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transSolari, transSolarf, i, transSolarCutoff, transSolarYear, transSolarTau);
 * 	    transportation[5][i] = answer;
 * 	}
 *     } else if (transSolarm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[5][i] = transSolari;
 * 	}
 *     }
 * 
 *     var transGridi = 2;
 *     transportation[6][0] = transGridi;
 *     var transGridf = +document.getElementById("transGridf_var").value;
 *     transportation[6][32] = transGridf;
 *     var transGridm = +document.getElementById("transGridm_var").value;
 *     var transGridTau = 6.4;
 *     var transGridCutoff = +document.getElementById("transGridCutoff_var").value;; //1 for true, 0 for false
 *     var transGridYear = +document.getElementById("transGridYear_var").value;;
 * 
 *     if (transGridm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transGridi, transGridf, i, transGridCutoff, transGridYear, transGridTau);
 * 	    transportation[6][i] = answer;	
 * 	}
 *     } else if (transGridm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transGridi, transGridf, i, transGridCutoff, transGridYear);
 * 	    transportation[6][i] = answer;
 * 	}
 *     } else if (transGridm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transGridi, transGridf, i, transGridCutoff, transGridYear);
 * 	    transportation[6][i] = answer;
 * 	}
 *     } else if (transGridm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transGridi, transGridf, i, transGridCutoff, transGridYear);
 * 	    transportation[6][i] = answer;
 * 	}
 *     } else if (transGridm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transGridi, transGridf, i, transGridCutoff, transGridYear, transGridTau);
 * 	    transportation[6][i] = answer;
 * 	}
 *     } else if (transGridm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[6][i] = transGridi;
 * 	}
 *     }
 * 
 *     var transOtheri = 0;
 *     transportation[7][0] = transOtheri;
 *     var transOtherf = +document.getElementById("transOtherf_var").value;
 *     transportation[7][32] = transOtherf;
 *     var transOtherm = +document.getElementById("transOtherm_var").value;
 *     var transOtherTau = 6.4;
 *     var transOtherCutoff = +document.getElementById("transOtherCutoff_var").value;; //1 for true, 0 for false
 *     var transOtherYear = +document.getElementById("transOtherYear_var").value;;
 * 
 *     if (transOtherm == 1) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expfast(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear, transOtherTau);
 * 	    transportation[7][i] = answer;	
 * 	}
 *     } else if (transOtherm == 2) {
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadfast(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 * 	    transportation[7][i] = answer;
 * 	}
 *     } else if (transOtherm == 3){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = linear(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 * 	    transportation[7][i] = answer;
 * 	}
 *     } else if (transOtherm == 4){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = quadslow(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 * 	    transportation[7][i] = answer;
 * 	}
 *     } else if (transOtherm == 5){
 * 	for (var i = 1; i < 32; i++){
 * 	    answer = expslow(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear, transOtherTau);
 * 	    transportation[7][i] = answer;
 * 	}
 *     } else if (transOtherm == 6){
 * 	for(var i = 1; i <32; i++){
 * 	    transportation[7][i] = transOtheri;
 * 	}
 *     }
 * 
 *     var sourceTrans = +document.getElementById("sourceTrans_var").value;
 *     var yearTrans = +document.getElementById("yearTrans_var").value - 2018;	
 *     var transValue = transportation[sourceTrans][yearTrans];
 *     document.getElementById("outputTrans").innerHTML = "Energy (GWe): " + transValue;	
 * }
 * 
 * function genCO2(){
 *     function genCO2(){
 * 	var genCO2 = new Array(11)
 * 	for (var i = 0; i < 11; i++){
 * 	    genCO2[i] = new Array(33); 
 * 	}
 * 	for (var i = 0; i < 33; i++){
 * 	    generation[0][i] = 2018+i;
 * 	}
 * 
 * 	var genCoalCO2 = 0;
 * 	var genGasCO2 = 0;
 * 	var genPetCO2 = 0;
 * 	var genBioCO2 = 0;
 * 	var genGeoCO2 = 0;
 * 	var genHydroCO2 = 0;
 * 	var genNukeCO2 = 0;
 * 	var genSolarCO2 = 0;
 * 	var genWindCO2 = 0;
 * 	var genOtherCO2 = 0;
 * 
 * 	for (i=0; i<33; i++){
 * 	    genCO2[1][i] = generation[1][i]*genCoalCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[2][i] = generation[2][i]*genGasCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[3][i] = generation[3][i]*genPetCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[4][i] = generation[4][i]*genBioCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[5][i] = generation[5][i]*genGeoCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[6][i] = generation[6][i]*genHydroCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[7][i] = generation[7][i]*genNukeCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[8][i] = generation[8][i]*genSolarCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[9][i] = generation[9][i]*genWindCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    genCO2[10][i] = generation[10][i]*genOtherCO2;
 * 	}
 *     }//end function genCO2
 * }
 * 
 * function indCO2(){
 *     function indCO2(){
 * 	var indCO2 = new Array(11)
 * 	for (var i = 0; i < 11; i++){
 * 	    indCO2[i] = new Array(33); 
 * 	}
 * 	for (var i = 0; i < 33; i++){
 * 	    inderation[0][i] = 2018+i;
 * 	}
 * 
 * 	var indCoalCO2 = 0;
 * 	var indGasCO2 = 0;
 * 	var indPetCO2 = 0;
 * 	var indBioCO2 = 0;
 * 	var indGeoCO2 = 0;
 * 	var indHydroCO2 = 0;
 * 	var indNukeCO2 = 0;
 * 	var indSolarCO2 = 0;
 * 	var indWindCO2 = 0;
 * 	var indOtherCO2 = 0;
 * 
 * 	for (i=0; i<33; i++){
 * 	    indCO2[1][i] = industry[1][i]*indCoalCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[2][i] = industry[2][i]*indGasCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[3][i] = industry[3][i]*indPetCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[4][i] = industry[4][i]*indBioCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[5][i] = industry[5][i]*indGeoCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[6][i] = industry[6][i]*indHydroCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[7][i] = industry[7][i]*indNukeCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[8][i] = industry[8][i]*indSolarCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[9][i] = industry[9][i]*indWindCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    indCO2[10][i] = industry[10][i]*indOtherCO2;
 * 	}
 *     }//end function indCO2
 * }
 * 
 * function resCO2(){
 *     function resCO2(){
 * 	var resCO2 = new Array(11)
 * 	for (var i = 0; i < 11; i++){
 * 	    resCO2[i] = new Array(33); 
 * 	}
 * 	for (var i = 0; i < 33; i++){
 * 	    reseration[0][i] = 2018+i;
 * 	}
 * 
 * 	var resCoalCO2 = 0;
 * 	var resGasCO2 = 0;
 * 	var resPetCO2 = 0;
 * 	var resBioCO2 = 0;
 * 	var resGeoCO2 = 0;
 * 	var resHydroCO2 = 0;
 * 	var resNukeCO2 = 0;
 * 	var resSolarCO2 = 0;
 * 	var resWindCO2 = 0;
 * 	var resOtherCO2 = 0;
 * 
 * 	for (i=0; i<33; i++){
 * 	    resCO2[1][i] = rescomm[1][i]*resCoalCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[2][i] = rescomm[2][i]*resGasCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[3][i] = rescomm[3][i]*resPetCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[4][i] = rescomm[4][i]*resBioCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[5][i] = rescomm[5][i]*resGeoCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[6][i] = rescomm[6][i]*resHydroCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[7][i] = rescomm[7][i]*resNukeCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[8][i] = rescomm[8][i]*resSolarCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[9][i] = rescomm[9][i]*resWindCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    resCO2[10][i] = rescomm[10][i]*resOtherCO2;
 * 	}
 *     }//end function resCO2
 * }
 * 
 * function transCO2(){
 *     function transCO2(){
 * 	var transCO2 = new Array(11)
 * 	for (var i = 0; i < 11; i++){
 * 	    transCO2[i] = new Array(33); 
 * 	}
 * 	for (var i = 0; i < 33; i++){
 * 	    transeration[0][i] = 2018+i;
 * 	}
 * 
 * 	var transCoalCO2 = 0;
 * 	var transGasCO2 = 0;
 * 	var transPetCO2 = 0;
 * 	var transBioCO2 = 0;
 * 	var transGeoCO2 = 0;
 * 	var transHydroCO2 = 0;
 * 	var transNukeCO2 = 0;
 * 	var transSolarCO2 = 0;
 * 	var transWindCO2 = 0;
 * 	var transOtherCO2 = 0;
 * 
 * 	for (i=0; i<33; i++){
 * 	    transCO2[1][i] = transportation[1][i]*transCoalCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[2][i] = transportation[2][i]*transGasCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[3][i] = transportation[3][i]*transPetCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[4][i] = transportation[4][i]*transBioCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[5][i] = transportation[5][i]*transGeoCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[6][i] = transportation[6][i]*transHydroCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[7][i] = transportation[7][i]*transNukeCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[8][i] = transportation[8][i]*transSolarCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[9][i] = transportation[9][i]*transWindCO2;
 * 	}
 * 	for (i=0; i<33; i++){
 * 	    transCO2[10][i] = transportation[10][i]*transOtherCO2;
 * 	}
 *     }//end function transCO2
 * } */
