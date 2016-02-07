var template = require('./assets/templates');
export class addressList implements ng.IDirective {
    constructor(private $timeout) {
        "ngInject";
    }

    public restrict:string = "E";
    public replace:boolean = true;
    public transclude:boolean = true;
    public template:string = template;
    scope:any = {
        items: "=",
        action: "&"
    };
    //public controller:Function = WelcomeDirectiveCtrl;
    //public controllerAs:string = 'vm';
    //public bindToController:boolean = true;
    link:ng.IDirectiveLinkFn = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes, ctrls, transludeFn) => {
        console.log('77777timeout in link');
        this.$timeout(()=> {
            console.log('timeout');
        }, 1000)
    };

    public static Factory() {
        return ($timeout) => {
            return new addressList($timeout);
        };
    }
}