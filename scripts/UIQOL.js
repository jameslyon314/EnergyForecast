export default function UIQOL(){

    const allValueRanges = document.querySelectorAll(".valuerangewrap");
    const allMethodRanges = document.querySelectorAll(".methodrangewrap");
    const allYearRanges = document.querySelectorAll(".yearrangewrap");

    allValueRanges.forEach(wrap => {
        const range = wrap.querySelector(".slider");
        const bubble = wrap.querySelector(".bubble");
        range.addEventListener("input", () => {
            setBubble(range, bubble);
        });
        range.addEventListener("mousedown", () => {
            bubbleVision(bubble);
        });
        range.addEventListener("mouseup", () => {
            bubbleInvision(bubble);
        });
        setBubble(range, bubble);

    });

    allMethodRanges.forEach(wrap => {
        const range = wrap.querySelector(".slider");
        const bubble = wrap.querySelector(".bubble");
        range.addEventListener("input", () => {
            setRangeBubble(range, bubble);
        });
        range.addEventListener("mousedown", () => {
            bubbleVision(bubble);
        });
        range.addEventListener("mouseup", () => {
            bubbleInvision(bubble);
        });
        setRangeBubble(range, bubble);

    });

    allYearRanges.forEach(wrap => {
        const range = wrap.querySelector(".yearslider");
        const bubble = wrap.querySelector(".bubble");
        range.addEventListener("input", () => {
            setYearBubble(range, bubble);
        });
        range.addEventListener("mousedown", () => {
            bubbleVision(bubble);
        });
        range.addEventListener("mouseup", () => {
            bubbleInvision(bubble);
        });
        setYearBubble(range, bubble);

    });
}

function bubbleVision(bubble){
    bubble.style.visibility = 'visible';
}
function bubbleInvision(bubble){
    bubble.style.visibility = 'hidden';
}

function setRangeBubble(range, bubble){

    const val = range.value;
    const min = range.min;
    const max = range.max;
    var methodText;
    switch(val){
        case '1': 
            methodText = "Very Fast";
            break;
        case '2': 
            methodText = "Moderately Fast";
            break;
        case '3': 
            methodText = "Steadily";
            break;
        case '4': 
            methodText = "Moderately Slow";
            break;
        case '5': 
            methodText = "Very Slow";
            break;
        case '6': 
            methodText = "Unchanged";
            break;
        default:
    }
    const newVal = Number((((val - min) * 100) / (max - min))*0.9);
    bubble.innerHTML = methodText;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.35}px))`;    
}

function setBubble(range, bubble) {

    const val = range.value;
    const min = range.min;
    const max = range.max;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.35}px))`;                
}

function setYearBubble(range, bubble) {

    const val = range.value;
    const min = range.min;
    const max = range.max;
    const newVal = Number((((val - min) * 100) / (max - min))*0.40 + 35); //needs to be from 35-75, not 0-100
    bubble.innerHTML = val;
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.2}px))`;                
}
