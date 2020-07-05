angular
    .module('aerialAnalysis')
    .factory('TalhaoService', Service);

function Service($http, $q) {
    var apiURL = "https://back-aerial-analysis.herokuapp.com/api/talhao";
    var service = {};

    service.GetAll = GetAll;
    service.GetByFarm = GetByFarm;
    service.Create = Create;
    service.Delete = Delete;
    service.Update = Update;
    
    return service;

    function GetByFarm(idFarm){
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.get(apiURL + '/farm/' + idFarm).then(handleSuccess, handleError);
    }

    function GetAll() {
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.get(apiURL + '/').then(handleSuccess, handleError);
    }

    function Create(product) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.post(apiURL + '/register', product).then(handleSuccess, handleError);
    }

    function Delete(_id) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.delete(apiURL + '/' + _id).then(handleSuccess, handleError);
    }

    function Update(product) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.put(apiURL + '/' + product._id, product).then(handleSuccess, handleError);
    }

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(res) {
        return $q.reject(res.data);
    }
    
}
