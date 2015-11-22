var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = Heroes;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    ;
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<div>\n\t\t\t<h2>My Heroes</h2>\n\t\t\t<ul class=\"heroes\">\n\t\t\t  <li *ng-for=\"#hero of heroes\" [ng-class]=\"getSelectedClass(hero)\" (click)=\"onSelect(hero)\">\n\t\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div *ng-if=\"selectedHero\">\n\t\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></div>\n\t\t</div>\n\t",
            styles: ["\n\t\t.heroes {\n\t\t\tlist-style-type: none;\n\t\t\tmargin-left: 1em;\n\t\t\tpadding: 0;\n\t\t\twidth: 10em;\n\t\t}\n\t\t.heroes li {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tleft: 0;\n\t\t\ttransition: all 0.2s ease;\n\t\t}\n\t\t.heroes li:hover {\n\t\t\tcolor: #369;\n\t\t\tbackground-color: #EEE;\n\t\t\tleft: .2em;\n\t\t}\n\t\t.heroes .badge{\n\t\t\tfont-size: small;\n\t\t\tcolor: white;\n\t\t\tpadding: 0.1em 0.7em;\n\t\t\tbackground-color: #369;\n\t\t\tline-height: 1em;\n\t\t\tposition: relative;\n\t\t\tleft: -1px;\n\t\t\ttop: -1px;\n\t\t}\n\t\t.selected{\n\t\t\tbackground-color: #EEE;\n\t\t\tcolor: #369;\n\t\t}\n\t"],
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var Heroes = [
    { "id": 11, "name": "Mr Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
];
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map