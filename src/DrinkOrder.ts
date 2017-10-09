import { Dom } from "./Config";


export type DrinkKind = "hot-coffee" |
  "cold-coffee" |
  "hot-tea" |
  "cold-tea" |
  "hot-green-tea" |
  "cold-green-tea" |
  "hot-oolong-tea" |
  "cold-oolong-tea" |
  "hot-jasmine-tea" |
  "cold-jasmine-tea" |
  "hot-caffeine-less-coffee" |
  "cold-caffeine-less-coffee";


export interface DrinkOrder {
  kind: DrinkKind;
  amount: number;
  sugar: boolean;
  milk: boolean;
  locationHint: string;
}


export interface DrinkOrderDraft {
  kind: DrinkKind | void;
  amount: number;
  sugar: boolean;
  milk: boolean;
  locationHint: string;
}


export function getOrderDraft(dom: Dom): DrinkOrderDraft {
  return {
    kind: getKind(dom),
    amount: Number(dom.amount.value),
    sugar: dom.sugar.checked,
    milk: dom.milk.checked,
    locationHint: dom.locationHint.value,
  };
}


function getKind(dom: Dom): DrinkKind | void {
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
