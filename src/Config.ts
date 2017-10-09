export interface Config {
  slack: Slack;
  dom: Dom;
}


export interface Dom {
  form: HTMLFormElement,
  kind: {
    coffee: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
    tea: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
    greenTea: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
    oolongTea: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
    jasmineTea: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
    caffeineLessCoffee: {
      cold: HTMLInputElement;
      hot: HTMLInputElement;
    };
  };
  amount: HTMLInputElement;
  sugar: HTMLInputElement;
  milk: HTMLInputElement;
  locationHint: HTMLInputElement;
  submit: HTMLButtonElement;
  requestStatusText: HTMLElement;
}



export interface Slack {
  url: string;
}



export function configure(): Config {
  const slack: Slack = {
    url: "https://hooks.slack.com/services/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",
  };

  const dom: Dom = {
    form: document.getElementById("form") as HTMLFormElement,
    kind: {
      coffee: {
        cold: document.getElementById("cold-coffee") as HTMLInputElement,
        hot: document.getElementById("hot-coffee") as HTMLInputElement,
      },
      tea: {
        cold: document.getElementById("cold-tea") as HTMLInputElement,
        hot: document.getElementById("hot-tea") as HTMLInputElement,
      },
      greenTea: {
        cold: document.getElementById("cold-green-tea") as HTMLInputElement,
        hot: document.getElementById("hot-green-tea") as HTMLInputElement,
      },
      oolongTea: {
        cold: document.getElementById("cold-oolong-tea") as HTMLInputElement,
        hot: document.getElementById("hot-oolong-tea") as HTMLInputElement,
      },
      jasmineTea: {
        cold: document.getElementById("cold-jasmine-tea") as HTMLInputElement,
        hot: document.getElementById("hot-jasmine-tea") as HTMLInputElement,
      },
      caffeineLessCoffee: {
        cold: document.getElementById("cold-caffeine-less-coffee") as HTMLInputElement,
        hot: document.getElementById("hot-caffeine-less-coffee") as HTMLInputElement,
      }
    },
    amount: document.getElementById("amount") as HTMLInputElement,
    sugar: document.getElementById("sugar") as HTMLInputElement,
    milk: document.getElementById("milk") as HTMLInputElement,
    locationHint: document.getElementById("location-hint") as HTMLInputElement,
    submit: document.getElementById("submit") as HTMLButtonElement,
    requestStatusText: document.getElementById("request-status-text") as HTMLElement,
  };

  return {slack, dom};
}
