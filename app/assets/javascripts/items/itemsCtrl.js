/**
 * Created by costefan on 15.11.15.
 */
app.controller('ItemsCtrl', [
    '$scope',
    'item',
    'items',
    function($scope, item, items) {
        $scope.item = item;
        $scope.addComment = function(){
            if($scope.body === '') { return; }
            items.addComment(item.id, {
                body: $scope.body,
                author: 'user'
            }).success(function(comment) {
                $scope.item.comments.push(comment);
            });
            $scope.body = '';
        };
    }]);