/**
 * Created by IvanRuskevich on 18.06.2015
 */

var HomeModule = function(settings) {
    var module = {};
    module.app = settings.app || {};

    // controller
    module.controller = new HomeController({module: module});

    // router
    module.router = new HomeRouter();

    return module;
};
