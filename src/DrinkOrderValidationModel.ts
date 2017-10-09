import { Variable } from "./Variable";
import { Observable } from "rxjs/Observable";
import { DrinkOrder, DrinkOrderDraft } from "./DrinkOrder";
import { DrinkOrderValidation } from "./DrinkOrderValidation";


export namespace DrinkOrderValidationModel {
  export interface Type {
    readonly currentState: State;
    readonly didChange: Observable<State>;

    update(draft: DrinkOrderDraft): void;
  }



  export type State = Valid | Invalid



  export interface Valid {
    type: "valid";
    order: DrinkOrder;
  }



  export class Invalid {
    type: "invalid";
    draft: DrinkOrderDraft;
    reason: DrinkOrderValidation.FailureReason;
  }



  export function createInitialState(): State {
    return {
      type: "valid",
      order: {
        kind: "hot-coffee",
        amount: 1,
        sugar: false,
        milk: false,
        locationHint: "",
      },
    };
  }



  export class Model implements Type {
    private stateVariable: Variable<State>;


    get currentState(): State {
      return this.stateVariable.value;
    }


    set currentState(newValue: State) {
      this.stateVariable.value = newValue
    }


    get didChange(): Observable<State> {
      return this.stateVariable.asObservable()
    }


    constructor(initialState: State) {
      this.stateVariable = new Variable<State>(initialState);
    }


    update(draft: DrinkOrderDraft): void {
      const result = DrinkOrderValidation.validate(draft);

      switch (result.type) {
        case "success":
          this.currentState = {
            type: "valid",
            order: result.value,
          };
          return;

        case "failure":
          this.currentState = {
            type: "invalid",
            draft: draft,
            reason: result.reason,
          };
          return;

        default:
          const _exhaustiveCheck: never = result;
          return;
      }
    }
  }
}
