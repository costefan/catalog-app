/**
 * Created by costefan on 15.11.15.
 */
app.controller('MainCtrl', [
    '$scope',
    'items',
    function($scope, items) {
        $scope.items = items.items;
        $scope.addItem = function () {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            items.create({

                title: $scope.title,
                price: $scope.price

            });
            $scope.title = '';
            $scope.price = '';
        };
    }]);