const magik = magikcraft.io;

function main(){
    const Fireball = magik.type('entity.Fireball');
    const TNT = magik.type("entity.EntityType").PRIMED_TNT;
    const sender = magik.getSender();
    //var arrow = player.getWorld().spawnEntity(sender.location, org.bukkit.entity.EntityType.ZOMBIE);
    
    for (var i = 0; i < 50; i++) {
        const loc = rndBlock(15,15).location;
        const arrow = sender.getWorld().spawnEntity(loc, TNT);
        //arrow.setShooter(sender);
        var v = sender.getEyeLocation().getDirection().multiply(2);
        v.setX(0);
        v.setY(0);
        v.setZ(0);
        //magik.dixit(loc);
        arrow.setVelocity(v);
        //arrow.setMetadata("ArrowType", new MyMetadata(this, "stick"));    
    }
        
}


function main() {
    const u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    const v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


function main(count) {
    let ret = 0;
    for (let i = 0; i < count; i++) {
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
    return magik.getSender().getLocation().getBlock().getRelative(rnorm(0, radius/5), rnorm(0, radius/5), rnorm(0, radius/5));
}
