const magik = magikcraft.io;

function GM(mode="c") {
const me = magik.getSender();
const GameMode = Java.type("org.bukkit.GameMode");
const modes = {
    c: GameMode.CREATIVE,
    s: GameMode.SURVIVAL,
    x: GameMode.SPECTATOR,
    a: GameMode.ADVENTURE,
    h: GameMode.HARDCORE
}
 me.setGameMode(modes[mode])

}
