var cats = function(data) {
	this.click = ko.observable(data.click);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

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
	var self = this;
	//store cat in current cat variable 
	this.currentCat = ko.oberservable(new cats({
	click: ko.observable(0),
	name: ko.observable('Win'),
	imgSrc: ko.observable('https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg'),
  	nicknames: ko.observableArray(['A', 'B', 'C', 'D'])
	}));
	this.incrementCounter = function() {
	self.currentCat().count(self.currentCat().count() + 1)
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
