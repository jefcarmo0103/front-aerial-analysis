angular
    .module('aerialAnalysis', []);

angular
    .module('aerialAnalysis')
    .controller('homeController', Controller);

function Controller($window, HomeService, LoginService, FazendaService, TalhaoService) {
    var vm = this;
    vm.products = [];
    vm.saveProduct = saveProduct;
    vm.deleteProduct = deleteProduct;

    vm.initNewProduct = initNewProduct;

    vm.fillProduct = fillProduct;
    vm.productSelected = {};

    vm.setProductEdit = setProductEdit;

    vm.user = null;
    vm.fazenda = null;

    init();

    function init() {
        LoginService.GetById(sessionStorage.getItem("userid"))
            .then((data) => {
                vm.user = data;
            })

        FazendaService.GetByUser(sessionStorage.getItem("userid"))
            .then((data) => {
                vm.fazenda = data[0];

                TalhaoService.GetByFarm(vm.fazenda._id).then(function (data) {
                    console.log(data);
                    vm.talhoes = data;
                    setTimeout(setColorInIndex, 500);
                });
            });

        
    }

    function initNewProduct(){
        vm.product = null;
    }

    function saveProduct() {
        if(vm.product._id != null){
            HomeService.Update(vm.product)
                .then(function () {
                    $window.alert("Produto Alterado");
                    vm.product = null;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else{
            TalhaoService.Create(vm.product)
                .then(function () {
                    $window.alert("Produto Criado");
                    vm.product = null;
                    hideSecond();
                    closeDialog();
                    initProducts();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    function deleteProduct() {
        if(confirm("Tem certeza que deseja excluir esse registro ?")){
            HomeService.Delete(vm.productSelected._id)
            .then(function () {
                $window.alert("Produto Excluido");
                vm.product = null;
                hideSecond();
                initProducts();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }

    function fillProduct(product){
        vm.productSelected = product;
    }

    function setProductEdit(productCurrent){
        vm.product = productCurrent;
    }
}