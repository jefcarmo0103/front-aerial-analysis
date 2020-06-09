(function () {
    angular
        .module('aerialAnalysis', ['ui.router'])
        .run(($rootScope, $location, AuthService) =>{
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                if (next.authorize) {
                  if (!AuthService.getToken()) {
                    /* Ugly way
                    event.preventDefault();
                    $location.path('/login');
                    ========================== */
          
                    $rootScope.$evalAsync(function () {
                      $location.path('/signin');
                    })
                  }
                }
              });
        });

   
})();