var magik = magikcraft.io;

function spawnz(typ='ZOMBIE', n = 50, times = 5, baseloc){
    const EntityType = magik.type("entity.EntityType");
    const sender = magik.getSender();
    if (typ == '.') {
        typ = undefined;
    }
    if (!baseloc) {
        baseloc = create_spawn_point(magik.aspecto());
    }

    for (let i = 0; i < n; i++) {
        const loc = rndBlock(baseloc.getBlock().getRelative(0, 0, 0).location, 4,0).location;
        const typ2 = typ || rnd_monster_type();
        const mob = loc.getWorld().spawnEntity(loc, EntityType[typ2]); 
        const v = sender.getEyeLocation().getDirection().multiply(2);
        
        const dir = Math.PI*2*Math.random();
        const scale = 0.45;
        v.setX(scale*Math.sin(dir));
        v.setY(scale*2);
        v.setZ(scale*Math.cos(dir));
        mob.setVelocity(v);
    }
    
    times -= 1;
    if (times > 0) {
        const task = magik.setTimeout(
            () => {
                spawnz(typ, n, times, baseloc);
            }, 
            200
        );
    }
        
}

function create_spawn_point(loc) {
    const block = loc.getBlock();
    const r = 1;
    const depth = 3;
    const Material = magik.type("Material");

    const spawnloc = block.getRelative(0, -depth, 0).getLocation();

    //explicitly clear a space
    for (let y = -depth; y <= 0; y++) {
        var rr = Math.floor(r);  //for changing the shape of the hole.  I liked no slope, in the end
        for (let x = -rr; x <= rr; x++) {
            for (let z = -rr; z <= rr; z++) {
                block.getRelative(x,y,z).setType(Material['AIR']);
            }
        }
    }
    
    //explode that space, for effect and to mess up the shape a little
    //spawnloc.getWorld().createExplosion(spawnloc,3);
    
    return spawnloc;
}


function rnd_monster_type() {
    return 'ZOMBIE'
}

function rnd_from_array(arry) {
    return arry[Math.floor(Math.random()*arry.length)];

}

function randn_bm() {
    const u = 1 - Math.random(); // Subtraction to flip [0, 1) to (0, 1].
    const v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function rnorm_unit(count) {
    let ret = 0;
    for (let i = 0; i < count; i++) {
        ret += Math.random();
    }
    return ret/count;
}
function rnorm(mean, sd) {
    return randn_bm() * sd + mean;
}
function runif(from, to) {
    return scale(Math.random(), from, to);
}
function scale(r, from, to) {
    return Math.floor(r*(to - from)+from)
}
function rndBlock(loc, radius, height) {
    return loc.getBlock().getRelative(rnorm(0, radius/5), runif(0, height), rnorm(0, radius/5));
}

