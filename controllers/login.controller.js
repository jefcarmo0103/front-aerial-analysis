angular
    .module('aerialAnalysis', []);

angular
    .module('aerialAnalysis')
    .controller('loginController', Controller);

function Controller($window, LoginService) {
    var vm = this;
    vm.user = null;
    vm.loginUser = loginUser;

    function loginUser(){
        LoginService.Authenticate(vm.user)
            .then((data) => {
                sessionStorage.setItem("userid", data.userId);
                sessionStorage.setItem("token", data.token);

                $window.location.href = '/home';
            })
            .catch((data) => {
                $window.alert(data);
            });
    }

}