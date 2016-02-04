import Controller from './welcome.controller';
let Template = require('./assets/templates');
export function config($stateProvider:angular.ui.IStateProvider, $locationProvider, $urlRouterProvider):void {
    "ngInject";
    $stateProvider.state('welcome', {
        url: "/welcome",
        template: Template,
        controller: Controller,
        controllerAs: 'vm'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
}