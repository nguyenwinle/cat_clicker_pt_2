var viewModel = function() {
	this.click = ko.observable(0);
	this.name = ko.observable('Win');
	this.imgSrc = ko.observable('url');
  this.nicknames = ko.observable(['A', 'B', 'C', 'D']);

	this.incrementCounter = function() {
		this.count(this.count() + 1)
};

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
	});
});

ko.applyBindings(new viewModel());

function appView(){
	var self = this;
	this.firstName = ko.observable('');
	this.lastName = ko.observable('');
	this.fullName = ko.computed(function(){
		return this.firstName + "" + this.lastName;
	)};
};
