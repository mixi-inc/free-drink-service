System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getOrderDraft(dom) {
        return {
            kind: getKind(dom),
            amount: Number(dom.amount.value),
            sugar: dom.sugar.checked,
            milk: dom.milk.checked,
        };
    }
    exports_1("getOrderDraft", getOrderDraft);
    function getKind(dom) {
        if (dom.kind.coffee.hot.checked) {
            return "hot-coffee";
        }
        if (dom.kind.coffee.cold.checked) {
            return "cold-coffee";
        }
        if (dom.kind.tea.hot.checked) {
            return "hot-tea";
        }
        if (dom.kind.tea.cold.checked) {
            return "cold-tea";
        }
        if (dom.kind.greenTea.hot.checked) {
            return "hot-green-tea";
        }
        if (dom.kind.greenTea.cold.checked) {
            return "cold-green-tea";
        }
        if (dom.kind.oolongTea.hot.checked) {
            return "hot-oolong-tea";
        }
        if (dom.kind.oolongTea.cold.checked) {
            return "cold-oolong-tea";
        }
        if (dom.kind.jasmineTea.hot.checked) {
            return "hot-jasmine-tea";
        }
        if (dom.kind.jasmineTea.cold.checked) {
            return "cold-jasmine-tea";
        }
        if (dom.kind.caffeineLessCoffee.hot.checked) {
            return "hot-caffeine-less-coffee";
        }
        if (dom.kind.caffeineLessCoffee.cold.checked) {
            return "cold-caffeine-less-coffee";
        }
        return undefined;
    }
    return {
        setters: [],
        execute: function () {
        }
    };
});
