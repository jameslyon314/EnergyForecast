
export default function industry() {
    var industry = new Array(12);
    for (var i = 0; i < 12; i++){
	industry[i] = new Array(33); 
    }

    for (var i = 0; i < 33; i++){
	industry[0][i] = 2018+i;
    }

    var indCoali = 176;
    industry[1][0] = indCoali;
    var indCoalf = +document.getElementById("indCoalf_var").value;
    industry[1][32] = indCoalf;
    var indCoalm = +document.getElementById("indCoalm_var").value;
    var indCoalTau = 6.4;
    var indCoalCutoff = +document.getElementById("indCoalCutoff_var").value;; //1 for true, 0 for false
    var indCoalYear = +document.getElementById("indCoalYear_var").value;;

    if (indCoalm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indCoali, indCoalf, i, indCoalCutoff, indCoalYear, indCoalTau);
	    industry[1][i] = answer;	
	}
    } else if (indCoalm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indCoali, indCoalf, i, indCoalCutoff, indCoalYear);
	    industry[1][i] = answer;
	}
    } else if (indCoalm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indCoali, indCoalf, i, indCoalCutoff, indCoalYear);
	    industry[1][i] = answer;
	}
    } else if (indCoalm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indCoali, indCoalf, i, indCoalCutoff, indCoalYear);
	    industry[1][i] = answer;
	}
    } else if (indCoalm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indCoali, indCoalf, i, indCoalCutoff, indCoalYear, indCoalTau);
	    industry[1][i] = answer;
	}
    } else if (indCoalm == 6){
	for(var i = 1; i <32; i++){
	    industry[1][i] = indCoali;
	}
    }

    var indGasi = 1494;
    industry[2][0] = indGasi;
    var indGasf = +document.getElementById("indGasf_var").value;
    industry[2][32] = indGasf;
    var indGasm = +document.getElementById("indGasm_var").value;
    var indGasTau = 6.4;
    var indGasCutoff = +document.getElementById("indGasCutoff_var").value;; //1 for true, 0 for false
    var indGasYear = +document.getElementById("indGasYear_var").value;;

    if (indGasm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indGasi, indGasf, i, indGasCutoff, indGasYear, indGasTau);
	    industry[2][i] = answer;	
	}
    } else if (indGasm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indGasi, indGasf, i, indGasCutoff, indGasYear);
	    industry[2][i] = answer;
	}
    } else if (indGasm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indGasi, indGasf, i, indGasCutoff, indGasYear);
	    industry[2][i] = answer;
	}
    } else if (indGasm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indGasi, indGasf, i, indGasCutoff, indGasYear);
	    industry[2][i] = answer;
	}
    } else if (indGasm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indGasi, indGasf, i, indGasCutoff, indGasYear, indGasTau);
	    industry[2][i] = answer;
	}
    } else if (indGasm == 6){
	for(var i = 1; i <32; i++){
	    industry[2][i] = indGasi;
	}
    }

    var indPeti = 1272;
    industry[3][0] = indPeti;
    var indPetf = +document.getElementById("indPetf_var").value;
    industry[3][32] = indPetf;
    var indPetm = +document.getElementById("indPetm_var").value;
    var indPetTau = 6.4;
    var indPetCutoff = +document.getElementById("indPetCutoff_var").value;; //1 for true, 0 for false
    var indPetYear = +document.getElementById("indPetYear_var").value;;

    if (indPetm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indPeti, indPetf, i, indPetCutoff, indPetYear, indPetTau);
	    industry[3][i] = answer;	
	}
    } else if (indPetm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indPeti, indPetf, i, indPetCutoff, indPetYear);
	    industry[3][i] = answer;
	}
    } else if (indPetm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indPeti, indPetf, i, indPetCutoff, indPetYear);
	    industry[3][i] = answer;
	}
    } else if (indPetm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indPeti, indPetf, i, indPetCutoff, indPetYear);
	    industry[3][i] = answer;
	}
    } else if (indPetm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indPeti, indPetf, i, indPetCutoff, indPetYear, indPetTau);
	    industry[3][i] = answer;
	}
    } else if (indPetm == 6){
	for(var i = 1; i <32; i++){
	    industry[3][i] = indPeti;
	}
    }

    var indBioi = 366;
    industry[4][0] = indBioi;
    var indBiof = +document.getElementById("indBiof_var").value;
    industry[4][32] = indBiof;
    var indBiom = +document.getElementById("indBiom_var").value;
    var indBioTau = 6.4;
    var indBioCutoff = +document.getElementById("indBioCutoff_var").value;; //1 for true, 0 for false
    var indBioYear = +document.getElementById("indBioYear_var").value;;

    if (indBiom == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indBioi, indBiof, i, indBioCutoff, indBioYear, indBioTau);
	    industry[4][i] = answer;	
	}
    } else if (indBiom == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indBioi, indBiof, i, indBioCutoff, indBioYear);
	    industry[4][i] = answer;
	}
    } else if (indBiom == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indBioi, indBiof, i, indBioCutoff, indBioYear);
	    industry[4][i] = answer;
	}
    } else if (indBiom == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indBioi, indBiof, i, indBioCutoff, indBioYear);
	    industry[4][i] = answer;
	}
    } else if (indBiom == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indBioi, indBiof, i, indBioCutoff, indBioYear, indBioTau);
	    industry[4][i] = answer;
	}
    } else if (indBiom == 6){
	for(var i = 1; i <32; i++){
	    industry[4][i] = indBioi;
	}
    }

    var indGeoi = 0;
    industry[5][0] = indGeoi;
    var indGeof = +document.getElementById("indGeof_var").value;
    industry[5][32] = indGeof;
    var indGeom = +document.getElementById("indGeom_var").value;
    var indGeoTau = 6.4;
    var indGeoCutoff = +document.getElementById("indGeoCutoff_var").value;; //1 for true, 0 for false
    var indGeoYear = +document.getElementById("indGeoYear_var").value;;

    if (indGeom == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indGeoi, indGeof, i, indGeoCutoff, indGeoYear, indGeoTau);
	    industry[5][i] = answer;	
	}
    } else if (indGeom == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indGeoi, indGeof, i, indGeoCutoff, indGeoYear);
	    industry[5][i] = answer;
	}
    } else if (indGeom == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indGeoi, indGeof, i, indGeoCutoff, indGeoYear);
	    industry[5][i] = answer;
	}
    } else if (indGeom == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indGeoi, indGeof, i, indGeoCutoff, indGeoYear);
	    industry[5][i] = answer;
	}
    } else if (indGeom == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indGeoi, indGeof, i, indGeoCutoff, indGeoYear, indGeoTau);
	    industry[5][i] = answer;
	}
    } else if (indGeom == 6){
	for(var i = 1; i <32; i++){
	    industry[5][i] = indGeoi;
	}
    }

    var indHydroi = 1.46;
    industry[6][0] = indHydroi;
    var indHydrof = +document.getElementById("indHydrof_var").value;
    industry[6][32] = indHydrof;
    var indHydrom = +document.getElementById("indHydrom_var").value;
    var indHydroTau = 6.4;
    var indHydroCutoff = +document.getElementById("indHydroCutoff_var").value;; //1 for true, 0 for false
    var indHydroYear = +document.getElementById("indHydroYear_var").value;;

    if (indHydrom == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indHydroi, indHydrof, i, indHydroCutoff, indHydroYear, indHydroTau);
	    industry[6][i] = answer;	
	}
    } else if (indHydrom == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indHydroi, indHydrof, i, indHydroCutoff, indHydroYear);
	    industry[6][i] = answer;
	}
    } else if (indHydrom == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indHydroi, indHydrof, i, indHydroCutoff, indHydroYear);
	    industry[6][i] = answer;
	}
    } else if (indHydrom == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indHydroi, indHydrof, i, indHydroCutoff, indHydroYear);
	    industry[6][i] = answer;
	}
    } else if (indHydrom == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indHydroi, indHydrof, i, indHydroCutoff, indHydroYear, indHydroTau);
	    industry[6][i] = answer;
	}
    } else if (indHydrom == 6){
	for(var i = 1; i <32; i++){
	    industry[6][i] = indHydroi;
	}
    }

    var indNukei = 0;
    industry[7][0] = indNukei;
    var indNukef = +document.getElementById("indNukef_var").value;
    industry[7][32] = indNukef;
    var indNukem = +document.getElementById("indNukem_var").value;
    var indNukeTau = 6.4;
    var indNukeCutoff = +document.getElementById("indNukeCutoff_var").value;; //1 for true, 0 for false
    var indNukeYear = +document.getElementById("indNukeYear_var").value;;

    if (indNukem == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indNukei, indNukef, i, indNukeCutoff, indNukeYear, indNukeTau);
	    industry[7][i] = answer;	
	}
    } else if (indNukem == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indNukei, indNukef, i, indNukeCutoff, indNukeYear);
	    industry[7][i] = answer;
	}
    } else if (indNukem == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indNukei, indNukef, i, indNukeCutoff, indNukeYear);
	    industry[7][i] = answer;
	}
    } else if (indNukem == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indNukei, indNukef, i, indNukeCutoff, indNukeYear);
	    industry[7][i] = answer;
	}
    } else if (indNukem == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indNukei, indNukef, i, indNukeCutoff, indNukeYear, indNukeTau);
	    industry[7][i] = answer;
	}
    } else if (indNukem == 6){
	for(var i = 1; i <32; i++){
	    industry[7][i] = indNukei;
	}
    }

    var indSolari = 4;
    industry[8][0] = indSolari;
    var indSolarf = +document.getElementById("indSolarf_var").value;
    industry[8][32] = indSolarf;
    var indSolarm = +document.getElementById("indSolarm_var").value;
    var indSolarTau = 6.4;
    var indSolarCutoff = +document.getElementById("indSolarCutoff_var").value;; //1 for true, 0 for false
    var indSolarYear = +document.getElementById("indSolarYear_var").value;;

    if (indSolarm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indSolari, indSolarf, i, indSolarCutoff, indSolarYear, indSolarTau);
	    industry[8][i] = answer;	
	}
    } else if (indSolarm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indSolari, indSolarf, i, indSolarCutoff, indSolarYear);
	    industry[8][i] = answer;
	}
    } else if (indSolarm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indSolari, indSolarf, i, indSolarCutoff, indSolarYear);
	    industry[8][i] = answer;
	}
    } else if (indSolarm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indSolari, indSolarf, i, indSolarCutoff, indSolarYear);
	    industry[8][i] = answer;
	}
    } else if (indSolarm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indSolari, indSolarf, i, indSolarCutoff, indSolarYear, indSolarTau);
	    industry[8][i] = answer;
	}
    } else if (indSolarm == 6){
	for(var i = 1; i <32; i++){
	    industry[8][i] = indSolari;
	}
    }

    var indWindi = 0;
    industry[9][0] = indWindi;
    var indWindf = +document.getElementById("indWindf_var").value;
    industry[9][32] = indWindf;
    var indWindm = +document.getElementById("indWindm_var").value;
    var indWindTau = 6.4;
    var indWindCutoff = +document.getElementById("indWindCutoff_var").value;; //1 for true, 0 for false
    var indWindYear = +document.getElementById("indWindYear_var").value;;

    if (indWindm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indWindi, indWindf, i, indWindCutoff, indWindYear, indWindTau);
	    industry[9][i] = answer;	
	}
    } else if (indWindm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indWindi, indWindf, i, indWindCutoff, indWindYear);
	    industry[9][i] = answer;
	}
    } else if (indWindm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indWindi, indWindf, i, indWindCutoff, indWindYear);
	    industry[9][i] = answer;
	}
    } else if (indWindm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indWindi, indWindf, i, indWindCutoff, indWindYear);
	    industry[9][i] = answer;
	}
    } else if (indWindm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indWindi, indWindf, i, indWindCutoff, indWindYear, indWindTau);
	    industry[9][i] = answer;
	}
    } else if (indWindm == 6){
	for(var i = 1; i <32; i++){
	    industry[9][i] = indWindi;
	}
    }
    
    var indGridi = 476;
    industry[10][0] = indGridi;
    var indGridf = +document.getElementById("indGridf_var").value;
    industry[10][32] = indGridf;
    var indGridm = +document.getElementById("indGridm_var").value;
    var indGridTau = 6.4;
    var indGridCutoff = +document.getElementById("indGridCutoff_var").value;; //1 for true, 0 for false
    var indGridYear = +document.getElementById("indGridYear_var").value;;

    if (indGridm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indGridi, indGridf, i, indGridCutoff, indGridYear, indGridTau);
	    industry[10][i] = answer;	
	}
    } else if (indGridm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indGridi, indGridf, i, indGridCutoff, indGridYear);
	    industry[10][i] = answer;
	}
    } else if (indGridm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indGridi, indGridf, i, indGridCutoff, indGridYear);
	    industry[10][i] = answer;
	}
    } else if (indGridm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indGridi, indGridf, i, indGridCutoff, indGridYear);
	    industry[10][i] = answer;
	}
    } else if (indGridm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indGridi, indGridf, i, indGridCutoff, indGridYear, indGridTau);
	    industry[10][i] = answer;
	}
    } else if (indGridm == 6){
	for(var i = 1; i <32; i++){
	    industry[10][i] = indGridi;
	}
    }

    var indOtheri = 0;
    industry[11][0] = indOtheri;
    var indOtherf = +document.getElementById("indOtherf_var").value;
    industry[11][32] = indOtherf;
    var indOtherm = +document.getElementById("indOtherm_var").value;
    var indOtherTau = 6.4;
    var indOtherCutoff = +document.getElementById("indOtherCutoff_var").value;; //1 for true, 0 for false
    var indOtherYear = +document.getElementById("indOtherYear_var").value;;

    if (indOtherm == 1) {
	for (var i = 1; i < 32; i++){
	    answer = expfast(indOtheri, indOtherf, i, indOtherCutoff, indOtherYear, indOtherTau);
	    industry[11][i] = answer;	
	}
    } else if (indOtherm == 2) {
	for (var i = 1; i < 32; i++){
	    answer = quadfast(indOtheri, indOtherf, i, indOtherCutoff, indOtherYear);
	    industry[11][i] = answer;
	}
    } else if (indOtherm == 3){
	for (var i = 1; i < 32; i++){
	    answer = linear(indOtheri, indOtherf, i, indOtherCutoff, indOtherYear);
	    industry[11][i] = answer;
	}
    } else if (indOtherm == 4){
	for (var i = 1; i < 32; i++){
	    answer = quadslow(indOtheri, indOtherf, i, indOtherCutoff, indOtherYear);
	    industry[11][i] = answer;
	}
    } else if (indOtherm == 5){
	for (var i = 1; i < 32; i++){
	    answer = expslow(indOtheri, indOtherf, i, indOtherCutoff, indOtherYear, indOtherTau);
	    industry[11][i] = answer;
	}
    } else if (indOtherm == 6){
	for(var i = 1; i <32; i++){
	    industry[11][i] = indOtheri;
	}
    }

    var sourceInd = +document.getElementById("sourceInd_var").value;
    var yearInd = 	+document.getElementById("yearInd_var").value - 2018;	
    var indValue = industry[sourceInd][yearInd];
    document.getElementById("outputInd").innerHTML = "Energy (GWe): " + indValue;	
}
