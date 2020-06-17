import generation from './generators.js';
import industry from './industry.js';
import rescomm from './rescomm.js';
import transportation from './transport.js';
import createCharts from './charts.js';
import UIQOL from './UIQOL.js';
import co2 from './co2.js';

function init() {
    window.fullInitialization = fullInitialization;
    window.industry = industry;
    window.rescomm = rescomm;
    window.transportation = transportation;

    fullInitialization();
}

init();

function fullInitialization() {
    const generated = generation();

    const ind = industry();

    const rcomm = rescomm();

    const trans = transportation();

    const CO2 = co2(generated, rcomm, ind, trans);
    let genCO2=CO2[0];
    let resCO2=CO2[1];
    let indCO2=CO2[2];
    let transCO2=CO2[3];
    let allCO2=CO2[4];
    let cumuCO2 = CO2[5];
    /* genCO2();
     * indCO2();
     * resCO2();
     * transCO2(); */
    createCharts(generated, rcomm, ind, trans, genCO2, resCO2, indCO2, transCO2, allCO2, cumuCO2);
    UIQOL();


}
