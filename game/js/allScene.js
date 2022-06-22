let bg = "room";
let scale = "exp0";
let scaleObj;
let currLexi = "0", nextLexi = "";
let stuff0 = "Dress", stuff1 = "Blouse", stuff = [];
let Lexi;
let Paul;
let playNow;
let paulText;
let creatThis;
let alpha = 2;

let allScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "allScene" });
    },
    preload: function() {
    },
    create: function() {
        creatThis = this;
        if(stuff0 !== "Hawaii") {
            startGame();
        } else {
            endGame();
        }
    },
    update: function() {
        animationAlpha();
    }, 
});

function interior(sceneThis, bg, scale) {
    sceneThis.add.image(0, 0, `${bg}`).setOrigin(0, 0);
    scaleObj = sceneThis.add.image(40, 30, `${scale}`).setOrigin(0, 0);
};

function clothingSequence() {
    let a = nextLexi.length;
    let b = nextLexi.slice(a - 2, a);

    if(nextLexi === "Lblouse" || nextLexi === "Ldress") {
        scale = "exp1";
        stuff0 = "BrownBag";
        stuff1 = "BlueBag";
    } else if(nextLexi === "Ldressbrownbag" || nextLexi === "Ldressbluebag") {
        scale = "exp2";
        stuff0 = "Glasses";
        stuff1 = "Choker";
    } else if( nextLexi === "Lblousebrownbag" || nextLexi === "Lblousebluebag") {
        scale = "exp2";
        stuff0 = "Glasses";
        stuff1 = "Necklace";
    } else if(b === "es" || b === "er" || b === "ce") {
        scale = "exp3";
        stuff0 = "Hawaii";
        stuff1 = "Sea";
    }
};

function changingLexiСlothes(sceneThis, tapElem) {
    if(tapElem.texture.key.toLowerCase() === "dress" || tapElem.texture.key.toLowerCase() === "blouse") {
        nextLexi += "L" + tapElem.texture.key.toLowerCase();
    } else {
        nextLexi += tapElem.texture.key.toLowerCase();
    }
    clothingSequence();
    Lexi.destroy();
    stuff.forEach(e => e.destroy());
    for(let i = 2; i > -2; i--) {
        stuff.pop();
    };
    currLexi = nextLexi;
    Lexi = sceneThis.add.image(120, 35, `${currLexi}`).setOrigin(0, 0);
    stuff.push(sceneThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), sceneThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0));
};

function startGame() {
    interior(creatThis, bg, scale);
    Lexi = creatThis.add.image(120, 35, `${currLexi}`).setOrigin(0, 0);
    stuff.push(creatThis.add.image(40, 560, `${stuff0}`).setOrigin(0, 0), creatThis.add.image(310, 560, `${stuff1}`).setOrigin(0, 0));
    stuff.forEach(e => {
        e.setOrigin(0, 0).setInteractive();
        e.on("pointerdown", function() {
            alpha = 0;
            changingLexiСlothes(creatThis, this);
            creatThis.create();
        }); 
    })
};

function endGame() {
    scaleObj = creatThis.add.image(40, 30, `${scale}`).setOrigin(0, 0);
    stuff.forEach(e => {
        e.setOrigin(0, 0).setInteractive();
        e.on("pointerdown", function() {
            alpha = 0;
            bg = this.texture.key.toLowerCase();
            stuff.forEach(e => e.destroy());
            interior(creatThis, bg, scale);
            scaleObj.destroy();
            Paul = creatThis.add.image(100, 0, "paulEnd").setOrigin(0, 0);
            Lexi = creatThis.add.image(10, 55, `${currLexi}`).setOrigin(0, 0);
            paulText = creatThis.add.image(70, 360, "paulText").setOrigin(0, 0);
            creatThis.time.addEvent({
                delay: 1500,
                callback: () => {
                    paulText.destroy();
                    playNow = creatThis.add.image(120, 800, "playNow").setOrigin(0, 0);
                    playNow.setInteractive();
                    playNow.on("pointerdown", function() {
                        location.reload();
                    });
                },
            })
        });
    })
};

// function hint() {
//     creatThis.time.addEvent({
//         delay: 2000,
//         callback: () => {
//             console.log(scaleObj)
//         },
//     })
// };

function animationAlpha() {
    Lexi.setAlpha(alpha);
    stuff.forEach(e => e.setAlpha(alpha));
    scaleObj.setAlpha(alpha);
    if(Paul) Paul.setAlpha(alpha);
    if(playNow) playNow.setAlpha(alpha);
    if(alpha < 2) {
        alpha += 0.1;
    }
};