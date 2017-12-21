const magik = magikcraft.io;
function where(){
    const there = magik.exmemento(); // get your memory
    if (typeof there === "undefined") { // if it's empty
        const here = magik.hic(); // find out where we are now
        magik.memento(here); // put it in your memory
        there = magik.exmemento(); // get it back out
    }
    magik.dixit(there); // say what was in your memory
}