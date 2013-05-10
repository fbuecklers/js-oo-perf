function defineAnimal() {
	Animal = Object.inherit({
		initialize: function(name) {
			this.name = name;
		},
		getName: function() {
			return name;
		},
		setName: function(name) {
			this.name = name;
		}
	});
}

function defineAgedAnimal() {
	AgedAnimal = Animal.inherit({
		initialize: function(name, age) {
			this.superCall(name)
//			Animal.prototype.initialize.call(this, name);
			this.age = age;
		},
		getAge: function() {
			return this.age;
		}
	});
}

function defineCat() {
	Cat = AgedAnimal.inherit({});
}

function defineDog() {
	Dog = AgedAnimal.inherit({
		getAge: function() {
			return this.superCall() * 7;
//			return AgedAnimal.prototype.getAge.call(this) * 7;
		}
	});
}