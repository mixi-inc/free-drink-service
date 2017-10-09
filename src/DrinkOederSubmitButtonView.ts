import { Dom } from "./config";
import { DrinkOrderValidationModel } from "./DrinkOrderValidationModel";
import {combineLatest} from "rxjs/observable/combineLatest";
import {DrinkOrderRequestModel} from "./DrinkOrderRequestModel";


export namespace DrinkOrderSubmitButtonView {
  export class View {
    constructor(private validationModel: DrinkOrderValidationModel.Type, private requestModel: DrinkOrderRequestModel.Type, private dom: Dom) {
      combineLatest(
          validationModel.didChange,
          requestModel.didChange
        ).subscribe(([validationState, requestState]) => {
          switch (validationState.type) {
            case "valid":
              switch (requestState.type) {
                case "posting":
                  dom.submit.disabled = true;
                  return;

                case "not-posted-yet":
                case "posted":
                  dom.submit.disabled = false;
                  return;

                default:
                  const _exhaustiveCheck: never = requestState;
                  return;
              }

            case "invalid":
              dom.submit.disabled = true;
              return;

            default:
              const _exhaustiveCheck: never = validationState;
              return;
          }
        });
    }
  }
}