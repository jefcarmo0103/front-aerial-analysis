angular
    .module('aerialAnalysis')
    .factory('ProdutoService', Service);

function Service($http, $q) {
    var apiURL = "http://localhost:9050/api/item";
    var service = {};

    service.GetAll = GetAll;
    service.Create = Create;
    service.Delete = Delete;
    service.Update = Update;
    
    return service;

    function GetAll() {
        return $http.get(apiURL + '/').then(handleSuccess, handleError);
    }

    function Create(product) {
        product.valorPagoMargemItem = product.valorPagoItem * 2;
        return $http.post(apiURL + '/register', product).then(handleSuccess, handleError);
    }

    function Delete(_id) {
        return $http.delete(apiURL + '/' + _id).then(handleSuccess, handleError);
    }

    function Update(product) {
        return $http.put(apiURL + '/' + product._id, product).then(handleSuccess, handleError);
    }

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(res) {
        return $q.reject(res.data);
    }
    
}
