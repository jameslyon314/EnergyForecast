import { Resource } from './utils/index.js ';

export default function industry() {
    let industry = new Array(12);
    for (let i = 0; i < 12; i++){
	industry[i] = new Array(33); 
    }

    for (let i = 0; i < 33; i++){
	industry[0][i] = 2018+i;
    }

    const CoalResource = new Resource('Coal', 176, 'indCoalf_var', 'indCoalm_var', 6.4, 'indCoalCutoff_var', 'indCoalYear_var');
    CoalResource.generate(industry, 1);

    const GasResource = new Resource('Gas', 1494, 'indGasf_var', 'indGasm_var', 6.4, 'indGasCutoff_var', 'indGasYear_var');
    GasResource.generate(industry, 2);

    const PetResource = new Resource('Pet', 1272, 'indPetf_var', 'indPetm_var', 6.4, 'indPetCutoff_var', 'indPetYear_var');
    PetResource.generate(industry, 3);

    const BioResource = new Resource('Bio', 366, 'indBiof_var', 'indBiom_var', 6.4, 'indBioCutoff_var', 'indBioYear_var');
    BioResource.generate(industry, 4);

    const GeoResource = new Resource('Geo', 0, 'indGeof_var', 'indGeom_var', 6.4, 'indGeoCutoff_var', 'indGeoYear_var');
    GeoResource.generate(industry, 5);

    const HydroResource = new Resource('Hydro', 1.45, 'indHydrof_var', 'indHydrom_var', 6.4, 'indHydroCutoff_var', 'indHydroYear_var');
    HydroResource.generate(industry, 6);

    const NukeResource = new Resource('Nuke', 0, 'indNukef_var', 'indNukem_var', 6.4, 'indNukeCutoff_var', 'indNukeYear_var');
    NukeResource.generate(industry, 7);

    const SolarResource = new Resource('Solar', 4, 'indSolarf_var', 'indSolarm_var', 6.4, 'indSolarCutoff_var', 'indSolarYear_var');
    SolarResource.generate(industry, 8);

    const WindResource = new Resource('Wind', 0, 'indWindf_var', 'indWindm_var', 6.4, 'indWindCutoff_var', 'indWindYear_var');
    WindResource.generate(industry, 9);

    const GridResource = new Resource('Grid', 476, 'indGridf_var', 'indGridm_var', 6.4, 'indGridCutoff_var', 'indGridYear_var');
    GridResource.generate(industry, 10);

    const OtherResource = new Resource('Other', 0, 'indOtherf_var', 'indOtherm_var', 6.4, 'indOtherCutoff_var', 'indOtherYear_var');
    OtherResource.generate(industry, 11);

    const sourceInd = parseInt(document.getElementById("sourceInd_var").value);
    const yearInd = parseInt(document.getElementById("yearInd_var").value - 2018);
    const indValue = industry[sourceInd][yearInd];
    document.getElementById("outputInd").innerHTML = "Energy (GWe): " + indValue;

    return industry;
}
