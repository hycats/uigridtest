var mymodule = angular.module('myApp', ['ui.grid']);

mymodule
    .controller('MyController', ['$scope', 'uiGridConstants', function ($scope, uiGridConstants) {
        $scope.myGrid = {
            enableColumnMenus: false,
            enableSorting: false,
            columnDefs: [
                {
                    field: 'sdate', displayName: '日付', width: 80
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
                    field: 'check', displayName: '済', type: 'boolean', width: 35
                },
                {
                    field: 'income', displayName: '収入', width: '10%'
                },
                {
                    field: 'outgo', displayName: '支出', width: '10%'
                },
                {
                    field: 'balance', displayName: '残高', width: '10%'
                },
                {
                    field: 'comment', displayName: '備考'
                }
            ]
        };
    }]);
