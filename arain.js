var magik = magikcraft.io;

// anvil rain
//
//TODO: is runif better than rnom?

function main(radius, typ){
    radius = parseInt(radius) || 20;
    typ = typ || "ANVIL";
    
    for (var i = 0; i < 200; i++) {
        rndAnvil(radius, typ);
    }
}
function main(radius,typ) {
    var height = radius;
    rndBlock(radius, height).setType(org.bukkit.Material[typ])
}
// Standard Normal variate using Box-Muller transform.
//http://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
function main() {
    var u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


function main(count) {
    var ret = 0;
    for (var i = 0; i < count; i++) {
        ret += Math.random();
    }
    return ret/count;
}
function main(mean, sd) {
    return randn_bm() * sd + mean;
}
function main(from, to) {
    return scale(Math.random(), from, to);
}
function main(r, from, to) {
    return Math.floor(r*(to - from)+from)
}
function main(radius, height) {
    return magik.getSender().location.getBlock().getRelative(rnorm(0, radius/5), height+runif(0, radius*3), rnorm(0, radius/5));
}
