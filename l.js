const magik = magikcraft.io;

function l() {
    const Material = magik.type('Material');
    const looking = magik.aspecto();
    const world = magik.getSender().getWorld();
    function p5() {
        const x0 = looking.getX();
        const y0 = looking.getY();
        const z0 = looking.getZ();

        function blast(X,Z, Y) {
            const location = looking;
            location.setX(X);
            location.setZ(Z);

            world.strikeLightning(location);
            let b = world.getBlockAt(location);
            while(b.getType().equals(Material.AIR)){
                Y--;
                location.setY(Y);
                b = location.getBlock();
            }
            world.getBlockAt(location).setType(Material.OBSIDIAN);
        }

        const r = 8;

        const items = 40;
        for(let i = 0; i < items; i++) {
            const x = x0 + r * Math.cos(2 * Math.PI * i / items);
            const z = z0 + r * Math.sin(2 * Math.PI * i / items);  
            blast(x,z,y0);
        }
    }
    const x = looking.getX();
    const y = looking.getY();
    const z = looking.getZ();

    function blast(X, Z) {
        const location = looking;
        location.setX(X + Math.random() * 10 - 5);
        location.setZ(Z + Math.random() * 10 - 5);
        world.strikeLightning(location);
    }

   magik.doNTimes(() => {
       magik.doNTimes(() => {
           magik.doNTimes(() => {blast(x,z)}, 15)}, 
        15)}, 
    15, p5);
}