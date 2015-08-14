ps.francais.lelales.View = function (mdl, u, div, number, min, max, sh) {

    this.buildController = function(model) {
        return new ps.francais.lelales.Controller(model, this)
    };

    this.init = function (mdl, u, view, number, min, max, sh) {
        var model;

        this.base(mdl, u, view, number, min, max, sh);
        model = new ps.francais.lelales.Model(number, min, max, sh);
        this.setModel(model);
        this.init_div(view);
        this.setController(this.buildController(model));
    };

    this.getDeterminant = function (i) {
        return this.determinants[i];
    };

    this.base = ps.francais.determinants.View;
    this.determinants = ["le", "la", "les"];

    this.init(mdl, u, div, number, min, max, sh);
};

ps.francais.lelales.View.prototype = new ps.francais.determinants.View;