/**
 * Created by IvanRuskevich on 18.06.2015
 */

var IndexView = Marionette.ItemView.extend({
    template: "#index-template",
    events: {
        "click #nav-users-index": "showUserList"
    },
    showUserList: function (event) {
        event.preventDefault();
        UserAdmin.trigger("user:listing:requested");
    }
});
