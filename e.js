var magik = magikcraft.io;

// explode  
function main(n=30, repeats=1, delay=200) {
    const sender = magik.getSender();
    sender.getLocation().getWorld().createExplosion(magik.aspecto(10000000000000000000000000),n);        
    repeats--;
    //magik.dixit(sender.isSneaking() ? "yes" : "no");
    if (sender.isSneaking()) {
        magik.dixit("e done via sneak");
        return;
    }
    if (repeats > 0) {
        var task = magik.setTimeout(
            () => {
                e(n, repeats, delay);
            },
            delay
        );
    } else {
        magik.dixit("e done");
    }
}
