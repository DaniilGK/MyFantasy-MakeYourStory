let t = 2;
let tutorial = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "tutorial" });
    },
    init: function() {},
    preload: function() {
        this.load.image("room", "assets/png/room.png");
        this.load.image("shadow", "assets/png/shadow.png");
        this.load.image("lexi1", "assets/png/lexi-1.png");
        this.load.image("chooseYou", "assets/png/chooseDress.png");
        this.load.image("dress", "assets/png/dress.png");
        this.load.image("blouse", "assets/png/blouse.png");
        this.load.image("hand", "assets/png/hand.png");
    },
    create: function() {
        this.room = this.add.image(0, 0, "room").setOrigin(0, 0);
        this.shadow = this.add.image(0, 0, "shadow").setOrigin(0, 0);

        this.time.addEvent({
            delay: 500,
            loop: false,
            callback: () => {
                this.lexi1 = this.add.image(120, 35, "lexi1").setOrigin(0, 0);
                this.choose = this.add.image(60, 10, "chooseYou").setOrigin(0, 0);
                this.dress = this.add.image(40, 560, "dress").setOrigin(0, 0);
                this.blouse = this.add.image(310, 560, "blouse").setOrigin(0, 0);
                this.hand = this.add.image(310, 860, "hand").setOrigin(0, 0);
            },
        });
    },
    update: function() {
        this.shadow.setAlpha(t);
        t = t -= 0.1;
    },
});