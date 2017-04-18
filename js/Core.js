class Core {
	constructor() {
		this.game = new Phaser.Game(1000, 800, Phaser.AUTO, '', {
			preload: this.preload,
			create: this.create
		});
		
		this.game.core = this;
	}
	
	// Phaser methods
	preload() {
		this.game.load.image('logo', Constants.Imgdir+'phaser.png');
	}
	
	create() {
		//let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		//logo.anchor.setTo(0.5, 0.5);
		
		this.game.core.initResources();
	}
	
	// helper methods
	
	resource(name) {
		for (let res of this.resources) {
			if (res.name === name)
				return res;
		}
		
		return undefined;
	}
	
	// setup methods
	initResources() {
		this.resources = [
			new Resource("speed", 0.01, 0, 1.01),
			new DistanceTravelled(this)
		];
		this.clock = this.game.time.create(this.game);
		this.clock.loop(100, this.clockTick, this);
		this.clock.start();
		
		this.graphics = this.game.add.graphics(0,0);
		this.graphics.lineStyle(1, 0xffffff, 1);
	}
	
	// main clock ticks
	clockTick() {
		for (let res of this.resources) {
			res.update();
		}
		
		this.graphics.lineTo(this.clock.seconds*10,this.resource("distance").value);
		this.graphics.moveTo(this.clock.seconds*10,this.resource("distance").value);
	}
}