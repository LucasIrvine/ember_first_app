//create app
App = Ember.Application.create();
//define resources/routes
App.Router.map(function(){
	this.resource('index');
	this.resource('dashboard');
	this.resource('socialIdx');
	this.resource('metricsComparison');
	this.resource('about');
});
//create store
App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});


/*---ABOUT---*/
App.AboutRoute = Ember.Route.extend({
	model: function(){
		return App.ProjectInfo.find();
	}
});

App.ProjectInfo = DS.Model.extend({
	techName: DS.attr('string'),
	techLink: DS.attr('string'),
	techInfo: DS.attr('string'),
	
	linkFormatted: function(){
		return '<a href="'+ this.get('techLink') +'">'+ this.get('techLink') +'</a>';
	}.property('techLink')
});

App.ProjectInfo.FIXTURES = [
	{
	id: 1,
	techName: "Ember.js",
	techLink: "http://emberjs.com/",
	techInfo:  "Ember.js is an open-source client-side JavaScript web application framework based on the model-view-controller (MVC) software architectural pattern. It allows developers to create scalable single-page applications by incorporating common idioms and best practices into a framework that provides a rich object model, declarative two-way data binding, computed properties, automatically-updating templates powered by Handlebars.js, and a router for managing application state. Most Ember.js applications also use Ember Data, a database-independent data persistence library that provides object-relational mapping (ORM) facilities for the web."
	},
	{
	id: 2,
	techName: "D3.js",
	techLink: "http://d3js.org/",
	techInfo:  "D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG and CSS. D3's emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation."
	}
];