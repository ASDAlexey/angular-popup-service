declare var angular:any;
interface IController {
    //form_set_dirty(form:{}):void;
    //action:string;
    dataForm:{}
    a:string
}
class Controller implements IController {
    dataForm:{};
    a:string;
    //action:string;
    constructor(private $timeout:ng.ITimeoutService, public Popup, private $scope) {
        "ngInject";
    }

    open() {
        this.Popup.open({
            template: "<div>Hello<button ng-click='close(1)'>1</button><button ng-click='close(2)'>2</button></div>",
            //controllerAs:"vm",
            controller: ($scope)=> {
                $scope.aaa = 'bbb';
            },
            resolve: {
                testResolve: ($q)=> {
                    return $q.when(true);
                }
            }
        }).then((data)=> {
            console.log(data);
        });
    }
}
export default Controller;