export class PopupService {
    constructor(private $q,
                private $injector,
                private $templateCache,
                private $templateRequest,
                private $rootScope,
                private $controller,
                private $compile,
                private $document) {
        "ngInject";
    }

    open(config) {
        var defer = this.$q.defer();
        config.resolve = config.resolve || {};
        var resolvePromises = this.$q.all(_.mapValues(config.resolve, (item)=> {
            return this.$injector.invoke(item);
        })).catch((e)=> {
            defer.reject(e);
        });
        if (!config.template && !config.templateUrl)
            throw new Error('Missing template');
        resolvePromises.then((resolvedData)=> {
            var templatePromise = this.$q.when(config.template
                || this.$templateCache.get(config.templateUrl)
                || this.$templateRequest.get(config.templateUrl));
            templatePromise.then((realTemplate)=> {
                var scope = this.$rootScope.$new();
                this.$controller(config.controller, _.assign({
                    $scope: scope
                }, resolvedData));
                var element = angular.element(realTemplate);
                this.$compile(element)(scope);
                angular.element(this.$document[0].body).append(element);
            });
        });
        alert(1);
        return defer.promise;
    }
}