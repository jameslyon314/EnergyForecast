import { Resource } from './utils/index.js ';

export default function rescomm() {
    let rescomm = new Array(11);
    for (let i = 0; i < 11; i++){
        rescomm[i] = new Array(33); 
    }

    for (let i = 0; i < 33; i++){
        rescomm[0][i] = 2018+i;
    }

    const CoalResource = new Resource('Coal', 4, 'resCoalf_var', 'resCoalm_var', 6.4, 'resCoalCutoff_var', 'resCoalYear_var');
    CoalResource.generate(rescomm, 1);

    const GasResource = new Resource('Gas', 1668, 'resGasf_var', 'resGasm_var', 6.4, 'resGasCutoff_var', 'resGasYear_var');
    GasResource.generate(rescomm, 2);

    const PetResource = new Resource('Pet', 345, 'resPetf_var', 'resPetm_var', 6.4, 'resPetCutoff_var', 'resPetYear_var');
    PetResource.generate(rescomm, 3);

    const BioResource = new Resource('Bio', 128, 'resBiof_var', 'resBiom_var', 6.4, 'resBioCutoff_var', 'resBioYear_var');
    BioResource.generate(rescomm, 4);

    const GeoResource = new Resource('Geo', 11, 'resGeof_var', 'resGeom_var', 6.4, 'resGeoCutoff_var', 'resGeoYear_var');
    GeoResource.generate(rescomm, 5);

    const NukeResource = new Resource('Nuke', 0, 'resNukef_var', 'resNukem_var', 6.4, 'resNukeCutoff_var', 'resNukeYear_var');
    NukeResource.generate(rescomm, 6);

    const SolarResource = new Resource('Solar', 42, 'resSolarf_var', 'resSolarm_var', 6.4, 'resSolarCutoff_var', 'resSolarYear_var');
    SolarResource.generate(rescomm, 7);

    const WindResource = new Resource('Wind', 0, 'resWindf_var', 'resWindm_var', 6.4, 'resWindCutoff_var', 'resWindYear_var');
    WindResource.generate(rescomm, 8);

    const GridResource = new Resource('Grid', 1847, 'resGridf_var', 'resGridm_var', 6.4, 'resGridCutoff_var', 'resGridYear_var');
    GridResource.generate(rescomm, 9);

    const OtherResource = new Resource('Other', 0, 'resOtherf_var', 'resOtherm_var', 6.4, 'resOtherCutoff_var', 'resOtherYear_var');
    OtherResource.generate(rescomm, 10);


    return rescomm;

}
