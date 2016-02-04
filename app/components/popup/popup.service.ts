export class PopupService {
    constructor(private $q, private $injector, private $templateCache, private $templateRequest) {
        "ngInject";
    }

    open(config) {
        var defer = this.$q.defer();
        config.resolve = config.resolve || {};
        var resolvePromises = this.$q.all(_.mapValue(config.resolve, (item)=> {
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
            });
        });
        alert(1);
        return defer.promise;
    }
}