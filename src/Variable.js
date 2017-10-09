System.register(["rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1, Variable;
    return {
        setters: [
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            Variable = class Variable {
                constructor(value) {
                    this.subject = new Rx_1.BehaviorSubject(value);
                }
                get value() {
                    return this.subject.value;
                }
                set value(newValue) {
                    this.subject.next(newValue);
                }
                asObservable() {
                    return this.subject.asObservable();
                }
            };
            exports_1("Variable", Variable);
        }
    };
});
