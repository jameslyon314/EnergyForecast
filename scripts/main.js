import runGeneration from './generators.js';
import industry from './industry.js';
import rescomm from './rescomm.js';
import transportation  from './transport.js';

function init() {
    window.fullInitialization = fullInitialization;
    fullInitialization();
}
init();

function fullInitialization() {
    const generated = runGeneration();
    console.log('generated:', generated);
    
    const ind = industry();
    console.log('industry:', ind);

    const rcomm = rescomm();
    console.log('rescomm:', rcomm);
    
    const trans = transportation();
    console.log('transportation:', trans);
     /* genCO2();
     * indCO2();
     * resCO2();
     * transCO2(); */
     // createCharts();
}

