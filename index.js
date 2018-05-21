const size = 500;
const loops = 9;

const el = SVG('drawing').size(size, size)
const width = 1;

function draw(duration){
    for(var i = size; i >= width; i -= width){
    polygon(el, i, width)
    .center(size/2,size/2)
    .animate(duration).loop(loops,true)
    .fill(getColor())
    }
}

function polygon(el, maxEdge, width){
    const o = maxEdge;
    const i = maxEdge - width;
    const t = width;
    return el.polygon(
        `0 0,  \
        0 ${o}, \
        ${o} ${o}, \
        ${o} 0, \
        ${i} ${t}, \
        ${i} ${i}, \
        ${t} ${i}, \
        ${t} ${t}, \
        ${i} ${t}, \
        ${o} 0`);
}

function getColor(){
    return '#' + (function co(lor){ return (lor +=
        [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
        && (lor.length == 6) ?  lor : co(lor); })('');
}

SVG.on(document, 'DOMContentLoaded', function() {
    draw(1000)
})