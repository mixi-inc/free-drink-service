import { Slack } from "./config";
import { Result } from "./Result";



export namespace SlackApiClient {
  export type FailureReason = FailureHttpStatus;



  export interface FailureHttpStatus {
    type: "slack-api-client-failure-reason";
    statusCode: number;
  }



  export interface Type {
    post(text: string): Promise<Result.Type<void, FailureReason>>;
  }



  export class Client implements Type {
    constructor(private config: Slack) {}


    post(text: string): Promise<Result.Type<void, FailureReason>> {
      const request = new Request(this.config.url);
      const formData = new FormData();
      formData.append("payload", JSON.stringify({
        text: text,
      }));

      return fetch(request, { body: formData, method: "POST" })
        .then((response) => {
          if (response.status < 200 || response.status >= 400 ){
            return {
              type: "failure",
              reason: {
                type: "slack-api-client-failure-reason",
                statusCode: response.status,
              },
            } as Result.Failure<FailureReason>;
          }

          return {
            type: "success",
            value: undefined,
          } as Result.Success<void>;
        });
    }
  }
}