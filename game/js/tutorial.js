let alphaShadow = 2;
let alphaChoose = 2;
let alphaStuff = 0;
let tutorial = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "tutorial" });
    },
    preload: function() {
        allGameObj(this)
    },
    create: function() {
        this.room = this.add.image(0, 0, "room").setOrigin(0, 0);
        this.shadow = this.add.image(0, 0, "shadow").setOrigin(0, 0);
        this.time.addEvent({
            delay: 300,
            loop: false,
            callback: () => {
                this.lexi1 = this.add.image(120, 35, "lexi1").setOrigin(0, 0);
                this.choose = this.add.image(60, 10, "choose-dress").setOrigin(0, 0);
                this.dress = this.add.image(40, 560, "dress").setOrigin(0, 0);
                this.blouse = this.add.image(310, 560, "blouse").setOrigin(0, 0);
                this.hand = this.add.image(570, 860, "hand").setOrigin(0, 0);
            },
        });
        this.time.addEvent({
            delay: 3300,
            callback: () => {
                this.scene.start("allScene");
            },
        })
    },
    update: function() {
        this.shadow.setAlpha(alphaShadow);
        alphaShadow -= 0.1;
        moveHand(this, 500);
        if(this.dress || this.bloose) {
            this.dress.setAlpha(alphaStuff);
            this.blouse.setAlpha(alphaStuff);
                if(alphaStuff < 2) {
                    alphaStuff += 0.1;
                };
        }
    }
});

function moveHand(a, b) {
    if(a.hand) {
        if(a.hand.y > 620 && a.hand.x > 100) {
            a.hand.y -= 5;
            a.hand.x -= 10;
        } else {
            a.time.addEvent({
                delay: b,
                callback: () => {
                    if(a.hand.x < 380) {
                        a.hand.x += 10;
                    } else {
                        a.time.addEvent({
                            delay: b,
                            callback: () => {
                                a.hand.x += 10;
                                a.choose.setAlpha(alphaChoose);
                                alphaChoose -= 0.1;
                            },
                        })
                    }
                },
            })
        }
    }
};

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
    sceneThis.load.image("paulText", "assets/png/paulText-1.png");
    //
    sceneThis.load.image("playNow", "assets/png/playNow.png");
    //
    sceneThis.load.image("lexi1", "assets/png/lexi/lexi-1.png");
    sceneThis.load.image("choose-dress", "assets/png/choose/dress.png");
    sceneThis.load.image("dress", "assets/png/stuff/dress.png");
    sceneThis.load.image("blouse", "assets/png/stuff/blouse.png");
    sceneThis.load.image("hand", "assets/png/hand.png");
};