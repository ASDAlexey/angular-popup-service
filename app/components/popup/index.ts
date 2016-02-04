import "./assets/styles/index.styl";
import {config as routesConfig} from "./routes";
//import {Welcome} from "./popup.directive";
import {PopupService} from "./popup.service";
export default angular
    .module('app.popup', [])
    /*.directive("popup", ($timeout) => {
     return new Welcome($timeout);
     })*/
    .service("Popup", ($q, $injector) => {
        return new PopupService($q, $injector);
    })
    .config(routesConfig)
    .name;