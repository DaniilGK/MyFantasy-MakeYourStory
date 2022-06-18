let t = 2;

let tutorial = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "tutorial" });
    },
    preload: function() {
        this.load.image("lexi1", "assets/png/lexi/lexi-1.png");
        this.load.image("chooseYou", "assets/png/choose/dress.png");
        this.load.image("dress", "assets/png/stuff/dress.png");
        this.load.image("blouse", "assets/png/stuff/blouse.png");
        this.load.image("hand", "assets/png/hand.png");
    },
    create: function() {
        this.room = this.add.image(0, 0, "room").setOrigin(0, 0);
        this.shadow = this.add.image(0, 0, "shadow").setOrigin(0, 0);
        this.time.addEvent({
            delay: 300,
            loop: false,
            callback: () => {
                this.lexi1 = this.add.image(120, 35, "lexi1").setOrigin(0, 0);
                this.choose = this.add.image(60, 10, "chooseYou").setOrigin(0, 0);
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
        this.shadow.setAlpha(t);
        t -= 0.1;
        moveHand(this, 500);

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
                            },
                        })
                    }
                },
            })
        }
    }
};