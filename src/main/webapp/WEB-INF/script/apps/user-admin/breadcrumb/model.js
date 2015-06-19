/**
 * Created by IvanRuskevich on 18.06.2015
 */

var BreadCrumb = Backbone.Model.extend({
    select: function () {
        this.trigger("breadcrumb:selected", this);
    }
});

var BreadCrumbCollection = Backbone.Collection.extend({
    model: BreadCrumb
});
