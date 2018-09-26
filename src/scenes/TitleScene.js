class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  preload() {
    this.load.image('background_image', 'assets/background.png');
  }

  create() {
    let background = this.add.sprite(0, 0, 'background_image');
    background.setOrigin(0, 0);
  }
}

export default TitleScene;
