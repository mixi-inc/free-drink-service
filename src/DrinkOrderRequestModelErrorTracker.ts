import { DrinkOrderRequestModel } from "./DrinkOrderRequestModel";



export namespace DrinkOrderRequestModelErrorTracker {
  export class ErrorTracker {
    constructor(private model: DrinkOrderRequestModel.Type) {
      model.didChange
        .subscribe((state) => {
          switch (state.type) {
            case "not-posted-yet":
            case "posting":
              return;

            case "posted":
              switch (state.result.type) {
                case "success":
                  return;

                case "failure":
                  console.error(state.result.reason);
                  return;

                default:
                  const _exhaustiveCheck: never = state.result;
                  return;
              }

            default:
              const _exhaustiveCheck: never = state;
              return;
          }
        });
    }
  }
}