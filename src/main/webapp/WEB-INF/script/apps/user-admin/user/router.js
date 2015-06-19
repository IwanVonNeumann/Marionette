/**
 * Created by IvanRuskevich on 18.06.2015
 */

var UserRouter = Backbone.Router.extend({
    initialize: function(options) {
        this.module = options.module;
    },
    routes: {
        "users": "showUserList",
        "users/:id": "showUserDetail"
    },
    showUserList: function () {
        this.module.app.trigger("user:listing:requested");
    },
    showUserDetail: function (id) {
        // static
        //var user = this.module.collection.get(id);
        //user.select();

        // server
        var user = new User({id: id});
        user.fetch().then(function() {
            user.select();
        });
    }
});
