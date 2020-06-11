import { Resource } from './utils/index.js ';

export default function runGeneration() {
    let generated = new Array(12);
    for (let i = 0; i < 12; i++){
	generated[i] = new Array(32); 
    }
    
    for (let i = 0; i < 33; i++) {
	generated[0][i] = 2018+i;
    }

    const CoalResource = new Resource('Coal', 1146, 'genCoalf_var', 'genCoalm_var', 6.4, 'genCoalCutoff_var', 'genCoalYear_var');
    CoalResource.generate(generated, 1);

    const GasResource = new Resource('Gas', 1064, 'genGasf_var', 'genGasm_var', 6.4, 'genGasCutoff_var', 'genGasYear_var');
    GasResource.generate(generated, 2);

    const PetResource = new Resource('Pet', 25, 'genPetf_var', 'genPetm_var', 6.4, 'genPetCutoff_var', 'genPetYear_var');
    PetResource.generate(generated, 3);
    
    const BioResource = new Resource('Bio', 56, 'genBiof_var', 'genBiom_var', 6.4, 'genBioCutoff_var', 'genBioYear_var');
    BioResource.generate(generated, 4);

    const GeoResource = new Resource('Geo', 21, 'genGeof_var', 'genGeom_var', 6.4, 'genGeoCutoff_var', 'genGeoYear_var');
    GeoResource.generate(generated, 5);
    
    const HydroResource = new Resource('Hydro', 292, 'genHydrof_var', 'genHydrom_var', 6.4, 'genHydroCutoff_var', 'genHydroYear_var');
    HydroResource.generate(generated, 6);

    const NukeResource = new Resource('Nuke', 807, 'genNukef_var', 'genNukem_var', 6.4, 'genNukeCutoff_var', 'genNukeYear_var');
    NukeResource.generate(generated, 7);

    const SolarResource = new Resource('Solar', 67, 'genSolarf_var', 'genSolarm_var', 6.4, 'genSolarCutoff_var', 'genSolarYear_var');
    SolarResource.generate(generated, 8);

    const WindResource = new Resource('Wind', 275, 'genWindf_var', 'genWindm_var', 6.4, 'genWindCutoff_var', 'genWindYear_var');
    WindResource.generate(generated, 9);

    const OtherResource = new Resource('Other', 0, 'genOtherf_var', 'genOtherm_var', 6.4, 'genOtherCutoff_var', 'genOtherYear_var');
    OtherResource.generate(generated, 10);

    //Doing some data summations and quick maths

    for (let i = 0; i<33; i++){
	let genSubTotal = 0;
	for(let j = 1; j<11; j++){
	    genSubTotal = genSubTotal + generated[j][i];
	}
	generated[11][i] = genSubTotal;
    }
    
    let genProp = new Array(11);
    for (let i = 0; i < 11; i++){
	genProp[i] = new Array(33); 
    }

    for (let i = 0; i < 33; i++){
	genProp[0][i] = 2018+i;
    }

    for (let i = 1; i<11; i++){
	for (let j = 0; j<33; j++){
	    let genYearSum = 0;
	    for (let k = 1; k<11; k++){
		genYearSum = generated[k][j]; 
	    }
	    genProp[i][j] = generated[i][j] / genYearSum;
	}
    }

    return generated;
}
