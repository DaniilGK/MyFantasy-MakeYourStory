let bg = "room";
let scale = "exp0";
let scaleObj;
let currLexi = "0", nextLexi = "";
let stuff0 = "Dress", stuff1 = "Blouse", stuff = [];
let Lexi;
let creatThis;

let allScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "allScene" });
    },
    preload: function() {
        allGameObj(this);
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
    }, 
});


function allGameObj(sceneThis) {
    //bg
    sceneThis.load.image("room", "assets/png/bg/room.png");
    sceneThis.load.image("hawaii", "assets/png/bg/hawaii.png");
    sceneThis.load.image("sea", "assets/png/bg/sea.png");
    //scale
    sceneThis.load.image("exp0", "assets/png/choose/experience-0.png");
    sceneThis.load.image("exp1", "assets/png/choose/experience-1.png");
    sceneThis.load.image("exp2", "assets/png/choose/experience-2.png");
    sceneThis.load.image("exp3", "assets/png/choose/experience-3.png");
    sceneThis.load.image("nameplateBag", "assets/png/choose/bag.png");
    sceneThis.load.image("nameplateDress", "assets/png/choose/dress.png");
    sceneThis.load.image("nameplateAccessory", "assets/png/choose/accessory.png");
    //stuff
    sceneThis.load.image("Blouse", "assets/png/stuff/blouse.png");
    sceneThis.load.image("BlueBag", "assets/png/stuff/blueBag.png");
    sceneThis.load.image("BrownBag", "assets/png/stuff/brownBag.png");
    sceneThis.load.image("Choker", "assets/png/stuff/choker.png");
    sceneThis.load.image("Dress", "assets/png/stuff/dress.png");
    sceneThis.load.image("Glasses", "assets/png/stuff/glasses.png");
    sceneThis.load.image("Necklace", "assets/png/stuff/necklace.png");
    sceneThis.load.image("Hawaii", "assets/png/stuff/hawaii.png");
    sceneThis.load.image("Sea", "assets/png/stuff/sea.png");
    //lexi
    sceneThis.load.image("0", "assets/png/lexi/lexi-1.png");
    sceneThis.load.image("Ldress", "assets/png/lexi/D.png");
    sceneThis.load.image("Ldressbluebag", "assets/png/lexi/D-BL-B.png");
    sceneThis.load.image("Ldressbluebagglasses", "assets/png/lexi/D-BL-B-G.png");
    sceneThis.load.image("Ldressbluebagchoker", "assets/png/lexi/D-BL-B-CH.png");
    sceneThis.load.image("Ldressbrownbag", "assets/png/lexi/D-B-B.png");
    sceneThis.load.image("Ldressbrownbagglasses", "assets/png/lexi/D-B-B-G.png");
    sceneThis.load.image("Ldressbrownbagchoker", "assets/png/lexi/D-B-B-CH.png");
    sceneThis.load.image("Lblouse", "assets/png/lexi/B.png");
    sceneThis.load.image("Lblousebluebag", "assets/png/lexi/B-BL-B.png");
    sceneThis.load.image("Lblousebluebagnecklace", "assets/png/lexi/B-BL-B-N.png");
    sceneThis.load.image("Lblousebluebagglasses", "assets/png/lexi/B-BL-B-G.png");
    sceneThis.load.image("Lblousebrownbag", "assets/png/lexi/B-B-B.png");
    sceneThis.load.image("Lblousebrownbagnecklace", "assets/png/lexi/B-B-B-N.png");
    sceneThis.load.image("Lblousebrownbagglasses", "assets/png/lexi/B-B-B-G.png");
    //paul
    sceneThis.load.image("paulEnd", "assets/png/paulEnd.png");
};

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
            changingLexiСlothes(creatThis, this);
            creatThis.create();
        }); 
    })
}

function endGame() {
    stuff.forEach(e => {
        e.setOrigin(0, 0).setInteractive();
        e.on("pointerdown", function() {
            bg = this.texture.key.toLowerCase();
            stuff.forEach(e => e.destroy());
            interior(creatThis, bg, scale);
            scaleObj.destroy();
            creatThis.add.image(100, 0, "paulEnd").setOrigin(0, 0);
            Lexi = creatThis.add.image(10, 35, `${currLexi}`).setOrigin(0, 0);
        });
        e.on("pointerover", function() {    
            e.setTint(0xC0C0C0);
        });
        
        e.on("pointerout", function() {
            e.setTint();
        });
    })
}