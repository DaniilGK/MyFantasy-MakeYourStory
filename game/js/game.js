import {gameScene} from "./variables.js";
import {introPreload, introCreate, introUpdate} from "./intro.js";

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 900,
    scene: gameScene,
};

gameScene.preload = function() {
    introPreload(this);
};

gameScene.create = function() {
    introCreate(this);
};

gameScene.update = function() {
    introUpdate(this);
};

let game = new Phaser.Game(config);
