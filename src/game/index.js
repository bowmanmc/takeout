import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import Loader from './Loader';


const height = document.body.clientHeight;
const width = document.body.clientWidth;

const game = new Phaser.Game(width, height, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    Loader.load(game);
}

function create() {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
};

function update() {
};
