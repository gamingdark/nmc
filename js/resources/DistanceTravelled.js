class DistanceTravelled extends Resource {
	constructor(core) {
		super("distance", 0, 0);
		this.core = core;
	}
	
	update(delta = 0) {
		this.value = this.value + this.core.resource("speed").value + delta;
	}
}