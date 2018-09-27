import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class JSONLevelScene extends Phaser.Scene {
  constructor(key) {
    super({ key });
  }

  init(data) {
    this.level_data = data.level_data;
  }

  create() {
    this.groups = {};
    this.level_data.groups.forEach( group_name => {
      this.groups[group_name] = this.add.group();
    });

    this.sprites = {};
    for (let sprite_name in this.level_data.sprites) {
      let sprite_data = this.level_data.sprites[sprite_name];
      let sprite = new this.prefab_classes[sprite_data.type](this, sprite_name, sprite_data.position, sprite_data.properties);
    }
  }
}

export default JSONLevelScene;
