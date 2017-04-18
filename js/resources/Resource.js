class Resource {
	constructor(name, value = 0, increment = 0, multiplier = 1) {
		this.name = name;
		this.value = value;
		this.increment = increment;
		this.multiplier = multiplier;
	}
	
	update(delta = 0) {
		this.value = (this.value + this.increment) * this.multiplier + delta;
	}
}