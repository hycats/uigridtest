var mymodule = angular.module('myApp');

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
    .controller('MyController', ['$scope', '$location', 'uiGridConstants', function ($scope, $location, uiGridConstants) {

        $scope.myDate = new Date();

        $scope.tabs = [
            { icon:"fa fa-home fa-lg", url:"top"},
            { icon:"fa fa-table fa-lg", url:"kakeibo" },
            { icon:"fa fa-line-chart fa-lg", url:"graph" },
            { icon:"fa fa-cog fa-fw fa-lg", url:"setting" }
            ];

        $scope.switchTab = function (index) {
            switch (index) {
                case 0: $location.path('/top'); break;
                case 1: $location.path('/kakeibo'); break;
                case 2: $location.path('/graph'); break;
                case 3: $location.path('/setting'); break;
            }
        };

        $scope.accounts = [
            { id: 1, name: '現金' },
            { id: 2, name: '新生' },
            { id: 3, name: '住信SBI' }
        ];
        $scope.selectedAccount = $scope.accounts[0];//{ id: 1, name: '現金' };

        $scope.myData = [
            {
                sdate: new Date(2017, 01, 10),
                fname: '食費',
                lname: 'その他',
                product: 'その他',
                outgo: 5800,
                balance: 120000000,
                dummy: 1234
            },
            {
                sdate: new Date(2017, 01, 13),
                outgo: 12300
            }
        ];

        $scope.myGrid = {
            enableColumnMenus: false,
            enableSorting: false,
            //exceesRows: 4,
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
                    cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                },
                {
                    field: 'outgo', displayName: '支出', width: '12%',
                    cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                },
                {
                    field: 'balance', displayName: '残高', width: '12%',
                    cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                },
                {
                    field: 'comment', displayName: '備考'
                }
            ],
            data: $scope.myData
        };

        $scope.myGrid2 = {
            enableColumnMenus: false,
            enableSorting: false,
            exceesRows: 4,
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

mymodule
    .controller('MyTopController', ['$scope', function ($scope) {
        /*
                $scope.accounts = [
                    { id: 1, name: '現金' },
                    { id: 2, name: '新生' },
                    { id: 3, name: '住信SBI' }
                ];
                $scope.selectedAccount = $scope.accounts[0];//{ id: 1, name: '現金' };
        
                $scope.myData = [
                    {
                        sdate: new Date(2017, 01, 10),
                        fname: '食費',
                        lname: 'その他',
                        product: 'その他',
                        outgo: 5800,
                        balance: 120000000,
                        dummy: 1234
                    },
                    {
                        sdate: new Date(2017, 01, 13),
                        outgo: 12300
                    }
                ];
        
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
                            cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                        },
                        {
                            field: 'outgo', displayName: '支出', width: '12%',
                            cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                        },
                        {
                            field: 'balance', displayName: '残高', width: '12%',
                            cellFilter: 'currency: "":0', cellClass: 'grid-numbers'
                        },
                        {
                            field: 'comment', displayName: '備考'
                        }
                    ],
                    data: $scope.myData
                };
        */
    }]);

mymodule
    .controller('MyKakeiboController', ['$scope', function ($scope) {
        /*
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
                */
    }]);
