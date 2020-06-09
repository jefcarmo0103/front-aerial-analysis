angular
    .module('aerialAnalysis')
    .factory('LoginService', Service);

    function Service($http, $q) {
    var apiURL = "https://back-aerial-analysis.herokuapp.com/api/login";
    var service = {};

    service.Authenticate = Authenticate;
    service.GetAll = GetAll;
    service.GetById = GetById;

    return service;

    function Authenticate(user){
        return $http.post(apiURL + '/authenticate', user)
                    .then(handleSuccess, handleSuccess);
    }

    function GetAll() {
        return $http.get(apiURL + '/').then(handleSuccess, handleError);
    }

    function GetById(_id){
        return $http.get(apiURL + '/' + _id).then(handleSuccess, handleError);
    }

    function handleSuccess(res) {
        return res.data;
    }

    function handleError(res) {
        return $q.reject(res.data);
    }
    
}