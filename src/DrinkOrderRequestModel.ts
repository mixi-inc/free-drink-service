import { Observable } from "rxjs/Observable";
import { Result } from "./Result";
import { DrinkOrder, DrinkOrderDraft } from "./DrinkOrder";
import { Variable } from "./Variable";
import { SlackApiClient } from "./SlackApiClient";



export namespace DrinkOrderRequestRepository {
  export type FailureReason = SlackApiClient.FailureReason;


  export interface Type {
    request(order: DrinkOrder): Promise<Result.Type<void, FailureReason>>;
  }


  export class Repository implements Type {
    constructor(private api: SlackApiClient.Type) {}


    request(order: DrinkOrder): Promise<Result.Type<void, FailureReason>> {
      const message = `
  - kind: ${order.kind}
  - amount: ${order.amount}
  - sugar: ${order.sugar}
  - milk: ${order.milk}
  - location: ${order.locationHint}
`;

      return this.api.post(message);
    }
  }
}



export namespace DrinkOrderRequestModel {
  export interface Type {
    readonly currentState: State;
    readonly didChange: Observable<State>;

    request(order: DrinkOrder): void;
  }



  export type FailureReason = DrinkOrderRequestRepository.FailureReason | UnspecifiedError;



  export interface UnspecifiedError {
    type: "unspecified-error";
    debugInfo: string;
  }



  export type State = NotPostedYet | Posting | Posted



  export interface NotPostedYet {
    type: "not-posted-yet";
  }



  export interface Posting {
    type: "posting";
    draft: DrinkOrderDraft;
  }



  export interface Posted {
    type: "posted";
    result: Result.Type<void, FailureReason>;
  }


  export function createInitialState(): State {
    return { type: "not-posted-yet" };
  }



  export class Model implements Type {
    private stateVariable: Variable<State>;


    get currentState(): State {
      return this.stateVariable.value;
    }


    set currentState(newValue: State) {
      this.stateVariable.value = newValue;
    }


    get didChange(): Observable<State> {
      return this.stateVariable.asObservable()
    }


    constructor(initialState: State, private repository: DrinkOrderRequestRepository.Type) {
      this.stateVariable = new Variable<State>(initialState);
    }


    request(order: DrinkOrder): void {
      switch (this.currentState.type) {
        case "posting":
          return;

        case "not-posted-yet":
        case "posted":
          const that = this;
          this.repository.request(order)
            .then(() => {
              that.currentState = {
                type: "posted",
                result: {
                  type: "success",
                  value: undefined,
                },
              };
            })
            .catch((error) => {
              that.currentState = {
                type: "posted",
                result: {
                  type: "failure",
                  reason: {
                    type: "unspecified-error",
                    debugInfo: `${error}`,
                  },
                },
              };
            });
          return;
      }
    }
  }
}