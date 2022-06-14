let timedEvent;
let lexi = {};
let paul = {};
let textP;
let textL;

export function introPreload(sceneThis) {
    sceneThis.load.image("room", "assets/png/room.png");
    sceneThis.load.image("shadow", "assets/png/shadow.png");
    sceneThis.load.image("paul", "assets/png/paul.png");
    sceneThis.load.image("textP", "assets/png/paulText-0.png");
    sceneThis.load.image("lexi-0", "assets/png/lexi-0.png");
    sceneThis.load.image("textL", "assets/png/lexiText.png");
};

export function introCreate(sceneThis) {
    let bg = sceneThis.add.image(0, 0, "room");
    bg.setOrigin(0, 0);

    let shadow = sceneThis.add.image(0, 0, "shadow");
    shadow.setOrigin(0, 0);

    paul = sceneThis.add.image(0, 0, "paul");
    paul.setOrigin(0, 0);
    textP = sceneThis.add.image(300, 480, "textP");
    textP.setScale(1);

    lexi = sceneThis.add.image(-500, 0, "lexi-0");
    lexi.setOrigin(0, 0);
};

export function introUpdate(sceneThis) {
    moveToTheRight(sceneThis);
    text(sceneThis);
};

function moveToTheRight(sceneThis) {
    timedEvent = sceneThis.time.delayedCall(800, function() {
        paul.x += 50;
        lexi.x += 50;
        
        if(paul.x > 570) paul.x = 570; 
        if(lexi.x > 60) lexi.x = 60; 
    });
};

function text(sceneThis) {
    if(paul.x > 0) textP.destroy();
    if(lexi.x == 60) {
        textL = sceneThis.add.image(300, 480, "textL");
        textL.setScale(.9);
    };
}