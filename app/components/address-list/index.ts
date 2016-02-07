import {addressList} from "./address-list.directive";
export default angular
    .module('app.addressList', [])
    .directive("addressList", addressList.Factory())
    .name;