let timedEvent;
let bg;
let shadow;
let paul = {};
let lexi = {};

export function introPreload(sceneThis) {
    sceneThis.load.image("room", "assets/png/room.png");
    sceneThis.load.image("shadow", "assets/png/shadow.png");
    sceneThis.load.image("paul", "assets/png/paul.png");

    sceneThis.load.image("lexi", "assets/png/lexi-0.png");
};

export function introCreate(sceneThis) {
    bg = sceneThis.add.image(0, 0, "room");
    bg.setOrigin(0, 0);

    shadow = sceneThis.add.image(0, 0, "shadow");
    shadow.setOrigin(0, 0);

    paul = sceneThis.add.image(0, 0, "paul");
    paul.setOrigin(0, 0);

    lexi = sceneThis.add.image(-500, 0, "lexi");
    lexi.setOrigin(0, 0);
};

export function introUpdate(sceneThis) {
    moveRight(sceneThis)
};

function moveRight(sceneThis) {
    timedEvent = sceneThis.time.delayedCall(800, function() {
        paul.x += 50;
        lexi.x += 50;
        
        if(paul.x > 570) paul.x = 570; 
        if(lexi.x > 60) lexi.x = 60; 
    });
};