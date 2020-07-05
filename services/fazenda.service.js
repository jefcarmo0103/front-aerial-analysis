angular
    .module('aerialAnalysis')
    .factory('FazendaService', Service);

function Service($http, $q) {
    var apiURL = "http://localhost:9050/api/fazenda";
    var service = {};

    service.GetAll = GetAll;
    service.GetByUser = GetByUser;
    service.Create = Create;
    service.Delete = Delete;
    service.Update = Update;
    
    return service;

    function GetByUser(idUser){
        $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.getItem("token");
        return $http.get(apiURL + '/user/' + idUser).then(handleSuccess, handleError);
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
