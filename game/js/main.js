let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: [intro, tutorial, allScene],
    // scene: [allScene],
};

let game = new Phaser.Game(config);