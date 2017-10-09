import { Dom } from "./config";
import { DrinkOrderValidationModel } from "./DrinkOrderValidationModel";
import { getOrderDraft } from "./DrinkOrder";


export namespace DrinkOrderValidationController {
  export class Controller {
    constructor(private model: DrinkOrderValidationModel.Model, private dom: Dom) {
      [
        dom.kind.coffee.hot,
        dom.kind.coffee.cold,
        dom.kind.tea.hot,
        dom.kind.tea.cold,
        dom.kind.greenTea.hot,
        dom.kind.greenTea.cold,
        dom.kind.oolongTea.hot,
        dom.kind.oolongTea.cold,
        dom.kind.jasmineTea.hot,
        dom.kind.jasmineTea.cold,
        dom.kind.caffeineLessCoffee.hot,
        dom.kind.caffeineLessCoffee.cold,
        dom.amount,
        dom.sugar,
        dom.milk,
        dom.locationHint,
      ].forEach((element) => {
        element.addEventListener("change", () => {
          this.update();
        })
      });

      [
        dom.amount,
        dom.locationHint,
      ].forEach((element) => {
        element.addEventListener("input", () => {
          this.update();
        });
      });

      // Initial update
      this.update();
    }


    update() {
      const draft = getOrderDraft(this.dom);
      this.model.update(draft)
    }
  }
}