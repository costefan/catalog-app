/**
 * Created by costefan on 15.11.15.
 */
app.controller('MainCtrl', [
    '$scope',
    'items',
    function($scope, items) {
        $scope.items = items.items;
        $scope.itemsPerPage = 5;
        $scope.currentPage = 1;
        $scope.totalItems = $scope.items.length;
        $scope.maxSize = 5;
    }]);