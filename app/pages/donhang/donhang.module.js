/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.donhang', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('donhang', {
          url: '/donhang',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Đơn hàng',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 40,
          },
        })
        .state('donhang.tongquat', {
          url: '/tongquat',
          templateUrl: 'pages/form/inputs/inputs.html',
          title: 'Xem đơn',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('donhang.themkho', {
          url: '/themkho',
          templateUrl: 'pages/form/layouts/layouts.html',
          title: 'Tạo đơn',
          sidebarMeta: {
            order: 100,
          },
        });
  }
})();
