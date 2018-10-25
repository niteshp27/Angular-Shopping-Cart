(function () {
    var cakeItems = '[{"cakeid": 1,"title": "cake 1","description": "Cake 1 description","image": "image1","quantity": 2,"text": "Add to cart","price": 500,"totalprice": null},{"cakeid": 2,"title": "cake 2","description": "Cake 2 description","image": "image2","quantity": 1,"text": "Add to cart","price": 250,"totalprice": null},{"cakeid": 3,"title": "cake 3","description": "Cake 3 description","image": "image3","quantity": 1,"text": "Add to cart","price": 350,"totalprice": null},{"cakeid": 4,"title": "cake 4","description": "Cake 4 description","image": "image4","quantity": 1,"text": "Add to cart","price": 450,"totalprice": null}]';

    cakeItems = JSON.parse(cakeItems);
    // create our angular app and inject ui.bootstrap
    var app = angular.module('cakeStore', ['ui.bootstrap'])

    app.controller('storeController', function () {

        var self = this;
        // BUTTONS ======================

        // define some random object and button values
        self.products = cakeItems;

        // SOLD =====================
        self.products.isSold = false;

    });
    app.controller("tabController", function () {
        var self = this;
        self.tab = 1;
        self.selectTab = function (setTab) {
            self.tab = setTab;
        };
        self.isSelected = function (selectTab) {
            return self.tab === selectTab;
        };
    });

})();