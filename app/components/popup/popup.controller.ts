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
    constructor(private $timeout:ng.ITimeoutService, public Popup) {
        "ngInject";
    }

    open() {
        this.Popup.open({
            template: "<div>Hello world</div>",
            controller: ()=> {
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