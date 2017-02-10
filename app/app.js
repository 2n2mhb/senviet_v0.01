(function () {
    'use strict';

    angular
        .module('BlurAdmin', [
            'ngAnimate',
            'ui.bootstrap',
            'ui.sortable',
            'ui.router',
            'ngTouch',
            'toastr',
            'smart-table',
            "xeditable",
            'ui.slimscroll',
            'ngJsTree',
            'angular-progress-button-styles',

            'BlurAdmin.theme',
            'BlurAdmin.pages'
        ])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        /*$stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'Home.HomeController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            })
            .state('account', {
                url: '/account',
                templateUrl: 'account/index.html',
                controller: 'Account.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            })
            .state('cuahang-quanly', {
                url: '/cuahang-quanly',
                templateUrl: 'cuahang/quanly.html',
                controller: '',
                controllerAs: 'vm',
                data: { activeTab: 'cuahang-quanly' }
            })
            .state('cuahang-taomoi', {
                url: '/cuahang-taomoi',
                templateUrl: 'cuahang/taomoi.html',
                controller: 'Cuahang.TaomoiController',
                controllerAs: 'vm',
                data: { activeTab: 'cuahang-quanly' }
            })
            .state('thietlap-tinhthanh', {
                url: '/thietlap-tinhthanh',
                templateUrl: 'thietlap/tinhthanh.html',
                controller: 'Thietlap.TinhthanhController',
                controllerAs: 'vm',
                data: { activeTab: 'thietlap-tinhthanh' }
            });*/
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        //$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //    $rootScope.activeTab = toState.data.activeTab;
        //});
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            //angular.bootstrap(document, ['BlurAdmin']);
        });
    });
})();