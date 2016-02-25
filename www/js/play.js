

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak", "color:#0000FF; background:#900009"); 
  },

  preload: function () {
    console.log("preloading background")
    this.load.image('background','assets/background.png');
    console.log("preloading dodger(player)")
    this.load.spritesheet('dodger','assets/player.png',64,64,3)

  },

  create: function () {
    console.log("creating background");
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,50);
    this.background.scale.set(1);
    console.log("creating dodger");
    this.dodger = this.add.sprite(160,510,'dodger');
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('flame');
    this.dodger.animations.play('flame',10,true);
    this.cursors = game.input.keyboard.createCursorKeys();
    console.log("use arrow keys to move")
  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.dodger.x -= 10;
      this.dodger.scale.set(-1);
    }
    if (this.cursors.right.isDown) {
      this.dodger.x += 10;
      this.dodger.scale.set(1);
    }
  }
}
