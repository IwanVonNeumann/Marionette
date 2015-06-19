/**
 * Created by Ivan Ruskevich on 17.06.2015
 */

var UserAdmin = new Marionette.Application();

UserAdmin.addRegions({
    mainRegion: "#app",
    navRegion: "#breadcrumbs"
});

// Module loader
UserAdmin.addInitializer(function () {

    UserAdmin.breadCrumbs = new BreadCrumbModule({
        app: UserAdmin,
        region: UserAdmin.navRegion,
        initialData: {title: "Home"}
    });

    UserAdmin.user = new UserModule({
        app: UserAdmin,
        initialData: testData
    });

    UserAdmin.home = new HomeModule({
        app: UserAdmin
    });
});

// Breadcrumbs events
UserAdmin.addInitializer(function () {
    var crumbs = {
        home: {title: "Home", trigger: "index:requested"},
        list: {title: "Users list", trigger: "user:listing:requested"}
    };

    UserAdmin.breadCrumbs.show();

    UserAdmin.on("index:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
    });

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.breadCrumbs.setCrumbs([
            crumbs.home,
            crumbs.list
        ]);
    });

    UserAdmin.on("user:selected", function (selectedUser) {
        UserAdmin.breadCrumbs.setCrumbs([
            crumbs.home,
            crumbs.list,
            {title: selectedUser.get("email")}
        ]);
    });
});

// User events
UserAdmin.addInitializer(function () {

    UserAdmin.on("user:listing:requested", function () {
        UserAdmin.user.controller.showUserList();
    });

    UserAdmin.on("user:selected", function (selectedUser) {
        UserAdmin.user.controller.showUserDetail(selectedUser);
    });
});

// Home events
UserAdmin.addInitializer(function () {

    UserAdmin.on("index:requested", function () {
        UserAdmin.home.controller.showIndex();
    });

    Backbone.history.start();
});
