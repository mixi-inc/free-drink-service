import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from "rxjs/Observable";


export class Variable<T> {
  private subject: BehaviorSubject<T>;


  constructor(value: T) {
    this.subject = new BehaviorSubject<T>(value)
  }

  get value(): T {
    return this.subject.value
  }

  set value(newValue: T) {
    this.subject.next(newValue)
  }

  asObservable(): Observable<T> {
    return this.subject.asObservable()
  }
}
