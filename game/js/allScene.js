let w = 0;
let allScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "allScene" });
    },
    preload: function() {
        this.load.image("pre0", "assets/png/choose/preload-0.png");
    },
    create: function() {
        this.room = this.add.image(0, 0, "room").setOrigin(0, 0);
        this.lexi1 = this.add.image(120, 35, "lexi1").setOrigin(0, 0);
        this.scale0 = this.add.image(40, 30, "pre0").setOrigin(0, 0);
        this.dress = this.add.image(40, 560, "dress").setOrigin(0, 0);
        this.blouse = this.add.image(310, 560, "blouse").setOrigin(0, 0);
    },
    update: function() {
        this.scale0.setAlpha(w);
        if(w < 2) {
            w += 0.1;
        };
    }
});


 