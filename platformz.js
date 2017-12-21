const magik = magikcraft.io;

const platforms = magik.global('sitapati.platforms');
const layers = [];
const say = magik.dixit;

function platformz(levels = 5, radius = 15, space = 4) {
    function run(cmd) {
        const sender = magik.getSender();
        magik.getPlugin().getServer().dispatchCommand(sender, cmd);
    }

    function addY(loc, y) {
        const newLoc = loc.clone();
        newLoc.setY(newLoc.getY + y);
        return newLoc;
    }


    if (!platforms.initialised) {
        magik.dixit("Initialising...");
        platforms.initial_position = magik.hic().clone();
        layers[0] = platforms.initial_position;
        layers[1] = addY(layers[0], 1);
        for (let i = 2; i < levels + 2; i++) {
            layers[i] = addY(layers[i-1], space);
            say(layers[i]);
        }
        layer('bedrock', layers[0])
        layer('lava', layers[1]);
        platforms.initialised = true;
    } else {
        magik.dixit("Already Initialised...");
        magik.ianuae(layers[0]);
    }

    for (let i = 2; i < levels + 2; i++) {
        layer('glass', layers[i])
    }

    function layer (material, location) {
        magik.ianuae(location);
        const cmd = `/cyl ${material} ${radius} 1`
        run (cmd);
        magik.dixit(cmd);
    }
}