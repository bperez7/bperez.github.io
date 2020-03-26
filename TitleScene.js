
export class TitleScene extends Phaser.Scene {
    constructor() {
        super({key:"title"});
    }

    init() {}
    preload ()
    {
        this.load.image('title_screen', 'assets/title_2.png');
    }
    create ()
    {
        //tileSprite = this.add.tileSprite(400, 300, 800, 600, 'sky');
      //  tileSprite.autoScroll(-1,0)

        this.add.image(400, 300, 'title_screen');
    }

    update() {}


}

