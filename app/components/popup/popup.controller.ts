declare var angular:any;
export interface IItem {
    title:string;
}
interface IController {
    listItems:IItem[];
    count:number
}
class Controller implements IController {
    count:number;
    listItems:IItem[];

    constructor(private $timeout:ng.ITimeoutService,
                public Popup) {
        "ngInject";
        this.count = 14;
        this.listItems = [
            {
                "title": "Title 1"
            },
            {
                "title": "Title 2"
            },
            {
                "title": "Title 3"
            }
        ];
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