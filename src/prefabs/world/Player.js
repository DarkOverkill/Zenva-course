import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walking_speed = +properties.walking_speed;

    this.scene.physics.add.existing(this);
    this.body.collideWorldBounds = true;

    this.scene.physics.add.collider(this, this.scene.layers.obstacles);

    this.body.velocity.x = +this.walking_speed;
    this.upKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  }

  update() {
    if(this.upKey.isDown) this.body.velocity.x = 0;
  }
}

export default Player;
