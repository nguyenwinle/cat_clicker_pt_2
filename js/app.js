var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg',
	    nicknames: ['D']
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg',
	    nicknames: ['n']
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg',
	    nicknames: ['A']
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg',
	    nicknames: ['B']
        },
        {
            click : 0,
            name : 'Sleepy',
            imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg',
	    nicknames: ['C']
        }
    ];

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


var viewModel = function(){
	var self = this;
	//store cat in current cat variable 
	this.catList = ko.observableArray([]);
	initialCats.foreach(function(catItem){
		self.catList.push(new cats(catItem);
	});
	
	this.currentCat = ko.oberservable(this.catList()[0]);
	});
	this.incrementCounter = function() {
	self.currentCat().count(self.currentCat().count() + 1)
};
	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
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
