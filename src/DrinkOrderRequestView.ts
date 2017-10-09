import { Dom } from "./Config";
import { DrinkOrderRequestModel } from "./DrinkOrderRequestModel";

export namespace DrinkOrderRequestView {
  export class View {
    constructor(
      private model: DrinkOrderRequestModel.Type,
      private dom: Dom
    ) {
      model.didChange
        .subscribe((state) => {
          switch (state.type) {
            case "not-posted-yet":
              dom.requestStatusText.textContent = "";
              return;

            case "posting":
              dom.requestStatusText.textContent = "Posting your order...";
              return;

            case "posted":
              switch (state.result.type) {
                case "success":
                  dom.requestStatusText.textContent = "Successfully sent your order!";

                  setTimeout(() => {
                    dom.requestStatusText.textContent = "";
                  }, 5000);
                  return;

                case "failure":
                  dom.requestStatusText.textContent = "Sorry, something went wrong...";
                  return;

                default:
                  const _exhaustiveCheck: never = state.result;
                  return;
              }

            default:
              const _exhaustiveCheck: never = state;
              return;
          }
        })
    }
  }
}