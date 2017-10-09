System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DrinkOrderValidation;
    return {
        setters: [],
        execute: function () {
            (function (DrinkOrderValidation) {
                function validate(draft) {
                    if (draft.kind === undefined) {
                        return {
                            type: "failure",
                            reason: "no-kind-is-selected"
                        };
                    }
                    if (isNaN(draft.amount)) {
                        return {
                            type: "failure",
                            reason: "amount-is-not-a-integer"
                        };
                    }
                    if (draft.amount % 1 !== 0) {
                        return {
                            type: "failure",
                            reason: "amount-is-not-a-integer"
                        };
                    }
                    return {
                        type: "success",
                        value: {
                            kind: draft.kind,
                            amount: draft.amount,
                            sugar: draft.sugar,
                            milk: draft.milk,
                        },
                    };
                }
                DrinkOrderValidation.validate = validate;
            })(DrinkOrderValidation || (DrinkOrderValidation = {}));
            exports_1("DrinkOrderValidation", DrinkOrderValidation);
        }
    };
});
