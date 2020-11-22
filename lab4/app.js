(function () {
    'use strict';

    var shoppingListObj = new ShoppingListService();

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list = this;
        var shoppingList = ShoppingListFactory();

        list.items = shoppingList.getItems();
        list.buyItem = function (index) {
            shoppingList.buyItem(index);
        };
    }

    ShoppingListController2.$inject = ['ShoppingListFactory'];

    function ShoppingListController2(ShoppingListFactory) {
        var list = this;

        var shoppingList = ShoppingListFactory();

        list.items = shoppingList.getBoughtItems();
    }

    function ShoppingListService() {
        var service = this;

        var items = [
            {
                name: 'Apple',
                quantity: 3
            },
            {
                name: 'Juice',
                quantity: 1
            },
            {
                name: 'Coke',
                quantity: 4
            },
            {
                name: 'Salt',
                quantity: 5
            },
            {
                name: 'Chocolate',
                quantity: 7
            },
        ];
        var boughtItems = [];

        service.buyItem = function (itemIndex) {
            boughtItems.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return shoppingListObj;
        };
        return factory;
    }

})();