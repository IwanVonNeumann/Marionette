/**
 * Created by IvanRuskevich on 18.06.2015
 */

var BreadCrumbModule = function (settings) {

    var initialData = settings.initialData || [];
    var module = {};
    var collection = new BreadCrumbCollection(initialData);
    var region = settings.region;
    var view = new BreadCrumbList({collection: collection});

    module.app = settings.app || {};
    module.setCrumbs = function (data) {
        collection.reset(data);
    };

    // events
    collection.on("breadcrumb:selected", function (crumb) {
        module.app.trigger(crumb.get("trigger"));
    });

    // explicit call to load
    module.show = function () {
        if (region) {
            region.show(view)
        } else {
            throw "Can't show the breadcrumbs without a region specified";
        }
    };

    //module.load = function (region, initialData) {
    //    initialData || (initialData = {});
    //    collection = new BreadCrumbCollection(initialData);
    //
    //    collection.on("breadcrumb:selected", function (crumb) {
    //        app.trigger(crumb.get("trigger"));
    //    });
    //
    //    var view = new BreadCrumbList({collection: collection});
    //    region.show(view);
    //};

    return module;
};
