export namespace Result {
  export type Type<S, F> = Success<S> | Failure<F>


  export interface Success<S> {
    type: "success";
    value: S;
  }


  export interface Failure<F> {
    type: "failure";
    reason: F;
  }
}
