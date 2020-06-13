import { Resource } from './utils/index.js ';

export default function transportation() {
    let transportation = new Array(8);
    for (let i = 0; i < 8; i++){
        transportation[i] = new Array(33); 
    }

    for (let i = 0; i < 33; i++){
        transportation[0][i] = 2018+i;
    }

    const GasResource = new Resource('Gas', 54, 'transGasf_var', 'transGasm_var', 6.4, 'transGasCutoff_var', 'transGasYear_var');
    GasResource.generate(transportation, 1);

    const PetResource = new Resource('Pet', 1600, 'transPetf_var', 'transPetm_var', 6.4, 'transPetCutoff_var', 'transPetYear_var');
    PetResource.generate(transportation, 2);

    const BioResource = new Resource('Bio', 88, 'transBiof_var', 'transBiom_var', 6.4, 'transBioCutoff_var', 'transBioYear_var');
    BioResource.generate(transportation, 3);

    const NukeResource = new Resource('Nuke', 0, 'transNukef_var', 'transNukem_var', 6.4, 'transNukeCutoff_var', 'transNukeYear_var');
    NukeResource.generate(transportation, 4);

    const SolarResource = new Resource('Solar', 0, 'transSolarf_var', 'transSolarm_var', 6.4, 'transSolarCutoff_var', 'transSolarYear_var');
    SolarResource.generate(transportation, 5);

    const GridResource = new Resource('Grid', 2, 'transGridf_var', 'transGridm_var', 6.4, 'transGridCutoff_var', 'transGridYear_var');
    GridResource.generate(transportation, 6);

    const OtherResource = new Resource('Other', 0, 'transOtherf_var', 'transOtherm_var', 6.4, 'transOtherCutoff_var', 'transOtherYear_var');
    OtherResource.generate(transportation, 7);

    return transportation;
    
}
