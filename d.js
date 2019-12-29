
var magik = magikcraft.io;
//debug

function main(spell){
    let thing= magik;  //magik.dixit

    
    //thing = keys.map(function(k) {return magik[k].toString();});  //obviously going to be too long
    
    const keys  = getKeys(magik);
    if (isNumeric(spell)) {
        thing = magik[keys[parseInt(spell)]];
    } else if (typeof(spell) == 'string') {
        thing = magik[spell];
        if (typeof(thing) == 'undefined') {
            thing = eval(spell);
            /*if (typeof(thing) == 'object') {
                magik.dixit("nested");
                thing = getKeys(thing);
            }*/
        }
    }  else {
        thing = keys;
    }
    const msg = thing.toString();
    magik.dixit(msg);
    magik.dixit(encodeURI("http://abznak.com/echo?q="+msg)); 
       
}
function main(obj) {
    var keys = [];
    for (var key in obj) {
     // if (obj.hasOwnProperty(key)) {
        keys.push(key);
     // }
    }
    return keys;
}
function main(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
