System.register(["./Variable", "./DrinkOrderValidation"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Variable_1, DrinkOrderValidation_1, DrinkOrderValidationModel;
    return {
        setters: [
            function (Variable_1_1) {
                Variable_1 = Variable_1_1;
            },
            function (DrinkOrderValidation_1_1) {
                DrinkOrderValidation_1 = DrinkOrderValidation_1_1;
            }
        ],
        execute: function () {
            (function (DrinkOrderValidationModel) {
                class Invalid {
                }
                DrinkOrderValidationModel.Invalid = Invalid;
                function createInitialState() {
                    return {
                        type: "valid",
                        order: {
                            kind: "hot-coffee",
                            amount: 1,
                            sugar: false,
                            milk: false,
                        },
                    };
                }
                DrinkOrderValidationModel.createInitialState = createInitialState;
                class Model {
                    constructor(initialState) {
                        this.stateVariable = new Variable_1.Variable(initialState);
                    }
                    get currentState() {
                        return this.stateVariable.value;
                    }
                    set currentState(newValue) {
                        this.stateVariable.value = newValue;
                    }
                    get didChange() {
                        return this.stateVariable.asObservable();
                    }
                    update(draft) {
                        const result = DrinkOrderValidation_1.DrinkOrderValidation.validate(draft);
                        switch (result.type) {
                            case "success":
                                this.currentState = {
                                    type: "valid",
                                    order: result.value,
                                };
                                return;
                            case "failure":
                                this.currentState = {
                                    type: "invalid",
                                    draft: draft,
                                    reason: result.reason,
                                };
                                return;
                            default:
                                const _exhaustiveCheck = result;
                                return;
                        }
                    }
                }
                DrinkOrderValidationModel.Model = Model;
            })(DrinkOrderValidationModel || (DrinkOrderValidationModel = {}));
            exports_1("DrinkOrderValidationModel", DrinkOrderValidationModel);
        }
    };
});
