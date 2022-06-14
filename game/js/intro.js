import {paul, lexi, timedEvent} from "./variables.js";
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

    paul.stable = sceneThis.add.image(0, 0, "paul");
    paul.stable.setOrigin(0, 0);
    textP = sceneThis.add.image(300, 480, "textP");

    lexi.lexi0 = sceneThis.add.image(-500, 0, "lexi-0");
    lexi.lexi0.setOrigin(0, 0);
};

export function introUpdate(sceneThis) {
    moveToTheRight(sceneThis);
    text(sceneThis);
};

function moveToTheRight(sceneThis) {
    timedEvent.intro = sceneThis.time.delayedCall(800, function() {
        paul.stable.x += 50;
        lexi.lexi0.x += 50;
        
        if(paul.stable.x > 570) paul.stable.x = 570; 
        if(lexi.lexi0.x > 60) lexi.lexi0.x = 60; 
    });
};

function text(sceneThis) {
    if(paul.stable.x > 0) textP.destroy();
    if(lexi.lexi0.x == 60) textL = sceneThis.add.image(300, 480, "textL");
}