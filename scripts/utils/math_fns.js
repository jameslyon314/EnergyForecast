function expfast(initial, goal, i, cutoff, cutoffYear, tau) {
    if (!cutoff) {
        return (initial - goal)*Math.exp(-1*(i)/tau) + goal;
    }

    const newTau = (cutoffYear - 2018)/5;
    const j = cutoffYear - 2018;
    return i < j ?
        (initial-goal)*Math.exp(-1*(i)/newTau) + goal :
    goal;
}

function quadfast(initial, goal, i, cutoff, cutoffYear) {
    if (!cutoff) {
        return ((initial - goal)/(2018 - 2050)**2)*(2018+i-2050)**2 + goal;
    }

    const j = cutoffYear - 2018;
    return i < j ?
        ((initial - goal)/(2018 - cutoffYear)**2)*(2018+i-cutoffYear)**2 + goal :
    goal;	
}

function linear(initial, goal, i, cutoff, cutoffYear) {
    if (!cutoff) {
        return initial - ((initial - goal)/(2050-2018))*(i);
    }

    const j = cutoffYear - 2018;
    return i < j ?
        initial - ((initial - goal)/(cutoffYear-2018))*(i) :
    goal;
}

function quadslow(initial, goal, i, cutoff, cutoffYear) {
    if (!cutoff) {
        return (-(initial - goal)/(2018 - 2050)**2)*(2018+i-2018)**2 + initial;
    }

    const j = cutoffYear - 2018;
    return i < j ?
        (-(initial - goal)/(2018 - cutoffYear)**2)*(2018+i-2018)**2 + initial :
    goal;
}

function expslow(initial, goal, i, cutoff, cutoffYear, tau){
    if (!cutoff) {
        return -(initial - goal)*Math.exp((2018+i-2050)/tau) + initial;
    } 

    const newTau = (cutoffYear - 2018)/5;
    const j = cutoffYear - 2018;
    return i < j ?
        -(initial - goal)*Math.exp((2018+i-cutoffYear)/newTau) + initial :
    goal;
}

export {
expfast,
    quadfast,
    linear,
    quadslow,
    expslow
};
