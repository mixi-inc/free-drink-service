import { configure } from "./Config";
import { DrinkOrderValidationModel } from "./DrinkOrderValidationModel";
import { DrinkOrderSubmitButtonView } from "./DrinkOederSubmitButtonView";
import { DrinkOrderValidationController } from "./DrinkOrderValidationController";
import { printHiringMessage } from "./ConsoleMessage";
import { DrinkOrderRequestModel, DrinkOrderRequestRepository } from "./DrinkOrderRequestModel";
import { SlackApiClient } from "./SlackApiClient";
import { DrinkOrderRequestController } from "./DrinkOrderRequestController";
import { DrinkOrderRequestModelErrorTracker } from "./DrinkOrderRequestModelErrorTracker";
import {DrinkOrderRequestView} from "./DrinkOrderRequestView";



namespace MixiDrinkService {
  printHiringMessage();

  export const config = configure();

  export const slackApiClient = new SlackApiClient.Client(config.slack);

  export const requestRepository = new DrinkOrderRequestRepository.Repository(
    slackApiClient
  );

  export const validationModel = new DrinkOrderValidationModel.Model(
    DrinkOrderValidationModel.createInitialState()
  );

  export const requestModel = new DrinkOrderRequestModel.Model(
    DrinkOrderRequestModel.createInitialState(),
    requestRepository
  );

  export const submitButtonView = new DrinkOrderSubmitButtonView.View(
    validationModel,
    requestModel,
    config.dom
  );

  export const validationController = new DrinkOrderValidationController.Controller(
    validationModel,
    config.dom
  );

  export const requestController = new DrinkOrderRequestController.Controller(
    validationModel,
    requestModel,
    config.dom
  );

  export const requestErrorTracker = new DrinkOrderRequestModelErrorTracker.ErrorTracker(
    requestModel
  );

  export const requestView = new DrinkOrderRequestView.View(
    requestModel,
    config.dom
  );
}
