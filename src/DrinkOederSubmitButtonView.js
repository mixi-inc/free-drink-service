System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DrinkOrderValidationView;
    return {
        setters: [],
        execute: function () {
            (function (DrinkOrderValidationView) {
                class View {
                    constructor(model, dom) {
                        this.model = model;
                        this.dom = dom;
                        model
                            .didChange
                            .subscribe((state) => {
                            switch (state.type) {
                                case "valid":
                                    dom.submit.disabled = false;
                                    return;
                                case "invalid":
                                    dom.submit.disabled = true;
                                    return;
                            }
                        });
                    }
                }
                DrinkOrderValidationView.View = View;
            })(DrinkOrderValidationView || (DrinkOrderValidationView = {}));
            exports_1("DrinkOrderValidationView", DrinkOrderValidationView);
        }
    };
});
