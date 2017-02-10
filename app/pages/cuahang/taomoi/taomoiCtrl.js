/**
 * @author p.maslava
 * created on 28.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.cuahang')
    .controller('CuahangtaomoiCtrl', SelectpickerPanelCtrl);

  /** @ngInject */
  function SelectpickerPanelCtrl($scope, $state, $filter, editableOptions, editableThemes) {

    //var vm = this;
    $scope.disabled = undefined;
    $scope.isTaomoi = false;
    $scope.thongtincuahang = {};
    $scope.submitted = false;

    
    
    $scope.diaphuongs = [
      {label: 'Hồ Chí Minh', value: 1},
      {label: 'Bình Dương', value: 2},
      {label: 'Đồng Nai', value: 3},
      {label: 'Long An', value: 4},
      {label: 'Trà Vinh', value: 5},
      {label: 'Miền Tây', value: 6}
    ];

    $scope.trangthais = [
      {text: 'Đang hoạt động', value: 1},
      {text: 'Ngừng hoạt động', value: 2},
    ];
    
    $scope.thongtincuahang.diaphuong = $scope.diaphuongs[1];
    $scope.thongtincuahang.trangthai = $scope.trangthais[0];

    $scope.savecuahang = function(form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }


    }

    $scope.sanphams = [
      {
        "id": 1,
        "tensanpham": 1,
        "status": 1,
        "soluong": 1,
        "gia":"100,000"
      },
      {
        "id": 2,
        "tensanpham": 1,
        "status": 1,
        "soluong": 2,
        "gia":"90,000"
      },
      {
        "id": 3,
        "tensanpham": 1,
        "status": 1,
        "soluong": 3,
        "gia":"80,000"
      },
      {
        "id": 4,
        "tensanpham": 2,
        "status": 2,
        "soluong": 1,
        "gia":"10,000"
      },
      {
        "id": 5,
        "tensanpham": 3,
        "status": 3,
        "soluong": 1,
        "gia":"90,000"
      }
    ];

    $scope.tensanphams = [
      {value: 1, text: 'Sản phẩm 1'},
      {value: 2, text: 'Sản phẩm 2'},
      {value: 3, text: 'Sản phẩm 3'},
    ];

    $scope.showTensanpham = function(sanpham) {
      var selected = [];
      if(sanpham.tensanpham) {
        selected = $filter('filter')($scope.tensanphams, {value: sanpham.tensanpham});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.checkTensanpham = function(data, id) {
      if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
      }
    };

    $scope.soluongs = [
      {value: 1, text: '< 100 thùng'},
      {value: 2, text: '> 100 thùng'},
      {value: 3, text: '> 200 thùng'},
    ];

    $scope.loadSoluong = function() {
      return $scope.soluong;
      
    };

    $scope.showSoluong = function(sanpham) {
      var selected = [];
      if(sanpham.soluong) {
        selected = $filter('filter')($scope.soluongs, {value: sanpham.soluong});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.statuses = [
      {value: 1, text: 'Đang chạy'},
      {value: 2, text: 'Tạm dừng'},
      {value: 3, text: 'Hết hàng'},
    ];

    $scope.showStatus = function(sanpham) {
      var selected = [];
      if(sanpham.status) {
        selected = $filter('filter')($scope.statuses, {value: sanpham.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.saveSanpham = function(data, id) {

      console.log('saveSanpham:' + data);
      //$scope.user not updated yet
      //angular.extend(data, {id: id});
      //return $http.post('/saveUser', data);
    };

    $scope.removeSanpham = function(index) {
      $scope.sanphams.splice(index, 1);
    };

    $scope.addSanpham = function() {
      $scope.inserted = {
        id: $scope.sanphams.length+1,
        tensanpham: '',
        status: null,
        soluong: null,
        gia:''
      };
      $scope.sanphams.push($scope.inserted);
    };
    

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

  }
})();


