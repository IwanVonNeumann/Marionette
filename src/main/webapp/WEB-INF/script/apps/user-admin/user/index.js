/**
 * Created by IvanRuskevich on 18.06.2015
 */

var UserModule = function (settings) {

    var initialData = settings.initialData || [];

    var module = {};
    module.app = settings.app || {};

    // collection
    module.collection = new UsersCollection(initialData);

    // router
    module.router = new UserRouter({module: module});

    // controller
    module.controller = new UserController({module: module});
    
    return module;
};
