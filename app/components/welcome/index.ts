import "./assets/styles/index.styl";
import "./assets/styles/_html.styl";
import {config as routesConfig} from "./routes";
import {Welcome} from "./welcome.directive";
export default angular
    .module('app.welcome', [])
    .directive("welcome", ($timeout) => {
        return new Welcome($timeout);
    })
    .config(routesConfig)
    .name;