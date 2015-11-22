/**
 * Created by costefan on 15.11.15.
 */
app.factory('items', [
    '$http',
    function($http){
        var o = {
            items: []
        };
        o.getAll = function() {
            return $http.get('/items.json').success(function(data){
                angular.copy(data, o.items)
            });
        };
        o.get = function(id) {
            return $http.get('/items/' + id + '.json').then(function(res){
                return res.data;
            });
        };
        o.addComment = function(id, comment) {
            return $http.post('/items/' + id + '/comments.json', comment);
        };
        return o;
    }
]);