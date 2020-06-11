export default function transportation() {
    var transportation = new Array(8);
    for (var i = 0; i < 8; i++){
 	transportation[i] = new Array(33); 
    }
    
    for (var i = 0; i < 33; i++){
 	transportation[0][i] = 2018+i;
    }
    
    var transGasi = 54;
    transportation[1][0] = transGasi;
    var transGasf = +document.getElementById("transGasf_var").value;
    transportation[1][32] = transGasf;
    var transGasm = +document.getElementById("transGasm_var").value;
    var transGasTau = 6.4;
    var transGasCutoff = +document.getElementById("transGasCutoff_var").value;; //1 for true, 0 for false
    var transGasYear = +document.getElementById("transGasYear_var").value;;
    
    if (transGasm == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transGasi, transGasf, i, transGasCutoff, transGasYear, transGasTau);
 	    transportation[1][i] = answer;	
 	}
    } else if (transGasm == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transGasi, transGasf, i, transGasCutoff, transGasYear);
 	    transportation[1][i] = answer;
 	}
    } else if (transGasm == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transGasi, transGasf, i, transGasCutoff, transGasYear);
 	    transportation[1][i] = answer;
 	}
    } else if (transGasm == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transGasi, transGasf, i, transGasCutoff, transGasYear);
 	    transportation[1][i] = answer;
 	}
    } else if (transGasm == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transGasi, transGasf, i, transGasCutoff, transGasYear, transGasTau);
 	    transportation[1][i] = answer;
 	}
    } else if (transGasm == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[1][i] = transGasi;
 	}
    }
    
    var transPeti = 1600;
    transportation[2][0] = transPeti;
    var transPetf = +document.getElementById("transPetf_var").value;
    transportation[2][32] = transPetf;
    var transPetm = +document.getElementById("transPetm_var").value;
    var transPetTau = 6.4;
    var transPetCutoff = +document.getElementById("transPetCutoff_var").value;; //1 for true, 0 for false
    var transPetYear = +document.getElementById("transPetYear_var").value;;
    
    if (transPetm == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transPeti, transPetf, i, transPetCutoff, transPetYear, transPetTau);
 	    transportation[2][i] = answer;	
 	}
    } else if (transPetm == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transPeti, transPetf, i, transPetCutoff, transPetYear);
 	    transportation[2][i] = answer;
 	}
    } else if (transPetm == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transPeti, transPetf, i, transPetCutoff, transPetYear);
 	    transportation[2][i] = answer;
 	}
    } else if (transPetm == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transPeti, transPetf, i, transPetCutoff, transPetYear);
 	    transportation[2][i] = answer;
 	}
    } else if (transPetm == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transPeti, transPetf, i, transPetCutoff, transPetYear, transPetTau);
 	    transportation[2][i] = answer;
 	}
    } else if (transPetm == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[2][i] = transPeti;
 	}
    }
    
    var transBioi = 88;
    transportation[3][0] = transBioi;
    var transBiof = +document.getElementById("transBiof_var").value;
    transportation[3][32] = transBiof;
    var transBiom = +document.getElementById("transBiom_var").value;
    var transBioTau = 6.4;
    var transBioCutoff = +document.getElementById("transBioCutoff_var").value;; //1 for true, 0 for false
    var transBioYear = +document.getElementById("transBioYear_var").value;;
    
    if (transBiom == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transBioi, transBiof, i, transBioCutoff, transBioYear, transBioTau);
 	    transportation[3][i] = answer;	
 	}
    } else if (transBiom == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transBioi, transBiof, i, transBioCutoff, transBioYear);
 	    transportation[3][i] = answer;
 	}
    } else if (transBiom == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transBioi, transBiof, i, transBioCutoff, transBioYear);
 	    transportation[3][i] = answer;
 	}
    } else if (transBiom == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transBioi, transBiof, i, transBioCutoff, transBioYear);
 	    transportation[3][i] = answer;
 	}
    } else if (transBiom == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transBioi, transBiof, i, transBioCutoff, transBioYear, transBioTau);
 	    transportation[3][i] = answer;
 	}
    } else if (transBiom == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[3][i] = transBioi;
 	}
    }
    
    var transNukei = 0;
    transportation[4][0] = transNukei;
    var transNukef = +document.getElementById("transNukef_var").value;
    transportation[4][32] = transNukef;
    var transNukem = +document.getElementById("transNukem_var").value;
    var transNukeTau = 6.4;
    var transNukeCutoff = +document.getElementById("transNukeCutoff_var").value;; //1 for true, 0 for false
    var transNukeYear = +document.getElementById("transNukeYear_var").value;;
    
    if (transNukem == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transNukei, transNukef, i, transNukeCutoff, transNukeYear, transNukeTau);
 	    transportation[4][i] = answer;	
 	}
    } else if (transNukem == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 	    transportation[4][i] = answer;
 	}
    } else if (transNukem == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 	    transportation[4][i] = answer;
 	}
    } else if (transNukem == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transNukei, transNukef, i, transNukeCutoff, transNukeYear);
 	    transportation[4][i] = answer;
 	}
    } else if (transNukem == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transNukei, transNukef, i, transNukeCutoff, transNukeYear, transNukeTau);
 	    transportation[4][i] = answer;
 	}
    } else if (transNukem == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[4][i] = transNukei;
 	}
    }
    
    var transSolari = 0;
    transportation[5][0] = transSolari;
    var transSolarf = +document.getElementById("transSolarf_var").value;
    transportation[5][32] = transSolarf;
    var transSolarm = +document.getElementById("transSolarm_var").value;
    var transSolarTau = 6.4;
    var transSolarCutoff = +document.getElementById("transSolarCutoff_var").value;; //1 for true, 0 for false
    var transSolarYear = +document.getElementById("transSolarYear_var").value;;
    
    if (transSolarm == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transSolari, transSolarf, i, transSolarCutoff, transSolarYear, transSolarTau);
 	    transportation[5][i] = answer;	
 	}
    } else if (transSolarm == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 	    transportation[5][i] = answer;
 	}
    } else if (transSolarm == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 	    transportation[5][i] = answer;
 	}
    } else if (transSolarm == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transSolari, transSolarf, i, transSolarCutoff, transSolarYear);
 	    transportation[5][i] = answer;
 	}
    } else if (transSolarm == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transSolari, transSolarf, i, transSolarCutoff, transSolarYear, transSolarTau);
 	    transportation[5][i] = answer;
 	}
    } else if (transSolarm == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[5][i] = transSolari;
 	}
    }
    
    var transGridi = 2;
    transportation[6][0] = transGridi;
    var transGridf = +document.getElementById("transGridf_var").value;
    transportation[6][32] = transGridf;
    var transGridm = +document.getElementById("transGridm_var").value;
    var transGridTau = 6.4;
    var transGridCutoff = +document.getElementById("transGridCutoff_var").value;; //1 for true, 0 for false
    var transGridYear = +document.getElementById("transGridYear_var").value;;
    
    if (transGridm == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transGridi, transGridf, i, transGridCutoff, transGridYear, transGridTau);
 	    transportation[6][i] = answer;	
 	}
    } else if (transGridm == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transGridi, transGridf, i, transGridCutoff, transGridYear);
 	    transportation[6][i] = answer;
 	}
    } else if (transGridm == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transGridi, transGridf, i, transGridCutoff, transGridYear);
 	    transportation[6][i] = answer;
 	}
    } else if (transGridm == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transGridi, transGridf, i, transGridCutoff, transGridYear);
 	    transportation[6][i] = answer;
 	}
    } else if (transGridm == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transGridi, transGridf, i, transGridCutoff, transGridYear, transGridTau);
 	    transportation[6][i] = answer;
 	}
    } else if (transGridm == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[6][i] = transGridi;
 	}
    }
    
    var transOtheri = 0;
    transportation[7][0] = transOtheri;
    var transOtherf = +document.getElementById("transOtherf_var").value;
    transportation[7][32] = transOtherf;
    var transOtherm = +document.getElementById("transOtherm_var").value;
    var transOtherTau = 6.4;
    var transOtherCutoff = +document.getElementById("transOtherCutoff_var").value;; //1 for true, 0 for false
    var transOtherYear = +document.getElementById("transOtherYear_var").value;;
    
    if (transOtherm == 1) {
 	for (var i = 1; i < 32; i++){
 	    answer = expfast(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear, transOtherTau);
 	    transportation[7][i] = answer;	
 	}
    } else if (transOtherm == 2) {
 	for (var i = 1; i < 32; i++){
 	    answer = quadfast(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 	    transportation[7][i] = answer;
 	}
    } else if (transOtherm == 3){
 	for (var i = 1; i < 32; i++){
 	    answer = linear(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 	    transportation[7][i] = answer;
 	}
    } else if (transOtherm == 4){
 	for (var i = 1; i < 32; i++){
 	    answer = quadslow(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear);
 	    transportation[7][i] = answer;
 	}
    } else if (transOtherm == 5){
 	for (var i = 1; i < 32; i++){
 	    answer = expslow(transOtheri, transOtherf, i, transOtherCutoff, transOtherYear, transOtherTau);
 	    transportation[7][i] = answer;
 	}
    } else if (transOtherm == 6){
 	for(var i = 1; i <32; i++){
 	    transportation[7][i] = transOtheri;
 	}
    }
    
    var sourceTrans = +document.getElementById("sourceTrans_var").value;
    var yearTrans = +document.getElementById("yearTrans_var").value - 2018;	
    var transValue = transportation[sourceTrans][yearTrans];
    document.getElementById("outputTrans").innerHTML = "Energy (GWe): " + transValue;	
}
