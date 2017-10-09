System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure() {
        const slackUrl = "https://slack.com/example";
        const dom = {
            form: document.getElementById("form"),
            kind: {
                coffee: {
                    cold: document.getElementById("cold-coffee"),
                    hot: document.getElementById("hot-coffee"),
                },
                tea: {
                    cold: document.getElementById("cold-tea"),
                    hot: document.getElementById("hot-tea"),
                },
                greenTea: {
                    cold: document.getElementById("cold-green-tea"),
                    hot: document.getElementById("hot-green-tea"),
                },
                oolongTea: {
                    cold: document.getElementById("cold-oolong-tea"),
                    hot: document.getElementById("hot-oolong-tea"),
                },
                jasmineTea: {
                    cold: document.getElementById("cold-jasmine-tea"),
                    hot: document.getElementById("hot-jasmine-tea"),
                },
                caffeineLessCoffee: {
                    cold: document.getElementById("cold-caffeine-less-coffee"),
                    hot: document.getElementById("hot-caffeine-less-coffee"),
                }
            },
            amount: document.getElementById("amount"),
            sugar: document.getElementById("sugar"),
            milk: document.getElementById("milk"),
            submit: document.getElementById("submit"),
        };
        return { slackUrl, dom };
    }
    exports_1("configure", configure);
    return {
        setters: [],
        execute: function () {
        }
    };
});
