const magik = magikcraft.io;
 
function main(num = 1) {
    const playerLoc = magik.getSender().getLocation();
    playerLoc.yaw += 10;
    magik.ianuae(playerLoc);
    magik.infierno();
    if (num > 0) {
        magik.setTimeout(function () {
            fire(num - 1);
        }, 100);
    }
