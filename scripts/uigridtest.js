var mymodule = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ui.grid', 'ui.grid.emptyBaseLayer']);

mymodule
    .controller('MyController', ['$scope', 'uiGridConstants', function ($scope, uiGridConstants) {

        this.myDate = new Date();

        $scope.myGrid = {
            enableColumnMenus: false,
            enableSorting: false,
            columnDefs: [
                {
                    field: 'sdate', displayName: '日付', width: 100,
                    cellFilter: 'date: "yyyy/MM/dd"', cellClass: 'grid-date'
                },
                {
                    field: 'fname', displayName: '費目', width: '10%'
                },
                {
                    field: 'lname', displayName: '内訳', width: '10%'
                },
                {
                    field: 'product', displayName: '品名', width: '10%'
                },
                {
                    field: 'check', displayName: '済', type: 'boolean', width: 25,
                    cellTemplate: '<input type="checkbox">'
                },
                {
                    field: 'income', displayName: '収入', width: '12%',
                    cellFilter: 'currency: "":0', cellClass:'grid-numbers'
                },
                {
                    field: 'outgo', displayName: '支出', width: '12%',
                    cellFilter: 'currency: "":0', cellClass:'grid-numbers'
                },
                {
                    field: 'balance', displayName: '残高', width: '12%',
                    cellFilter: 'currency: "":0', cellClass:'grid-numbers'
                },
                {
                    field: 'comment', displayName: '備考'
                }
            ],
            data: [
                {
                    sdate: new Date(2017,01,10),
                    fname:'食費',
                    lname:'その他',
                    product:'その他',
                    outgo: 5800,
                    balance: 120000000
                },
                {
                    sdate: new Date(2017,01,13),
                    outgo: 12300
                }
            ]
        };
    }]);
