/**
 * Created by IvanRuskevich on 18.06.2015
 */

var HomeRouter = Backbone.Router.extend({
    routes: {
        "": "showIndex"
    },
    showIndex: function () {
        UserAdmin.trigger("index:requested");
    }
});
