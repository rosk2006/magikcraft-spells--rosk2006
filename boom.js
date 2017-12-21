const magik = magikcraft.io;
 
function boom() {
    var target = magik.aspecto(100);
    var x = target.getX();
    var y = target.getY();
    var z = target.getZ();
    magik.getSender().getWorld().createExplosion(x, y, z, 1, true, true);
}