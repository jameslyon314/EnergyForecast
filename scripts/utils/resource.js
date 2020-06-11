import * as MathFns from './math_fns.js';

export default class Resource {
    constructor(name, i, f_id, m_id, tau, cutoff_id, year_id) {
	this.name = Symbol(name);
	this.i = i;
	this.f = parseInt(document.getElementById(f_id).value);
	this.m = parseInt(document.getElementById(m_id).value);
	this.tau = tau;
	this.cutoff = document.getElementById(cutoff_id).checked;
	this.year = parseInt(document.getElementById(year_id).value);
    }

    generate(generation, index) {
	generation[index].fill(0);
	generation[index][32] = this.f;
	
	switch(this.m) {
	    case 1:
		generation[index] = generation[index].map((_, iter) => MathFns.expfast(this.i, this.f, iter, this.cutoff, this.year, this.tau));
		break;
	    case 2:
		generation[index] = generation[index].map((_, iter) => MathFns.quadfast(this.i, this.f, iter, this.cutoff, this.year, this.tau));
		break;
	    case 3:
		generation[index] = generation[index].map((_, iter) => MathFns.linear(this.i, this.f, iter, this.cutoff, this.year, this.tau));
		break;
	    case 4:
		generation[index] = generation[index].map((_, iter) => MathFns.quadslow(this.i, this.f, iter, this.cutoff, this.year, this.tau));
		break;
	    case 5:
		generation[index] = generation[index].map((_, iter) => MathFns.expslow(this.i, this.f, iter, this.cutoff, this.year, this.tau));
		break;
	    case 6:
		generation[index].fill(this.i);
		break;
	    default:
	}

	generation[index][0] = this.i;
    }
}
