/**
 * Created by IvanRuskevich on 18.06.2015
 */

var User = Backbone.Model.extend({
    url: "api/users",
    validate: function (atts, opts) {
        if (!(atts.email && atts.userName)) {
            return "Need an email AND a userName"
        }
    },
    initialize: function () {
        this.on("invalid", function (m) {
            alert(m.validationError)
        });
    },
    select: function () {
        UserAdmin.trigger("user:selected", this);
    }
});

var UsersCollection = Backbone.Collection.extend({
    url: "api/users",
    model: User
});
