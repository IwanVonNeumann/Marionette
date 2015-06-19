/**
 * Created by IvanRuskevich on 18.06.2015
 */

var BreadCrumbView = Marionette.ItemView.extend({
    tagName: "li",
    template: _.template("<a href=#><%=title%></a>"),
    events: {
        "click a": "fireTrigger"
    },
    fireTrigger: function (event) {
        event.preventDefault();
        this.model.select();
    }
});

var BreadCrumbList = Marionette.CollectionView.extend({
    tagName: "ol",
    className: "breadcrumb",
    childView: BreadCrumbView
});
