var mymodule = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.emptyBaseLayer']);

mymodule
    .config(['$mdDateLocaleProvider', function ($mdDateLocaleProvider) {

        //$mdDateLocaleProvider.shortMonths = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        $mdDateLocaleProvider.shortDays = ['日', '月', '火', '水', '木', '金', '土'];

        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('YYYY/MM/DD');
        };

        $mdDateLocaleProvider.parseDate = function (dateString) {
            var m = moment(dateString, 'YYYY/MM/DD', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
    }]);

mymodule
    .controller('MyController', ['$scope', '$timeout', 'uiGridConstants', function ($scope, $timeout, uiGridConstants) {

        console.log('MyController initialized');

        $scope.myDate = new Date();

        $scope.accounts = [
            { id: 1, name: '現金', credit: false },
            { id: 2, name: '新生', credit: false  },
            { id: 3, name: '住信SBI', credit: false },
            { id: 4, name: 'セゾン', credit: true }
        ];
        $scope.selectedAccount = $scope.accounts[0];//{ id: 1, name: '現金' };
        $scope.switchAccount = function () {
            console.log('account = ' + $scope.selectedAccount.name);
            //var visible = $scope.selectedAccount.credit == true ? true : false;
            //$scope.columns[4].visible = visible;
            //$scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        };


        $scope.myData = [
            {
                sdate: new Date(2017, 01, 10),
                catefory: '食費',
                breakdown: 'その他',
                item: 'その他',
                outgo: 5800,
                balance: 120000000,
                dummy: 1234
            },
            {
                sdate: new Date(2017, 01, 13),
                outgo: 12300
            }
        ];

        $scope.columns = [
            {
                field: 'sdate', displayName: '日付', width: 100,
                cellFilter: 'date: "yyyy/MM/dd"', cellClass: 'grid-date',
                type: 'date',
            },
            {
                field: 'category', displayName: '費目', width: '10%',
            },
            {
                field: 'breakdown', displayName: '内訳', width: '10%'
            },
            {
                field: 'item', displayName: '品名', width: '10%'
            },
            {
                field: 'check', displayName: '済', type: 'boolean', width: 25,
                cellTemplate: '<input type="checkbox">', visible: $scope.selectedAccount.credit
            },
            {
                field: 'income', displayName: '収入', width: '12%',
                cellFilter: 'currency: "":0', cellClass: 'grid-numbers', type: 'number'
            },
            {
                field: 'outgo', displayName: '支出', width: '12%',
                cellFilter: 'currency: "":0', cellClass: 'grid-numbers', type: 'number'
            },
            {
                field: 'balance', displayName: '残高', width: '12%',
                cellFilter: 'currency: "":0', cellClass: 'grid-numbers', type: 'number'
            },
            {
                field: 'comment', displayName: '備考'
            }
        ];

        $scope.myGrid = {
            enableCellEditOnFocus: true,
            enableColumnMenus: false,
            enableSorting: false,
            columnDefs: $scope.columns,
            data: $scope.myData,
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            }
        };

        $scope.$watch(
            function() {
                return $scope.selectedAccount.credit;
            },
            function(newValue, oldValue, scope) {
                scope.columns[4].visible = newValue;
                if ( scope.gridApi != null) {
                    scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
                console.log(newValue);
                }
            }
        );

        $scope.myGrid2 = {
            enableColumnMenus: false,
            enableSorting: false,
            columnDefs: [
                { field: 'd1' },
                { field: 'd2' },
                { field: 'd3' },
                { field: 'd4' },
                { field: 'd5' },
                { field: 'd6' },
                { field: 'd7' },
                { field: 'd8' }
            ],
            data: [
                { rowHeader: '食費', d1: 0, d2: 0 },
                { rowHeader: '生活用品', d1: 0, d2: 0 }
            ],
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
                var cellTemplate = 'ui-grid/selectionRowHeader';   // you could use your own template here
                $scope.gridApi.core.addRowHeaderColumn({ name: 'rowHeaderCol', displayName: '', width: 200, cellTemplate: "<div class=\"ui-grid-row-header-cell ui-grid-disable-selection\"><div class=\"ui-grid-cell-contents\">{{row.entity['rowHeader']}}</div></div>" });
            }
        }
    }]);
