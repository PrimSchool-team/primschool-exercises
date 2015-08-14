ps.francais.ununedes.View = function (mdl, u, div, number, min, max, sh) {

    this.buildController = function(model) {
        return new ps.francais.ununedes.Controller(model, this)
    };

    this.init = function (mdl, u, view, number, min, max, sh) {
        var model;

        this.base(mdl, u, view, number, min, max, sh);
        model = new ps.francais.ununedes.Model(number, min, max, sh);
        this.setModel(model);
        this.init_div(view);
        this.setController(this.buildController(model));
    };

    this.getDeterminant = function (i) {
        return this.determinants[i];
    };

    this.base = ps.francais.determinants.View;
    this.determinants = ["un", "une", "des"];

    this.init(mdl, u, div, number, min, max, sh);

};

ps.francais.ununedes.View.prototype = new ps.francais.determinants.View;