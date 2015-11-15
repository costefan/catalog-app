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
        o.create = function(item) {
            return $http.post('/items.json', item).success(function(data){
                o.items.push(data);
            });
        };
        o.upvote = function(item) {
            return $http.put('/items/' + item.id + '/upvote.json')
                .success(function(data){
                    item.upvotes += 1;
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
        o.upvoteComment = function(item, comment) {
            return $http.put('/items/' + item.id + '/comments/'+ comment.id + '/upvote.json')
                .success(function(data){
                    comment.upvotes += 1;
                });
        };
        return o;
    }
]);