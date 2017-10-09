import { DrinkOrderRequestModel } from "./DrinkOrderRequestModel";
import { Dom } from "./Config";
import {DrinkOrderValidationModel} from "./DrinkOrderValidationModel";



export namespace DrinkOrderRequestController {
  export class Controller {
    constructor(
      private validationModel: DrinkOrderValidationModel.Type,
      private requestModel: DrinkOrderRequestModel.Type,
      private dom: Dom
    ) {
      dom.form.addEventListener("submit", (event) => {
        event.preventDefault();

        switch (validationModel.currentState.type) {
          case "invalid":
            return;

          case "valid":
            const order = validationModel.currentState.order;
            requestModel.request(order);
            return;

          default:
            const _exhaustiveCheck: never = validationModel.currentState;
            return;
        }
      });
    }
  }
}