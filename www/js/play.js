

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    this.speed = 12;
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak", "color:#0000FF; background:#900009"); 
    this.a = 1
  },

  preload: function () {
    
    console.log("preloading background")
    this.load.image('background','assets/background.png');
    console.log("preloading dodger(player)")
    this.load.spritesheet('dodger','assets/player.png',64,64,3)
    console.log("preloading obstacle")
    this.load.spritesheet('dodge','assets/dodge.png',64,64,1)
  },

  create: function () {
    console.log("adding physics...")
  

    console.log("creating background...");
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,50);
    this.background.scale.set(1);
    
    console.log("creating dodger...");
    this.dodger = this.add.sprite(160,510,'dodger');
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('flame');
    this.dodger.animations.play('flame',10,true);
    game.physics.arcade.enable(this.dodger)
    this.dodger.body.collideWorldBounds = true;
    this.cursors = game.input.keyboard.createCursorKeys();

    console.log("creating obsticle...")
    this.dodge = this.add.sprite(160,510,'dodge');
    this.dodge.anchor.set(0.5,0.5)
    console.log("Success! : use arrow keys to move")
    game.physics.arcade.enable(this.dodge)
    this.dodge.body.gravity.y = 500;
    this.dodger.body.bounce.setTo(0.5,0.5)
    this.dodger.body.drag.setTo(600)
  },

  



  update: function () {
    game.physics.arcade.collide(this.dodge,this.dodger,this.handleCollision);
    this.dodge.y += this.speed
    if (this.cursors.left.isDown) {
      this.dodger.body.gravity.x = -1200;
    }
    if (this.cursors.right.isDown) {
      this.dodger.body.gravity.x = 1200;
    }
    if (this.dodge.y >568) {
      this.dodge.y = 10;
      this.dodge.x = game.rnd.integerInRange(0,320)
      this.dodge.body.velocity.y = 1
      
   
    };
  
  }
  handleCollision: function() {
    console.log("OUCH!");
    game.state.start('play')
  }
};
