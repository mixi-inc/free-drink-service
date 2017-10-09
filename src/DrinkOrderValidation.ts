import { DrinkOrder, DrinkOrderDraft } from "./DrinkOrder";
import { Result } from "./Result";


export namespace DrinkOrderValidation {
  export type FailureReason = "no-kind-is-selected" |
    "amount-is-not-a-positive-integer" |
    "amount-is-too-large" |
    "location-hint-is-empty";


  export function validate(draft: DrinkOrderDraft): Result.Type<DrinkOrder, FailureReason> {
    if (draft.kind === undefined) {
      return {
        type: "failure",
        reason: "amount-is-not-a-positive-integer",
      };
    }

    if (isNaN(draft.amount)) {
      return {
        type: "failure",
        reason: "amount-is-not-a-positive-integer",
      };
    }

    if (draft.amount < 1) {
      return {
        type: "failure",
        reason: "amount-is-not-a-positive-integer",
      };
    }

    if (draft.amount > 5) {
      return {
        type: "failure",
        reason: "amount-is-too-large",
      };
    }

    if (draft.amount % 1 !== 0) {
      return {
        type: "failure",
        reason: "amount-is-not-a-positive-integer",
      };
    }

    if (draft.locationHint.length <= 0) {
      return {
        type: "failure",
        reason: "location-hint-is-empty",
      }
    }

    return {
      type: "success",
      value: {
        kind: draft.kind,
        amount: draft.amount,
        sugar: draft.sugar,
        milk: draft.milk,
        locationHint: draft.locationHint,
      },
    };
  }
}
