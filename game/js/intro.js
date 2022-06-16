let intro = new Phaser.Class({
    Extends: Phaser.Scene,
    Initialize: function() {
        Phaser.Scene.call(this, {"key": "intro"});
    },
    init: function() {},
    preload: function() {
        this.load.image("room", "assets/png/room.png");
        this.load.image("shadow", "assets/png/shadow.png");
        this.load.image("paul", "assets/png/paul.png");
        this.load.image("paulIntroTxt", "assets/png/paulText-0.png");
        this.load.image("lexi0", "assets/png/lexi-0.png");
        this.load.image("lexiTxt", "assets/png/lexiText.png");
    },
    create: function() {
        this.room = this.add.image(0, 0, "room").setOrigin(0, 0);
        this.shadow = this.add.image(0, 0, "shadow").setOrigin(0, 0);
        this.paul = this.add.image(0, 0, "paul").setOrigin(0, 0);
        this.paulTextIntro = this.add.image(300, 480, "paulIntroTxt");
        this.lexi0 = this.add.image(-500, 0, "lexi0").setOrigin(0, 0);
        this.lexiText = this.add.image(-500, 400, "lexiTxt").setOrigin(0, 0);

        this.time.addEvent({
                    delay: 1500,
                    loop: false,
                    callback: () => {
                        this.scene.start("tutorial");
                    }
        });
    },
    update: function() {
        moveCharacter(this);
    },
});

function moveCharacter(sceneThis) {
    sceneThis.time.delayedCall(750, function() {
        sceneThis.paul.x += 50;
        sceneThis.paulTextIntro.destroy();

        sceneThis.lexi0.x += 50;
        if(sceneThis.lexi0.x > 65) sceneThis.lexi0.x = 65;
        if(sceneThis.lexi0.x == 65) sceneThis.lexiText.x = 65;
    });
};