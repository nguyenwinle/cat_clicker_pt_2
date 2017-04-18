var cats = function() {
	this.click = ko.observable(0);
	this.name = ko.observable('Win');
	this.imgSrc = ko.observable('https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg');
  this.nicknames = ko.observable(['A', 'B', 'C', 'D']);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.click();
		if (clicks > 10) {
			title = 'Minh';
		};
		else if (clicks > 20){
			title = 'Lin';
		};
		else {
			title = 'ninja';
		};
		return title;
	},this);
});


var viewModel = funtion(){
	//store cat in current cat variable 
	this.currentCat = ko.oberservable(new cats());
	this.incrementCounter = function() {
	this.currentCat.count(this.currentCat.count() + 1)
};

ko.applyBindings(new viewModel());

function appView(){
	var self = this;
	this.firstName = ko.observable('');
	this.lastName = ko.observable('');
	this.fullName = ko.computed(function(){
		return this.firstName + "" + this.lastName;
	)};
};
