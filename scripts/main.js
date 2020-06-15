import generation from './generators.js';
import industry from './industry.js';
import rescomm from './rescomm.js';
import transportation from './transport.js';
import createCharts from './charts.js';

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
    /* genCO2();
     * indCO2();
     * resCO2();
     * transCO2(); */
    createCharts(generated, rcomm, ind, trans);
    
}
