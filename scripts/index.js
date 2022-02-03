import welcomeWindow from "./components/welcomeWindow.js";
import inputDataWindow from "./components/inputDataWindow.js";
import finalizationWindow from "./components/finalizationWindow.js";
import validationFunction from "./validation/validationFunction.js";
import loader from "./components/loader.js";
import componentSwitch from "./stages/componentSwitch.js";

const appCnt = document.querySelector(".app");
let isDataValid = [];
let startTime;
let finishTime;

let stagesInfo = {
  welcome: {
    component: welcomeWindow(),
    display: true,
  },
  inputData: {
    component: inputDataWindow(),
    display: false,
  },
  finalization: {
    component: finalizationWindow(),
    display: false,
  },
  loader: {
    component: loader(),
    display: false,
  },
};

const renderContent = (container) => {
  container.innerHTML = "";
  for (let component in stagesInfo) {
    if (stagesInfo[component].display) {
      container.innerHTML += stagesInfo[component].component;

      if (component === "welcome") {
        const button = container.querySelector(".button");

        button.addEventListener("click", () => {
          startTime = new Date();
          stagesInfo = componentSwitch(stagesInfo, "inputData");
          renderContent(appCnt);
        });
      }

      if (component === "inputData") {
        const button = container.querySelector(".button");
        const validationFields = {
          phone: container.querySelector("#phone"),
          code: container.querySelector("#code"),
        };

        button.addEventListener("click", () => {
          const validationObject = {
            phone: validationFields.phone.value,
            code: validationFields.code.value,
          };

          let validationResult = validationFunction(validationObject);

          for (let field in validationResult) {
            if (validationResult[field]) {
              validationFields[field].nextElementSibling.innerText =
                validationResult[field];

              isDataValid.push(false);
            } else {
              validationFields[field].nextElementSibling.innerText = "";
              isDataValid.push(true);
            }
          }

          if (isDataValid.every((el) => el)) {
            stagesInfo = componentSwitch(stagesInfo, "loader");
            renderContent(appCnt);

            const promise = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve("foo");
              }, Math.floor(Math.random() * 5000));
            });

            promise.then(() => {
              finishTime = new Date();
              stagesInfo = componentSwitch(stagesInfo, "finalization");
              renderContent(appCnt);
            });
          }

          isDataValid = [];
        });
      }

      if (component === "finalization") {
        const finnishButton = container.querySelector('[data-stage="finnish"]');
        const nextPackageButton = container.querySelector(
          '[data-stage="nextPackage"]'
        );

        const timeInfo = container.querySelector('[data-time="time"]');
        timeInfo.innerText += ` ${Math.floor(
          (finishTime - startTime) / 1000
        )} sekund.`;

        finnishButton.addEventListener("click", () => {
          stagesInfo = componentSwitch(stagesInfo, "welcome");
          renderContent(appCnt);
        });

        nextPackageButton.addEventListener("click", () => {
          startTime = new Date();
          stagesInfo = componentSwitch(stagesInfo, "inputData");
          renderContent(appCnt);
        });
      }
    }
  }
};

renderContent(appCnt);
