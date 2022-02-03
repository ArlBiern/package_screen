import welcomeWindow from "./components/welcomeWindow.js";
import inputDataWindow from "./components/inputDataWindow.js";
import finalizationWindow from "./components/finalizationWindow.js";
import validationFunction from "./validation/validationFunction.js";

const appCnt = document.querySelector(".app");
let isDataValid = [];

const stagesInfo = {
  welcome: {
    component: welcomeWindow(),
    modal: false,
    display: true,
  },
  inputData: {
    component: inputDataWindow(),
    modal: false,
    display: false,
  },
  finalization: {
    component: finalizationWindow(),
    modal: true,
    display: false,
  },
};

const renderContent = (container) => {
  for (let component in stagesInfo) {
    if (stagesInfo[component].display) {
      container.innerHTML = stagesInfo[component].component;
      const button = container.querySelector(".button");

      if (button.dataset.stage === "welcome") {
        button.addEventListener("click", () => {
          stagesInfo.welcome.display = false;
          stagesInfo.inputData.display = true;
          stagesInfo.finalization.display = false;
          renderContent(appCnt);
        });
      }

      if (button.dataset.stage === "input") {
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
            stagesInfo.welcome.display = false;
            stagesInfo.inputData.display = false;
            stagesInfo.finalization.display = true;
            renderContent(appCnt);
          }

          isDataValid = [];
        });
      }
    }
  }
};

renderContent(appCnt);
