const magik = magikcraft.io;
const server = magik.getPlugin().getServer();
const player = magik.getSender();
const world = player.getWorld();
 
var cursor;
var direction;
function maze() {
    var mazeData="XOOXOOOXXOOOOOOXOOOX\nXOXXOXOOXOXXXXOOXXOX\nOOOXOXXOOOOOOXXOXXOX\nOXOXOXXXXXXXOXOOXXOX\nOXOOOXXOOOOXOXOXOOOO\nXOOXXXXOXXOOOXOXXXXO\nXOXOOOXOXOXXXXOXOOOO\nXOXOXOOOXOOXXXOXOXXO\nOOXOXXXXXXOOOOOOOXXO\nOXXOOXXXOOOXXXXXXXOO\nOXOXOXOOOXXOOOOOXOOX\nOOOXOXOXXXXSXXXOOXXX\nXOXOOXOOOOOXXOOXOOOO\nXOXOXXXXXXOOOOXEXXXO\nOOXOOOXOOOXXXOXOXXXO\nOXXXXOOXXOOOXOOOXOOO\nOOOXOXOXXXXOOXOXOOXX\nXXOXOXOXOOOXOOOXOXOO\nXOOOOXOXOXOXXXXXOOOX\nOOXXXXOOOXOOOOOOOXOO";
    mazeData=mazeData.split("\n")
    initCursor();
    var initCur=new org.bukkit.Location(cursor.getWorld(),cursor.getX(),cursor.getY(),cursor.getZ());
 
    var height=mazeData.length;
    var width=mazeData[0].length;
    for(var i=0;i<width+2;i++){
        drawLine(height+2,true);
        moveLeft();
    }
    cursor=initCur;
    cursor.add(0,1,0);
    initCur=new org.bukkit.Location(cursor.getWorld(),cursor.getX(),cursor.getY(),cursor.getZ());
    //Draw Maze
    moveFw();
    moveLeft();
    mazeData.forEach(function(row){
        row.split("").forEach(function(cell){
            if(cell=="X"){
                placeBlock(2);
            }
            moveLeft();
        });
        for(var i=0;i<width;i++){
            moveRight();
        }
        moveFw();
    });
    //Draw Walls
    cursor=initCur;
    initCur=new org.bukkit.Location(cursor.getWorld(),cursor.getX(),cursor.getY(),cursor.getZ());
    for(i=0;i<height+2;i++){
        placeBlock(2);
        moveFw();
    }
    moveBk();
    for(i=0;i<width+1;i++){
        placeBlock(2);
        moveLeft();
    }
    for(i=0;i<height+1;i++){
        placeBlock(2);
        moveBk();
    }
    for(i=0;i<width+1;i++){
        placeBlock(2);
        moveRight();
    }
};
 
 
function initCursor(){
    cursor=player.getTargetBlock(null,100).getLocation();
    //cursor.add(0,1,0);
    let playerPos=player.getLocation();
 
    //magik.dixit(cursor);
    var xdiff=playerPos.getX()-cursor.getX();
    var ydiff=playerPos.getZ()-cursor.getZ();
    if( Math.abs(xdiff) > Math.abs(ydiff) )
        if(xdiff>0)
            direction="West";
        else
            direction="East";
    else
        if(ydiff>0)
            direction="North";
        else
            direction="South";
}
function moveRight(){
    if(direction=="North")
        cursor.add(1,0,0);
    if(direction=="South")
        cursor.add(-1,0,0);
    if(direction=="East")
        cursor.add(0,0,1);
    if(direction=="West")
        cursor.add(0,0,-1);
}
function moveLeft(){
    if(direction=="North")
        cursor.add(-1,0,0);
    if(direction=="South")
        cursor.add(1,0,0);
    if(direction=="East")
        cursor.add(0,0,-1);
    if(direction=="West")
        cursor.add(0,0,1);
}
function moveFw(){
    if(direction=="North")
        cursor.add(0,0,-1);
    if(direction=="South")
        cursor.add(0,0,1);
    if(direction=="East")
        cursor.add(1,0,0);
    if(direction=="West")
        cursor.add(-1,0,0);
}
function moveBk(){
    if(direction=="North")
        cursor.add(0,0,1);
    if(direction=="South")
        cursor.add(0,0,-1);
    if(direction=="East")
        cursor.add(-1,0,0);
    if(direction=="West")
        cursor.add(1,0,0);
}
function placeBlock(height){
    if(!height){
        var bl1=world.getBlockAt(cursor);
        bl1.setType(org.bukkit.Material.GOLD_BLOCK);
    }
    else{
        for(var i=0;i<height;i++){
            var bl1=world.getBlockAt(cursor);
            bl1.setType(org.bukkit.Material.GOLD_BLOCK);
            cursor.add(0,1,0);
        }
        for(var i=0;i<height;i++){
            cursor.add(0,-1,0);
        }
    }
}
function drawLine(count,rtn){
    magik.dixit(direction);
    if(rtn)//return cursor to start position
        var initCur=new org.bukkit.Location(cursor.getWorld(),cursor.getX(),cursor.getY(),cursor.getZ());
        for(var i=0;i<count;i++){
            placeBlock(1);
            moveFw();
        }
    if(rtn)
        cursor=initCur;
}